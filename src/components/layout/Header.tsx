
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, ShoppingCart, User, BookOpen } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In the future, this will redirect to search results
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>BookSwap</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 px-4 py-8">
                <SheetClose asChild>
                  <Link to="/" className="flex gap-2 py-2 text-lg font-medium">Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/browse" className="flex gap-2 py-2 text-lg font-medium">Browse Books</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/exchange" className="flex gap-2 py-2 text-lg font-medium">Book Exchange</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/sell" className="flex gap-2 py-2 text-lg font-medium">Sell a Book</Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="hidden md:inline">BookSwap</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/browse" className="text-sm font-medium transition-colors hover:text-primary">
              Browse Books
            </Link>
            <Link to="/exchange" className="text-sm font-medium transition-colors hover:text-primary">
              Book Exchange
            </Link>
            <Link to="/sell" className="text-sm font-medium transition-colors hover:text-primary">
              Sell a Book
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search by title, author, or ISBN..." 
              className="pl-8 bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          
          <Button variant="default" className="hidden md:flex" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
