
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-6 w-6 text-primary" />
              <span>BookSwap</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Buy, sell, and exchange books with fellow book lovers.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/browse" className="hover:text-primary transition-colors">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/exchange" className="hover:text-primary transition-colors">
                  Book Exchange
                </Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-primary transition-colors">
                  Sell a Book
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Connect</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="mailto:contact@bookswap.com" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>contact@bookswap.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 BookSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
