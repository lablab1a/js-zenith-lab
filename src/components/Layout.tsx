import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Book, Code, Lightbulb, Terminal, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Book },
  { name: "Learn JavaScript", href: "/learn", icon: Code },
  { name: "Practice", href: "/practice", icon: Lightbulb },
  { name: "Projects", href: "/projects", icon: Terminal },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [showAdmin, setShowAdmin] = useState(false);

  // Admin panel access
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      setShowAdmin(!showAdmin);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted" onKeyDown={handleKeyPress}>
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                JS Learn Hub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || 
                  (item.href !== "/" && location.pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Admin Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              {showAdmin && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAdmin(false)}
                  className="hidden md:flex"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border mt-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || 
                  (item.href !== "/" && location.pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              {showAdmin && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAdmin(false)}
                  className="w-full mt-4"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Admin Panel
                </Button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Admin Panel */}
      {showAdmin && (
        <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg z-50 max-w-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Admin Panel</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowAdmin(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Press Ctrl+Shift+A to toggle admin mode
          </p>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              Edit Content
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Manage Lessons
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Export Data
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}