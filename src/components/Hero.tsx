
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Secure your digital 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> assets</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Kozhisec provides enterprise-grade cybersecurity solutions to protect your organization from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-6 text-base font-medium">
                Get Security Assessment
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium">
                Book a Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span>No commitment required</span>
              <span className="mx-3">•</span>
              <span>Expert consultation</span>
              <span className="mx-3">•</span>
              <span>24/7 support</span>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30"></div>
              <div className="bg-white p-6 rounded-lg shadow-xl relative">
                <div className="h-[320px] md:h-[340px] bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-500">Security Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
