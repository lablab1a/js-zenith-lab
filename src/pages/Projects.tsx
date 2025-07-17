import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Code, ExternalLink, ChevronLeft } from "lucide-react";
import CodeEditor from "@/components/CodeEditor";

const projects = [
  {
    id: "counter",
    title: "Click Counter",
    description: "Build a simple counter that increments when clicked",
    difficulty: "Beginner",
    category: "DOM Manipulation",
    html: `<div id="app">
  <h1>Click Counter</h1>
  <div class="counter-container">
    <h2 id="count">0</h2>
    <div class="buttons">
      <button id="increment">+</button>
      <button id="decrement">-</button>
      <button id="reset">Reset</button>
    </div>
  </div>
</div>`,
    css: `.counter-container {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
}

#count {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

#increment {
  background-color: #22c55e;
  color: white;
}

#decrement {
  background-color: #ef4444;
  color: white;
}

#reset {
  background-color: #6b7280;
  color: white;
}

button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}`,
    js: `// Counter functionality
let count = 0;

// Get DOM elements
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Update display
function updateDisplay() {
    countDisplay.textContent = count;
}

// Event listeners
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});`
  },
  {
    id: "todo",
    title: "Todo List",
    description: "Create a todo list where you can add and remove tasks",
    difficulty: "Intermediate",
    category: "DOM & Arrays",
    html: `<div id="app">
  <h1>My Todo List</h1>
  <div class="todo-container">
    <div class="input-container">
      <input type="text" id="todoInput" placeholder="Add a new task...">
      <button id="addBtn">Add</button>
    </div>
    <ul id="todoList"></ul>
  </div>
</div>`,
    css: `.todo-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.input-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

#todoInput {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
}

#todoInput:focus {
  outline: none;
  border-color: #3b82f6;
}

#addBtn {
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

#todoList {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #f9fafb;
  border-radius: 6px;
  border-left: 4px solid #3b82f6;
}

.delete-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}`,
    js: `// Todo list functionality
let todos = [];

// Get DOM elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add todo function
function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        todos.push({
            id: Date.now(),
            text: text
        });
        todoInput.value = '';
        renderTodos();
    }
}

// Delete todo function
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = \`
            <span>\${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(\${todo.id})">Delete</button>
        \`;
        todoList.appendChild(li);
    });
}

// Event listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});`
  },
  {
    id: "calculator",
    title: "Calculator",
    description: "Build a working calculator with basic operations",
    difficulty: "Intermediate",
    category: "Logic & Math",
    html: `<div id="app">
  <div class="calculator">
    <div class="display">
      <div id="result">0</div>
    </div>
    <div class="buttons">
      <button class="btn-clear" onclick="clearDisplay()">C</button>
      <button class="btn-operator" onclick="inputOperator('/')">/</button>
      <button class="btn-operator" onclick="inputOperator('*')">×</button>
      <button class="btn-operator" onclick="deleteLast()">⌫</button>
      
      <button class="btn-number" onclick="inputNumber('7')">7</button>
      <button class="btn-number" onclick="inputNumber('8')">8</button>
      <button class="btn-number" onclick="inputNumber('9')">9</button>
      <button class="btn-operator" onclick="inputOperator('-')">-</button>
      
      <button class="btn-number" onclick="inputNumber('4')">4</button>
      <button class="btn-number" onclick="inputNumber('5')">5</button>
      <button class="btn-number" onclick="inputNumber('6')">6</button>
      <button class="btn-operator" onclick="inputOperator('+')">+</button>
      
      <button class="btn-number" onclick="inputNumber('1')">1</button>
      <button class="btn-number" onclick="inputNumber('2')">2</button>
      <button class="btn-number" onclick="inputNumber('3')">3</button>
      <button class="btn-equals" onclick="calculate()" rowspan="2">=</button>
      
      <button class="btn-number btn-zero" onclick="inputNumber('0')">0</button>
      <button class="btn-number" onclick="inputNumber('.')">.</button>
    </div>
  </div>
</div>`,
    css: `.calculator {
  width: 300px;
  margin: 2rem auto;
  background: #333;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.display {
  background: #000;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

#result {
  color: white;
  font-size: 2rem;
  text-align: right;
  font-family: 'Courier New', monospace;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

button {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-number {
  background: #666;
  color: white;
}

.btn-operator {
  background: #ff9500;
  color: white;
}

.btn-equals {
  background: #ff9500;
  color: white;
  grid-row: span 2;
}

.btn-clear {
  background: #a6a6a6;
  color: black;
}

.btn-zero {
  grid-column: span 2;
}

button:hover {
  opacity: 0.8;
  transform: scale(0.98);
}`,
    js: `// Calculator functionality
let currentInput = '';
let operator = '';
let previousInput = '';

const display = document.getElementById('result');

function updateDisplay(value) {
    display.textContent = value || '0';
}

function inputNumber(num) {
    if (currentInput.length < 10) {
        currentInput += num;
        updateDisplay(currentInput);
    }
}

function inputOperator(op) {
    if (currentInput === '') return;
    
    if (previousInput !== '' && operator !== '') {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(result);
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}`
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');

  const currentProject = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-success text-white";
      case "Intermediate":
        return "bg-warning text-white";
      case "Advanced":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  if (selectedProject && currentProject) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => setSelectedProject(null)}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          <div className="flex items-center space-x-2">
            <Badge className={getDifficultyColor(currentProject.difficulty)}>
              {currentProject.difficulty}
            </Badge>
            <Badge variant="outline">{currentProject.category}</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{currentProject.title}</h1>
          <p className="text-xl text-muted-foreground">{currentProject.description}</p>
        </div>

        {/* Code Tabs */}
        <Card>
          <CardHeader>
            <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
              <Button
                variant={activeTab === 'html' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('html')}
              >
                HTML
              </Button>
              <Button
                variant={activeTab === 'css' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('css')}
              >
                CSS
              </Button>
              <Button
                variant={activeTab === 'js' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('js')}
              >
                JavaScript
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {activeTab === 'html' && (
              <CodeEditor
                initialCode={currentProject.html}
                language="html"
                height="400px"
              />
            )}
            {activeTab === 'css' && (
              <CodeEditor
                initialCode={currentProject.css}
                language="css"
                height="400px"
              />
            )}
            {activeTab === 'js' && (
              <CodeEditor
                initialCode={currentProject.js}
                language="javascript"
                height="400px"
              />
            )}
          </CardContent>
        </Card>

        {/* Live Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            <CardDescription>See your project in action</CardDescription>
          </CardHeader>
          <CardContent>
            <div 
              className="border rounded-lg p-4 bg-white min-h-96"
              dangerouslySetInnerHTML={{
                __html: `
                  <style>${currentProject.css}</style>
                  ${currentProject.html}
                  <script>${currentProject.js}</script>
                `
              }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Mini Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Apply your JavaScript skills with hands-on projects. Each project comes with complete HTML, CSS, and JavaScript code that you can explore and modify.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group"
            onClick={() => setSelectedProject(project.id)}
          >
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors flex items-center">
                <Code className="w-5 h-5 mr-2" />
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <Button size="sm" variant="ghost">
                  <Play className="w-4 h-4 mr-2" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader>
          <CardTitle>Want to Build More?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            These projects are just the beginning! Try modifying them, adding new features, or building your own projects from scratch.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">API Integration</Badge>
            <Badge variant="outline">Local Storage</Badge>
            <Badge variant="outline">CSS Animations</Badge>
            <Badge variant="outline">Form Validation</Badge>
            <Badge variant="outline">Game Development</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}