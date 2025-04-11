
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This platform completely transformed how we manage our business. The analytics alone saved us countless hours every month.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "SJ",
      rating: 5,
    },
    {
      quote:
        "Our team's productivity increased by 35% in just the first month. The seamless integrations made all the difference.",
      author: "Michael Chen",
      role: "CTO, GrowthLabs",
      avatar: "MC",
      rating: 5,
    },
    {
      quote:
        "The support team is incredible. Any question we had was answered within minutes, not hours or days.",
      author: "Alex Rivera",
      role: "Operations Director, Nova",
      avatar: "AR",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              innovative teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-gray-400 text-xl font-bold">Acme Inc.</div>
          <div className="text-gray-400 text-xl font-bold">Globex</div>
          <div className="text-gray-400 text-xl font-bold">Hooli</div>
          <div className="text-gray-400 text-xl font-bold">Initech</div>
          <div className="text-gray-400 text-xl font-bold">Stark Industries</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
