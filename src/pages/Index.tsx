import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Code, Lightbulb, Terminal, Star, Zap, Users, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            🚀 Interactive Learning Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            Master JavaScript
            <br />
            The Interactive Way
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn JavaScript through hands-on coding, real-time feedback, and interactive projects. 
            No setup required - start coding immediately in your browser.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/learn">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Projects
                <Code className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose JS Learn Hub?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to master JavaScript in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Interactive Coding</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Write and run JavaScript code directly in your browser with instant feedback and results.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Structured Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Follow our carefully designed curriculum from basics to advanced JavaScript concepts.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Lightbulb className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle>Practice Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Test your skills with coding challenges ranging from beginner to advanced level.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                <Terminal className="w-6 h-6 text-success" />
              </div>
              <CardTitle>Real Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Build actual applications and projects to showcase your JavaScript skills.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Learning Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start from the basics and progress to advanced JavaScript concepts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/learn/variables">
            <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-success text-white">Beginner</Badge>
                  <span className="text-2xl">📝</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Variables & Data Types
                </CardTitle>
                <CardDescription>
                  Learn about let, const, var and different data types in JavaScript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>30 min</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/learn/functions">
            <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-success text-white">Beginner</Badge>
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Functions
                </CardTitle>
                <CardDescription>
                  Master function declarations, expressions, arrow functions and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>45 min</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/learn/dom">
            <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-warning text-white">Intermediate</Badge>
                  <span className="text-2xl">🌐</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  DOM Manipulation
                </CardTitle>
                <CardDescription>
                  Learn to interact with HTML elements using JavaScript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>50 min</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/learn">
            <Button variant="outline" size="lg">
              View All Topics
              <BookOpen className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join the Learning Community</h2>
          <p className="text-muted-foreground text-lg">
            Start your JavaScript journey today
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Interactive Lessons</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Practice Challenges</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-foreground mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Mini Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Free to Use</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12">
        <h2 className="text-3xl font-bold">Ready to Start Coding?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          No downloads, no setup required. Start learning JavaScript right now in your browser.
        </p>
        <Link to="/learn">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
            <Zap className="w-5 h-5 mr-2" />
            Begin Your Journey
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;
