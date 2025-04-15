
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "AJ",
    role: "Book Collector",
    content:
      "BookSwap has transformed how I refresh my collection. I've exchanged over 50 books and saved so much money while discovering new authors!",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    avatar: "SW",
    role: "English Teacher",
    content:
      "I use BookSwap to find affordable books for my classroom library. The quality of books I've purchased has been excellent, and the process is seamless.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    role: "Avid Reader",
    content:
      "I've sold books I no longer needed and used the money to buy new reads. The platform is intuitive and the community is incredibly friendly.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="container py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Loved by Book Enthusiasts
        </h2>
        <p className="text-muted-foreground mt-2">
          Join thousands of readers who have found their literary treasures on our platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="border-primary/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex space-x-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-orange fill-orange"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
