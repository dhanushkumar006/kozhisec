
import { ArrowRight, Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: "🔒",
      title: "Advanced Encryption",
      description:
        "Protect your sensitive data with military-grade encryption that ensures your information remains secure at all times.",
      benefits: ["End-to-end encryption", "Zero-knowledge architecture", "Secure key management"],
    },
    {
      icon: "🛡️",
      title: "Threat Detection",
      description:
        "Our AI-powered system constantly monitors for suspicious activities and potential threats to your network.",
      benefits: ["Real-time monitoring", "Anomaly detection", "Immediate alerts"],
    },
    {
      icon: "🔍",
      title: "Vulnerability Assessment",
      description:
        "Regular scans identify weaknesses in your infrastructure before they can be exploited by attackers.",
      benefits: ["Automated scanning", "Detailed reports", "Remediation guidance"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-grade{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              protection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive security solutions help safeguard your organization from evolving cyber threats.
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
            View all security solutions
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
