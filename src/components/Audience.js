import React from 'react';

const Audience = () => {
  const audiences = [
    {
      title: "DTC Brands ($100k+/mo)",
      description: "Scale profitably with confidence in your attribution data."
    },
    {
      title: "Agencies",
      description: "Deliver transparent reporting and prove ROI to your clients."
    },
    {
      title: "Performance Marketers",
      description: "Make data-driven optimizations that actually move the needle."
    },
    {
      title: "Founders & CMOs",
      description: "Get the clear picture you need to allocate budget with confidence."
    }
  ];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Target Audience
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            Built for Performance-Obsessed Teams
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by growth leaders who demand real results, not just pretty reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;