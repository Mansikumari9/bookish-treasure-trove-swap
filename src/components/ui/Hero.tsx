
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-light via-background to-peach opacity-50 -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center gap-8 md:gap-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Discover, Exchange, and Connect with <span className="text-primary">Book Lovers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Buy, sell, and swap books with a vibrant community of readers. 
            Find your next great read for less and give your books a new home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-md" asChild>
              <Link to="/browse">Browse Books</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-md" asChild>
              <Link to="/sell">Sell Your Books</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">10K+</span>
              <span className="text-sm text-muted-foreground">Books Available</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">5K+</span>
              <span className="text-sm text-muted-foreground">Active Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">2K+</span>
              <span className="text-sm text-muted-foreground">Exchanges Made</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">50+</span>
              <span className="text-sm text-muted-foreground">Book Categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
