
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BookGrid } from "@/components/books/BookGrid";
import { BookProps } from "@/components/books/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, SlidersHorizontal, X } from "lucide-react";

// Sample book data for the browse page
const booksData: BookProps[] = [
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
  },
  {
    id: "6",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 7.49,
    cover: "https://images.unsplash.com/photo-1515098506762-79e1384e5903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Good",
    forExchange: true
  },
  {
    id: "7",
    title: "Lord of the Flies",
    author: "William Golding",
    price: 8.29,
    originalPrice: 9.99,
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Acceptable",
    forExchange: false
  },
  {
    id: "8",
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 10.49,
    cover: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Like New",
    forExchange: false
  },
  {
    id: "9",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    price: 7.99,
    cover: "https://images.unsplash.com/photo-1603162571271-efcaad55c927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Very Good",
    forExchange: true
  },
  {
    id: "10",
    title: "Frankenstein",
    author: "Mary Shelley",
    price: 6.49,
    originalPrice: 8.99,
    cover: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    condition: "Good",
    forExchange: false
  },
];

const genres = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Thriller",
  "Biography",
  "History",
  "Self-Help",
];

const conditions = ["New", "Like New", "Very Good", "Good", "Acceptable"];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showExchangeOnly, setShowExchangeOnly] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("relevance");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Handle search form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // In a real app, you would fetch filtered data based on search
  };

  // Toggle genre selection
  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  // Toggle condition selection
  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 50]);
    setShowExchangeOnly(false);
    setSelectedGenres([]);
    setSelectedConditions([]);
    setSortBy("relevance");
  };

  // In a real app, you would filter the books based on the filters
  // For now, we'll just show all books
  const filteredBooks = booksData;

  return (
    <Layout>
      <div className="container py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Browse Books</h1>
          <p className="text-muted-foreground mt-2">
            Discover new and used books from our community
          </p>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Search form */}
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by title, author, or ISBN..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Mobile filter button */}
          <div className="flex md:hidden">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Sort select */}
          <div className="w-full md:w-48">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main content area with sidebar and results */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters sidebar - Desktop */}
          <div className="hidden md:block space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Filters</h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            </div>

            {/* Price range filter */}
            <div className="space-y-4">
              <h4 className="font-medium">Price Range</h4>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 50]}
                  max={50}
                  step={1}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}+</span>
              </div>
            </div>

            {/* Exchange option */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="exchange-only"
                  checked={showExchangeOnly}
                  onCheckedChange={() => setShowExchangeOnly(!showExchangeOnly)}
                />
                <Label htmlFor="exchange-only">For Exchange Only</Label>
              </div>
            </div>

            {/* Genre filter */}
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="genre">
                <AccordionTrigger className="text-sm font-medium">
                  Genre
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {genres.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox
                          id={`genre-${genre}`}
                          checked={selectedGenres.includes(genre)}
                          onCheckedChange={() => toggleGenre(genre)}
                        />
                        <Label htmlFor={`genre-${genre}`}>{genre}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Condition filter */}
              <AccordionItem value="condition">
                <AccordionTrigger className="text-sm font-medium">
                  Condition
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {conditions.map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={`condition-${condition}`}
                          checked={selectedConditions.includes(condition)}
                          onCheckedChange={() => toggleCondition(condition)}
                        />
                        <Label htmlFor={`condition-${condition}`}>{condition}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Mobile filters - slide in from right */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-background shadow-xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Price range filter */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 50]}
                        max={50}
                        step={1}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}+</span>
                    </div>
                  </div>

                  {/* Exchange option */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="exchange-only-mobile"
                        checked={showExchangeOnly}
                        onCheckedChange={() => setShowExchangeOnly(!showExchangeOnly)}
                      />
                      <Label htmlFor="exchange-only-mobile">For Exchange Only</Label>
                    </div>
                  </div>

                  {/* Genre filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Genre</h4>
                    <div className="space-y-2">
                      {genres.map((genre) => (
                        <div key={`mobile-${genre}`} className="flex items-center space-x-2">
                          <Checkbox
                            id={`mobile-genre-${genre}`}
                            checked={selectedGenres.includes(genre)}
                            onCheckedChange={() => toggleGenre(genre)}
                          />
                          <Label htmlFor={`mobile-genre-${genre}`}>{genre}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Condition filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Condition</h4>
                    <div className="space-y-2">
                      {conditions.map((condition) => (
                        <div
                          key={`mobile-${condition}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`mobile-condition-${condition}`}
                            checked={selectedConditions.includes(condition)}
                            onCheckedChange={() => toggleCondition(condition)}
                          />
                          <Label htmlFor={`mobile-condition-${condition}`}>
                            {condition}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full" onClick={() => setMobileFiltersOpen(false)}>
                      Apply Filters
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        clearFilters();
                        setMobileFiltersOpen(false);
                      }}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Books grid */}
          <div className="md:col-span-3">
            <BookGrid books={filteredBooks} />

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="default" size="icon">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Browse;
