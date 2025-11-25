import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      platform: "Meta",
      quote: "Replaced 5 different attribution tools with just AdShark. Finally have a single source of truth for our $2M+ monthly ad spend.",
      name: "Mike Johnson",
      position: "CMO, RetailBrand",
      image: "mike-johnson.jpg"
    },
    {
      platform: "TikTok",
      quote: "We cut wasted spend by 25% and focused only on winning campaigns. AdShark's clarity gave us the confidence to scale.",
      name: "James Patel",
      position: "Digital Marketing Manager",
      image: "james-patel.jpg"
    },
    {
      platform: "amazon",
      quote: "Our B2B campaigns are now fully measurable across channels. AdShark gave us a clear view of customer journeys.",
      name: "Oliver Scott",
      position: "Demand Generation Director",
      image: "oliver-scott.jpg"
    },
    {
      platform: "shopify",
      quote: "We optimized spend in real time and increased our margins by 18%. AdShark makes it simple.",
      name: "Isabella Brooks",
      position: "Performance Marketing Lead",
      image: "isabella-brooks.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimonials
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            What Our Clients Say
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by growth leaders who demand real results, not just pretty reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <img 
                  src={`/images/testimonials/${testimonial.image}`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-200"
                />
                <div>
                  <div className="text-sm text-gray-500">Platform</div>
                  <div className="text-lg font-bold text-gray-900">{testimonial.platform}</div>
                </div>
              </div>
              
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                </div>
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;