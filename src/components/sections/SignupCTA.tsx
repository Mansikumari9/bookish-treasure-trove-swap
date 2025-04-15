
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SignupCTA() {
  return (
    <section className="py-16 px-4 bg-primary/10 rounded-3xl my-12">
      <div className="container max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Start Your BookSwap Journey?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our community today and experience the joy of buying, selling, and exchanging books with fellow literature enthusiasts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="text-md" asChild>
            <Link to="/register">Sign Up for Free</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-md" asChild>
            <Link to="/browse">Browse Books First</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
