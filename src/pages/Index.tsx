
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CoreServices from "@/components/CoreServices";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <CoreServices />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
