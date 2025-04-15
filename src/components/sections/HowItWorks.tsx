
import { BookOpen, RefreshCw, DollarSign, Users } from "lucide-react";

const features = [
  {
    title: "List Your Books",
    description: "Add your books for sale or exchange in minutes with our easy listing process.",
    icon: BookOpen,
  },
  {
    title: "Exchange Books",
    description: "Swap books with other readers and refresh your bookshelf without spending money.",
    icon: RefreshCw,
  },
  {
    title: "Buy & Sell",
    description: "Purchase books at great prices or earn money by selling the ones you no longer need.",
    icon: DollarSign,
  },
  {
    title: "Join the Community",
    description: "Connect with fellow book lovers, share recommendations, and discover new reads.",
    icon: Users,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">How BookSwap Works</h2>
          <p className="text-muted-foreground">
            Our platform makes buying, selling, and exchanging books simple and rewarding
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm border"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
