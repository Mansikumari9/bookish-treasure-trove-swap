
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookGrid } from "@/components/books/BookGrid";
import { BookProps } from "@/components/books/BookCard";
import { 
  ShoppingCart, 
  Heart, 
  Share, 
  RefreshCw, 
  MessageSquare, 
  Star,
  User,
  Calendar
} from "lucide-react";

// Mock book data for detail page
const bookData = {
  id: "1",
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  price: 8.99,
  originalPrice: 12.99,
  cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  condition: "Very Good",
  forExchange: false,
  description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.",
  publishedYear: 1960,
  isbn: "9780061120084",
  genre: "Classic Fiction",
  pages: 336,
  publisher: "Harper Perennial Modern Classics",
  language: "English",
  sellerName: "BookLover123",
  sellerAvatar: "BL",
  sellerRating: 4.8,
  sellerListedDate: "2023-11-15",
};

// Similar books
const similarBooks: BookProps[] = [
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
  },
];

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("description");
  
  const discount = bookData.originalPrice 
    ? Math.round(((bookData.originalPrice - bookData.price) / bookData.originalPrice) * 100) 
    : 0;

  return (
    <Layout>
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-primary">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/browse" className="hover:text-primary">Books</Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">
              {bookData.title}
            </li>
          </ol>
        </nav>
        
        {/* Book Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Book Image */}
          <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden relative">
            <img 
              src={bookData.cover} 
              alt={bookData.title}
              className="w-full h-full object-cover"
            />
            {bookData.forExchange && (
              <Badge className="absolute top-4 right-4 bg-orange text-md px-3 py-1">
                For Exchange
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-orange text-md px-3 py-1">
                {discount}% OFF
              </Badge>
            )}
          </div>
          
          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{bookData.title}</h1>
              <p className="text-xl text-muted-foreground mt-2">by {bookData.author}</p>
            </div>
            
            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold">${bookData.price.toFixed(2)}</div>
              {bookData.originalPrice && (
                <div className="text-lg text-muted-foreground line-through">
                  ${bookData.originalPrice.toFixed(2)}
                </div>
              )}
              {discount > 0 && (
                <Badge variant="outline" className="text-orange border-orange">
                  Save ${(bookData.originalPrice - bookData.price).toFixed(2)}
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {bookData.condition}
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                {bookData.genre}
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                {bookData.publishedYear}
              </Badge>
            </div>
            
            <div className="space-y-4 pt-4">
              <Button className="w-full sm:w-auto" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <div className="flex gap-3">
                {bookData.forExchange && (
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Propose Exchange
                  </Button>
                )}
                
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="icon">
                  <Share className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-muted-foreground w-24">Seller</div>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${bookData.sellerAvatar}`} />
                    <AvatarFallback>{bookData.sellerAvatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{bookData.sellerName}</span>
                    <div className="flex items-center text-orange">
                      <Star className="h-3 w-3 fill-orange" />
                      <span className="text-xs ml-1">{bookData.sellerRating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-muted-foreground w-24">Listed On</div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{bookData.sellerListedDate}</span>
                </div>
              </div>
              
              <Button variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Contact Seller
              </Button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs 
          defaultValue="description" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mb-12"
        >
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <div className="mt-6 p-6 border rounded-lg">
            <TabsContent value="description" className="space-y-4">
              <h3 className="text-xl font-semibold">About this book</h3>
              <p className="text-muted-foreground leading-relaxed">
                {bookData.description}
              </p>
            </TabsContent>
            
            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Book Information</h3>
                  
                  <div className="grid grid-cols-2 gap-y-3">
                    <div className="text-muted-foreground">ISBN</div>
                    <div>{bookData.isbn}</div>
                    
                    <div className="text-muted-foreground">Publisher</div>
                    <div>{bookData.publisher}</div>
                    
                    <div className="text-muted-foreground">Published Year</div>
                    <div>{bookData.publishedYear}</div>
                    
                    <div className="text-muted-foreground">Language</div>
                    <div>{bookData.language}</div>
                    
                    <div className="text-muted-foreground">Pages</div>
                    <div>{bookData.pages}</div>
                    
                    <div className="text-muted-foreground">Genre</div>
                    <div>{bookData.genre}</div>
                    
                    <div className="text-muted-foreground">Condition</div>
                    <div>{bookData.condition}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Shipping & Returns</h3>
                  <p className="text-muted-foreground">
                    Standard shipping takes 3-5 business days. Returns accepted within 14 days of delivery if the book is in the same condition as when shipped.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                <div className="pb-6 border-b">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=JD" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-xs text-muted-foreground">March 15, 2023</div>
                    </div>
                    <div className="ml-auto flex">
                      {Array(5).fill(null).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-orange fill-orange" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    This book arrived in excellent condition, just as described. The seller shipped it quickly and it was well packaged. A classic that everyone should read!
                  </p>
                </div>
                
                <div className="pb-6 border-b">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=RS" />
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Robert Smith</div>
                      <div className="text-xs text-muted-foreground">February 28, 2023</div>
                    </div>
                    <div className="ml-auto flex">
                      {Array(4).fill(null).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-orange fill-orange" />
                      ))}
                      {Array(1).fill(null).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-muted-foreground" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Great price for a classic. There was a small tear on the back cover that wasn't mentioned in the description, but overall I'm satisfied with my purchase.
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        
        {/* Similar Books */}
        <div className="mb-12">
          <BookGrid books={similarBooks} title="You May Also Like" />
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
