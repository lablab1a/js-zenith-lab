import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Star, ChevronRight } from "lucide-react";

const topics = [
  {
    id: "variables",
    title: "Variables & Data Types",
    description: "Learn about let, const, var and different data types in JavaScript",
    difficulty: "Beginner",
    duration: "30 min",
    progress: 0,
    icon: "📝"
  },
  {
    id: "functions",
    title: "Functions",
    description: "Master function declarations, expressions, arrow functions and more",
    difficulty: "Beginner",
    duration: "45 min",
    progress: 0,
    icon: "⚡"
  },
  {
    id: "arrays",
    title: "Arrays & Objects",
    description: "Work with arrays, objects, and their methods",
    difficulty: "Beginner",
    duration: "40 min",
    progress: 0,
    icon: "📦"
  },
  {
    id: "loops",
    title: "Loops & Iteration",
    description: "For loops, while loops, forEach, map, filter and more",
    difficulty: "Intermediate",
    duration: "35 min",
    progress: 0,
    icon: "🔄"
  },
  {
    id: "dom",
    title: "DOM Manipulation",
    description: "Learn to interact with HTML elements using JavaScript",
    difficulty: "Intermediate",
    duration: "50 min",
    progress: 0,
    icon: "🌐"
  },
  {
    id: "events",
    title: "Events & Event Handling",
    description: "Handle user interactions with event listeners",
    difficulty: "Intermediate",
    duration: "40 min",
    progress: 0,
    icon: "👆"
  },
  {
    id: "async",
    title: "Async JavaScript",
    description: "Promises, async/await, and handling asynchronous operations",
    difficulty: "Advanced",
    duration: "60 min",
    progress: 0,
    icon: "⏰"
  },
  {
    id: "es6",
    title: "ES6+ Features",
    description: "Modern JavaScript features and syntax",
    difficulty: "Advanced",
    duration: "55 min",
    progress: 0,
    icon: "✨"
  }
];

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

export default function Learn() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Learn JavaScript
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master JavaScript step by step with our interactive lessons. From basics to advanced concepts,
          learn at your own pace with hands-on coding exercises.
        </p>
      </div>

      {/* Learning Path */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {topics.map((topic, index) => (
          <Link key={topic.id} to={`/learn/${topic.id}`}>
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group cursor-pointer border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {topic.description}
                      </CardDescription>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge className={getDifficultyColor(topic.difficulty)}>
                      {topic.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {topic.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Lesson {index + 1}
                    </div>
                  </div>
                  {topic.progress > 0 && (
                    <div className="flex items-center text-sm text-success">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {topic.progress}%
                    </div>
                  )}
                </div>
                
                {/* Progress bar */}
                <div className="mt-3 w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Tips */}
      <Card className="bg-gradient-to-r from-info/10 to-success/10 border-info/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="w-5 h-5 mr-2 text-info" />
            Learning Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>• Practice coding along with each lesson</li>
            <li>• Don't rush - take time to understand each concept</li>
            <li>• Experiment with the code examples</li>
            <li>• Ask questions and seek help when stuck</li>
            <li>• Build projects to apply what you learn</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}