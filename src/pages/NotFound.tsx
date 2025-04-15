
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookX } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 flex flex-col items-center justify-center text-center">
        <BookX className="h-24 w-24 text-muted-foreground mb-6" />
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground max-w-md mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/browse">Browse Books</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
