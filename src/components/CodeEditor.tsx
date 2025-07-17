import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Copy, Check, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeEditorProps {
  initialCode?: string;
  height?: string;
  language?: string;
  readOnly?: boolean;
  onCodeChange?: (code: string) => void;
  showOutput?: boolean;
}

export default function CodeEditor({
  initialCode = "console.log('Hello, JavaScript!');",
  height = "300px",
  language = "javascript",
  readOnly = false,
  onCodeChange,
  showOutput = true,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
      onCodeChange?.(value);
    }
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    // Create a custom console to capture output
    const customConsole = {
      log: (...args: any[]) => {
        const message = args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' ');
        setOutput(prev => [...prev, `> ${message}`]);
      },
      error: (...args: any[]) => {
        const message = args.map(arg => String(arg)).join(' ');
        setOutput(prev => [...prev, `❌ Error: ${message}`]);
      },
      warn: (...args: any[]) => {
        const message = args.map(arg => String(arg)).join(' ');
        setOutput(prev => [...prev, `⚠️ Warning: ${message}`]);
      }
    };

    try {
      // Create a function that executes the code with our custom console
      const executeCode = new Function('console', 'alert', code);
      
      // Replace alert with a custom implementation
      const customAlert = (message: string) => {
        setOutput(prev => [...prev, `🔔 Alert: ${message}`]);
      };

      executeCode(customConsole, customAlert);
      
      if (output.length === 0) {
        setOutput(['✅ Code executed successfully (no output)']);
      }
    } catch (error) {
      setOutput([`❌ Error: ${(error as Error).message}`]);
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
    if (editorRef.current) {
      editorRef.current.setValue(initialCode);
    }
    onCodeChange?.(initialCode);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Code copied!",
        description: "The code has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Could not copy code to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div className="flex items-center justify-between p-3 bg-muted border-b">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-3 text-sm font-medium">Code Editor</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={copyCode}
              disabled={copied}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetCode}
              disabled={readOnly}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            {showOutput && (
              <Button
                onClick={runCode}
                disabled={isRunning || readOnly}
                size="sm"
                className="bg-success hover:bg-success/90"
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? "Running..." : "Run Code"}
              </Button>
            )}
          </div>
        </div>

        <Editor
          height={height}
          language={language}
          value={code}
          onChange={handleCodeChange}
          onMount={handleEditorDidMount}
          theme="vs-dark"
          options={{
            readOnly,
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
          }}
        />
      </Card>

      {showOutput && output.length > 0 && (
        <Card className="p-4">
          <h4 className="font-semibold mb-3 flex items-center">
            <Terminal className="w-4 h-4 mr-2" />
            Output
          </h4>
          <div className="bg-code-bg text-code-foreground p-3 rounded-lg font-mono text-sm space-y-1 max-h-40 overflow-y-auto">
            {output.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap">
                {line}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}