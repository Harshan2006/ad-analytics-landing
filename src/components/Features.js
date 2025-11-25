import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Multi-Touch Attribution",
      description: "Track every interaction from first click to final purchase across all channels and devices.",
      metrics: ["3.5% CTR", "250% ROAS"]
    },
    {
      title: "Channel-Agnostic ROAS",
      description: "See true return on ad spend without platform bias or inflated numbers.",
      metrics: ["3.5% CTR", "250% ROAS"]
    },
    {
      title: "First-Party Pixel",
      description: "Accurate, privacy-safe tracking that works beyond iOS changes and cookie restrictions.",
      metrics: ["DAC: 6,400", "LTV: 84,000", "Margin: 30%"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Everything You Need to Measure
          </p>
          <p className="text-lg md:text-xl text-gray-500">
            What Matters
          </p>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Trusted by growth leaders who demand real results, not just pretty reports.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="flex gap-2">
                    {feature.metrics.slice(0, 2).map((metric, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                {feature.metrics.length > 2 && (
                  <div className="flex gap-2 flex-wrap">
                    {feature.metrics.map((metric, idx) => (
                      <span key={idx} className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dashboard Image Section */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl fade-in-up">
            <img 
              src="/images/screenshots/dashboard.png" 
              alt="AdShark Dashboard - Showing multi-channel analytics and performance metrics"
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">Winner</div>
                <div className="text-blue-500 text-sm font-medium">Performance</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">Winner</div>
                <div className="text-green-500 text-sm font-medium">Efficiency</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">Profitability</div>
                <div className="text-purple-500 text-sm font-medium">Metrics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;