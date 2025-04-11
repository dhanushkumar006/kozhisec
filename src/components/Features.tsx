
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Track your performance metrics in real-time and make data-driven decisions to optimize your growth.",
      benefits: ["Live dashboard updates", "Custom reports", "Export capabilities"],
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description:
        "Connect with your favorite tools and services without friction. Our platform works where you work.",
      benefits: ["100+ app integrations", "API access", "No-code connectors"],
    },
    {
      icon: "🚀",
      title: "Rapid Deployment",
      description:
        "Launch new features and updates in minutes, not days. Accelerate your go-to-market strategy.",
      benefits: ["One-click deployment", "Version control", "Rollback options"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              scale fast
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our powerful features give you the edge you need in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
            View all features
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
