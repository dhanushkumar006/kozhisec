
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-2xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield size={48} className="text-blue-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protect your business from cyber threats
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join thousands of organizations that trust our cybersecurity solutions to safeguard their valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 px-8">
                Start your security audit
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8">
                Talk to an expert
              </Button>
            </div>
            <p className="text-blue-100 mt-6 text-sm">
              No commitment required. Free initial consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
