import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: "Unified Attribution Models",
      description: "See the complete customer journey across all touchpoints with advanced modeling that actually works."
    },
    {
      title: "First-Party, Transparent Data",
      description: "Your data, your pixel, your truth. No black boxes or mysterious algorithms hiding what matters."
    },
    {
      title: "Easy-to-Read Dashboards",
      description: "Actionable insights in seconds, not hours. Built for marketers who need to move fast and scale smart."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            A Clearer Picture = Better Decisions
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just show numbers. We guide action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
              <div className="text-4xl mb-4 text-blue-600 font-bold">0{index + 1}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;