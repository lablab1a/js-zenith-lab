import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Trophy, Target } from "lucide-react";
import CodeEditor from "@/components/CodeEditor";

const challenges = [
  {
    id: 1,
    title: "FizzBuzz Classic",
    difficulty: "Easy",
    description: "Print numbers 1 to 15, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'",
    category: "Loops",
    startingCode: `// FizzBuzz Challenge
// Print numbers 1-15 with special rules:
// - Multiples of 3: print "Fizz"
// - Multiples of 5: print "Buzz" 
// - Multiples of both: print "FizzBuzz"

for (let i = 1; i <= 15; i++) {
    // Your code here
    
}`,
    solution: `for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}`,
    completed: false
  },
  {
    id: 2,
    title: "Array Sum",
    difficulty: "Easy",
    description: "Calculate the sum of all numbers in an array",
    category: "Arrays",
    startingCode: `// Calculate the sum of all numbers in the array
const numbers = [1, 5, 10, 15, 20, 25, 30];

// Your code here - calculate the sum
let sum = 0;

console.log("Sum:", sum); // Should output: Sum: 106`,
    solution: `const numbers = [1, 5, 10, 15, 20, 25, 30];

let sum = 0;
for (let number of numbers) {
    sum += number;
}

// Or using reduce:
// let sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum:", sum);`,
    completed: false
  },
  {
    id: 3,
    title: "Palindrome Checker",
    difficulty: "Medium",
    description: "Check if a string reads the same forwards and backwards",
    category: "Strings",
    startingCode: `// Check if a string is a palindrome
function isPalindrome(str) {
    // Convert to lowercase and remove spaces
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Your code here
    
}

// Test cases
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("hello")); // false`,
    solution: `function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Method 1: Compare with reversed string
    return cleaned === cleaned.split('').reverse().join('');
    
    // Method 2: Two pointer approach
    // let left = 0;
    // let right = cleaned.length - 1;
    // while (left < right) {
    //     if (cleaned[left] !== cleaned[right]) {
    //         return false;
    //     }
    //     left++;
    //     right--;
    // }
    // return true;
}

console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("hello"));`,
    completed: false
  },
  {
    id: 4,
    title: "Object Property Counter",
    difficulty: "Medium",
    description: "Count the frequency of each character in a string using an object",
    category: "Objects",
    startingCode: `// Count character frequency in a string
function countCharacters(str) {
    const result = {};
    
    // Your code here
    
    return result;
}

// Test
const text = "hello world";
console.log(countCharacters(text));
// Should output: {h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1}`,
    solution: `function countCharacters(str) {
    const result = {};
    
    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
        // Or shorter: result[char] = (result[char] || 0) + 1;
    }
    
    return result;
}

const text = "hello world";
console.log(countCharacters(text));`,
    completed: false
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-success text-white";
    case "Medium":
      return "bg-warning text-white";
    case "Hard":
      return "bg-destructive text-white";
    default:
      return "bg-muted";
  }
};

export default function Practice() {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const currentChallenge = selectedChallenge ? challenges.find(c => c.id === selectedChallenge) : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Practice Challenges
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Test your JavaScript skills with coding challenges. Start with easy problems and work your way up!
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-warning" />
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{challenges.length}</div>
            <p className="text-sm text-muted-foreground">Total Challenges</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="w-8 h-8 mx-auto mb-2 text-success" />
            <div className="text-2xl font-bold">-</div>
            <p className="text-sm text-muted-foreground">Avg. Time</p>
          </CardContent>
        </Card>
      </div>

      {selectedChallenge ? (
        /* Selected Challenge View */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedChallenge(null)}>
              ← Back to Challenges
            </Button>
            <div className="flex items-center space-x-2">
              <Badge className={getDifficultyColor(currentChallenge?.difficulty || "")}>
                {currentChallenge?.difficulty}
              </Badge>
              <Badge variant="outline">{currentChallenge?.category}</Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{currentChallenge?.title}</CardTitle>
              <CardDescription>{currentChallenge?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeEditor
                initialCode={currentChallenge?.startingCode || ""}
                height="400px"
              />
              
              <div className="flex justify-between items-center mt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowSolution(!showSolution)}
                >
                  {showSolution ? "Hide Solution" : "Show Solution"}
                </Button>
                <Button>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark Complete
                </Button>
              </div>

              {showSolution && (
                <Card className="mt-4 bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-sm">Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeEditor
                      initialCode={currentChallenge?.solution || ""}
                      height="200px"
                      readOnly
                    />
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Challenge List View */
        <div className="grid gap-4 md:grid-cols-2">
          {challenges.map((challenge) => (
            <Card 
              key={challenge.id} 
              className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group"
              onClick={() => setSelectedChallenge(challenge.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {challenge.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {challenge.description}
                    </CardDescription>
                  </div>
                  {challenge.completed && (
                    <CheckCircle className="w-5 h-5 text-success" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Badge className={getDifficultyColor(challenge.difficulty)}>
                    {challenge.difficulty}
                  </Badge>
                  <Badge variant="outline">{challenge.category}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}