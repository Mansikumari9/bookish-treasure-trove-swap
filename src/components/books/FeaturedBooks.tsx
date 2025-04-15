
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookGrid } from "./BookGrid";
import { BookProps } from "./BookCard";

// Sample book data for the featured section
const featuredBooks: BookProps[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 8.99,
    originalPrice: 12.99,
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Very Good",
    forExchange: false
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Good",
    forExchange: true
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 7.99,
    originalPrice: 10.99,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Like New",
    forExchange: false
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 6.99,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Good",
    forExchange: false
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 11.99,
    originalPrice: 14.99,
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "New",
    forExchange: false
  }
];

export function FeaturedBooks() {
  return (
    <section className="container py-12 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Books</h2>
          <p className="text-muted-foreground mt-1">
            Explore our handpicked selection of popular titles
          </p>
        </div>
        
        <Button variant="outline" asChild>
          <Link to="/browse">View All Books</Link>
        </Button>
      </div>
      
      <BookGrid books={featuredBooks} />
    </section>
  );
}
