
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Target, Rocket, Code, ShoppingBag, Bitcoin } from "lucide-react";

const CoreServices = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Bug Bounty Hunting",
      description: "Ethical hacking to uncover vulnerabilities for global clients, partnering with platforms like HackerOne, Bugcrowd, and more.",
      cta: "Explore Bug Bounty",
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Brand Promotion & Marketing",
      description: "Creative cybersecurity-themed promotions and strategic branding for tech startups and digital products.",
      cta: "Boost Your Brand",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "CTF Events",
      description: "Hosting and organizing Capture The Flag events to train and scout cybersecurity talent with toolkits and community engagement.",
      cta: "Join CTF Events",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Security Development",
      description: "Custom security tools & services including firewalls, encryption, malware scanners, and web/app penetration testing.",
      cta: "Secure Your Systems",
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-blue-600" />,
      title: "Drop Shipping",
      description: "Running smart, automated eCommerce with a secure tech backend, product curation and digital marketing.",
      cta: "Start Selling",
    },
    {
      icon: <Bitcoin className="h-8 w-8 text-blue-600" />,
      title: "Crypto Investing & Education",
      description: "Portfolio building, secure storage, investment insights, and educational content for safe blockchain use.",
      cta: "Learn Crypto",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions and services to protect and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-700">
                  {service.cta} <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
