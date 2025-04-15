
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export interface BookProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  cover: string;
  condition: 'New' | 'Like New' | 'Very Good' | 'Good' | 'Acceptable';
  forExchange: boolean;
}

export function BookCard({ 
  id, 
  title, 
  author, 
  price, 
  originalPrice, 
  cover, 
  condition,
  forExchange 
}: BookProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <Card className="overflow-hidden group h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <Link to={`/books/${id}`} className="overflow-hidden">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img 
            src={cover} 
            alt={`Cover of ${title}`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          
          {forExchange && (
            <Badge className="absolute top-2 right-2 bg-orange">
              For Exchange
            </Badge>
          )}
          
          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-orange">
              {discount}% OFF
            </Badge>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background/90"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Add to favorites');
            }}
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
      </Link>
      
      <CardContent className="pt-4 flex-grow">
        <Link to={`/books/${id}`} className="space-y-1 block">
          <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-xs font-normal">
              {condition}
            </Badge>
          </div>
        </Link>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-medium">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        <Button
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            console.log('Add to cart');
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
