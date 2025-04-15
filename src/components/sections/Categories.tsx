
import { Link } from "react-router-dom";
import { 
  BookText, 
  Library, 
  Heart, 
  Glasses, 
  Wand2,
  GraduationCap, 
  Compass,
  Presentation
} from "lucide-react";

const categories = [
  {
    name: "Fiction",
    icon: BookText,
    color: "bg-purple-light text-purple-dark",
  },
  {
    name: "Non-Fiction",
    icon: Presentation,
    color: "bg-peach text-orange",
  },
  {
    name: "Classics",
    icon: Library,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Romance",
    icon: Heart,
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Academic",
    icon: GraduationCap,
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Science Fiction",
    icon: Wand2,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Mystery",
    icon: Compass,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Biography",
    icon: Glasses,
    color: "bg-teal-100 text-teal-700",
  },
];

export function Categories() {
  return (
    <section className="container py-12 space-y-6">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
        <p className="text-muted-foreground mt-2">
          Explore books across various genres and subjects
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/browse?category=${category.name.toLowerCase()}`}
            className="flex flex-col items-center justify-center p-4 rounded-lg border bg-background hover:border-primary transition-colors text-center h-32"
          >
            <div className={`p-3 rounded-full mb-3 ${category.color}`}>
              <category.icon className="h-5 w-5" />
            </div>
            <span className="font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
