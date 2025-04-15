
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Camera, Upload } from "lucide-react";

const SellBook = () => {
  const [isForExchange, setIsForExchange] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = (event) => {
          if (event.target?.result) {
            newImages.push(event.target.result as string);
            
            if (newImages.length === files.length) {
              setImages((prev) => [...prev, ...newImages]);
            }
          }
        };
        
        reader.readAsDataURL(file);
      }
    }
  };
  
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // In a real app, you would process the form data and upload the book
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sell Your Book</h1>
          <p className="text-muted-foreground mt-2">
            List your book for sale or exchange with our community
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Book Information Card */}
            <Card>
              <CardHeader>
                <CardTitle>Book Information</CardTitle>
                <CardDescription>
                  Enter the details about the book you want to sell
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Book Title</Label>
                    <Input id="title" placeholder="Enter the book title" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input id="author" placeholder="Enter the author's name" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="isbn">ISBN (Optional)</Label>
                    <Input id="isbn" placeholder="Enter the ISBN number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="genre">Genre</Label>
                    <Select>
                      <SelectTrigger id="genre">
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fiction">Fiction</SelectItem>
                        <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                        <SelectItem value="mystery">Mystery</SelectItem>
                        <SelectItem value="sci-fi">Science Fiction</SelectItem>
                        <SelectItem value="fantasy">Fantasy</SelectItem>
                        <SelectItem value="romance">Romance</SelectItem>
                        <SelectItem value="thriller">Thriller</SelectItem>
                        <SelectItem value="biography">Biography</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="self-help">Self-Help</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="publisher">Publisher (Optional)</Label>
                    <Input id="publisher" placeholder="Publisher name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="publicationYear">Publication Year (Optional)</Label>
                    <Input id="publicationYear" placeholder="e.g., 2010" type="number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pages">Number of Pages (Optional)</Label>
                    <Input id="pages" placeholder="e.g., 320" type="number" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a description of the book..."
                    rows={4}
                    required
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Book Condition & Pricing Card */}
            <Card>
              <CardHeader>
                <CardTitle>Condition & Pricing</CardTitle>
                <CardDescription>
                  Specify the condition of your book and set your price
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="condition">Book Condition</Label>
                    <Select required>
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="very-good">Very Good</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="acceptable">Acceptable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="italian">Italian</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="conditionDetails">Condition Details (Optional)</Label>
                  <Textarea
                    id="conditionDetails"
                    placeholder="Describe any specific details about the book's condition..."
                    rows={2}
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Switch
                    id="exchange"
                    checked={isForExchange}
                    onCheckedChange={setIsForExchange}
                  />
                  <Label htmlFor="exchange" className="font-medium cursor-pointer">
                    Available for Exchange
                  </Label>
                </div>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${isForExchange ? 'opacity-50' : ''}`}>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="e.g., 9.99"
                      required={!isForExchange}
                      disabled={isForExchange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="originalPrice">Original Price ($) (Optional)</Label>
                    <Input
                      id="originalPrice"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="e.g., 14.99"
                      disabled={isForExchange}
                    />
                  </div>
                </div>
                
                {isForExchange && (
                  <div className="space-y-2">
                    <Label htmlFor="exchangeFor">Books You're Interested In</Label>
                    <Textarea
                      id="exchangeFor"
                      placeholder="Describe what books you're interested in exchanging for..."
                      rows={2}
                      required={isForExchange}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Book Images Card */}
            <Card>
              <CardHeader>
                <CardTitle>Book Images</CardTitle>
                <CardDescription>
                  Upload clear photos of your book (cover, back, and any notable features)
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-[3/4] bg-muted rounded-md overflow-hidden group">
                      <img
                        src={image}
                        alt={`Book image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(index)}
                        type="button"
                      >
                        &times;
                      </Button>
                    </div>
                  ))}
                  
                  {images.length < 4 && (
                    <div className="aspect-[3/4] bg-muted rounded-md flex flex-col items-center justify-center p-4 border-2 border-dashed cursor-pointer hover:bg-muted/80 transition-colors">
                      <Camera className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-center text-muted-foreground">
                        Add Photo
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  )}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>
                    * Upload at least one image of your book. Add more images to show different angles or features.
                  </p>
                  <p>
                    * The first image will be used as the main cover image in listings.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Shipping & Pickup Options */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping & Pickup Options</CardTitle>
                <CardDescription>
                  Specify how buyers can receive the book
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="shipping" defaultChecked />
                    <Label htmlFor="shipping" className="font-medium cursor-pointer">
                      Available for Shipping
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch id="pickup" defaultChecked />
                    <Label htmlFor="pickup" className="font-medium cursor-pointer">
                      Available for Local Pickup
                    </Label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location (City, State)</Label>
                  <Input id="location" placeholder="e.g., Boston, MA" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="shippingNotes">Shipping Notes (Optional)</Label>
                  <Textarea
                    id="shippingNotes"
                    placeholder="Any specific information about shipping or pickup..."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
            
            <CardFooter className="flex justify-end space-x-4 px-0">
              <Button variant="outline" type="button">
                Save as Draft
              </Button>
              <Button type="submit">
                Publish Listing
              </Button>
            </CardFooter>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SellBook;
