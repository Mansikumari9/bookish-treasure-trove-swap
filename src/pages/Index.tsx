
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/ui/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedBooks } from "@/components/books/FeaturedBooks";
import { Categories } from "@/components/sections/Categories";
import { Testimonials } from "@/components/sections/Testimonials";
import { SignupCTA } from "@/components/sections/SignupCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <FeaturedBooks />
      <Categories />
      <Testimonials />
      <SignupCTA />
    </Layout>
  );
};

export default Index;
