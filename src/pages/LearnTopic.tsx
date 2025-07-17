import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, CheckCircle, PlayCircle } from "lucide-react";
import CodeEditor from "@/components/CodeEditor";

const topicData: Record<string, any> = {
  variables: {
    title: "Variables & Data Types",
    description: "Learn about declaring variables and working with different data types",
    sections: [
      {
        title: "Declaring Variables",
        content: `In JavaScript, you can declare variables using \`let\`, \`const\`, or \`var\`. Here's what you need to know:

**let**: Use for variables that can change
**const**: Use for variables that won't change
**var**: Old way (avoid in modern code)`,
        example: `// Using let for changeable variables
let userName = "Alice";
userName = "Bob"; // This works

// Using const for unchangeable variables
const siteName = "JS Learn Hub";
// siteName = "Other Site"; // This would cause an error

console.log(userName);
console.log(siteName);`
      },
      {
        title: "Data Types",
        content: `JavaScript has several built-in data types:

**Primitive Types:**
- String: Text data
- Number: Numeric data
- Boolean: true/false
- undefined: Variable declared but no value assigned
- null: Intentionally empty value`,
        example: `// String
let message = "Hello, World!";

// Number
let age = 25;
let price = 19.99;

// Boolean
let isStudent = true;
let hasJob = false;

// undefined
let notDefined;

// null
let emptyValue = null;

console.log(typeof message);  // "string"
console.log(typeof age);      // "number"
console.log(typeof isStudent); // "boolean"`
      }
    ],
    challenge: {
      title: "Try It Yourself",
      description: "Create variables for a user profile",
      startingCode: `// Create variables for a user profile
// Include: name (string), age (number), isActive (boolean)

// Your code here:


// Test your variables
console.log("Name:", name);
console.log("Age:", age);
console.log("Active:", isActive);`,
      solution: `// Create variables for a user profile
let name = "Sarah";
let age = 28;
let isActive = true;

// Test your variables
console.log("Name:", name);
console.log("Age:", age);
console.log("Active:", isActive);`
    }
  },
  functions: {
    title: "Functions",
    description: "Master function declarations, expressions, and arrow functions",
    sections: [
      {
        title: "Function Declarations",
        content: `Functions are reusable blocks of code that perform specific tasks. You can declare functions in several ways.`,
        example: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Call the function
let message = greet("Alice");
console.log(message);

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8`
      },
      {
        title: "Arrow Functions",
        content: `Arrow functions provide a shorter syntax for writing functions. They're especially useful for simple operations.`,
        example: `// Arrow function
const greet = (name) => {
    return "Hello, " + name + "!";
}

// Even shorter for simple expressions
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

console.log(greet("Bob"));
console.log(add(10, 5));
console.log(square(4));`
      }
    ],
    challenge: {
      title: "Function Challenge",
      description: "Create a function that calculates the area of a rectangle",
      startingCode: `// Create a function called 'calculateArea'
// It should take width and height as parameters
// Return the area (width * height)

// Your function here:


// Test your function
console.log(calculateArea(5, 10)); // Should output 50
console.log(calculateArea(3, 7));  // Should output 21`,
      solution: `// Create a function called 'calculateArea'
const calculateArea = (width, height) => {
    return width * height;
}

// Or even shorter:
// const calculateArea = (width, height) => width * height;

// Test your function
console.log(calculateArea(5, 10)); // Should output 50
console.log(calculateArea(3, 7));  // Should output 21`
    }
  }
};

export default function LearnTopic() {
  const { topicId } = useParams();
  const topic = topicData[topicId || ""];

  if (!topic) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
        <Link to="/learn">
          <Button>Back to Learning</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link to="/learn">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Topics
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{topic.title}</h1>
        <p className="text-xl text-muted-foreground">{topic.description}</p>
        <Badge className="bg-info text-white">Interactive Lesson</Badge>
      </div>

      {/* Sections */}
      {topic.sections.map((section: any, index: number) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-success" />
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              {section.content.split('\n').map((line: string, lineIndex: number) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <p key={lineIndex} className="font-semibold text-foreground">
                      {line.slice(2, -2)}
                    </p>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <p key={lineIndex} className="ml-4 text-muted-foreground">
                      {line}
                    </p>
                  );
                }
                return line ? (
                  <p key={lineIndex} className="text-muted-foreground">{line}</p>
                ) : (
                  <br key={lineIndex} />
                );
              })}
            </div>
            <CodeEditor
              initialCode={section.example}
              height="250px"
              readOnly={false}
            />
          </CardContent>
        </Card>
      ))}

      {/* Challenge Section */}
      {topic.challenge && (
        <Card className="border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PlayCircle className="w-5 h-5 mr-2 text-success" />
              {topic.challenge.title}
            </CardTitle>
            <CardDescription>{topic.challenge.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeEditor
              initialCode={topic.challenge.startingCode}
              height="300px"
              readOnly={false}
            />
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link to="/learn">
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4 mr-2" />
            All Topics
          </Button>
        </Link>
        <Button>
          Next Topic
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}