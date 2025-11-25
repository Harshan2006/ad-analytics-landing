import React from 'react';

const Setup = () => {
  const steps = [
    {
      number: "1",
      title: "Connect Platforms",
      description: "Easily link Meta, Google, Shopify, TikTok, and more to centralize your marketing data in just a few clicks."
    },
    {
      number: "2",
      title: "Install Pixel",
      description: "Install our tracking pixel with one click—no developer required. Start collecting powerful attribution data instantly without the technical hassle."
    },
    {
      number: "3",
      title: "Get Insights",
      description: "Quickly access unified reports across all platforms. Gain clear visibility into your campaign performance within hours, not days or weeks."
    }
  ];

  return (
    <section id="setup" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Setup That Doesn't Suck
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by growth leaders who demand real results, not just pretty reports.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Setup Process Image */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl fade-in-up">
            <img 
              src="/images/screenshots/setup-process.png" 
              alt="AdShark Setup Process - Showing three simple steps to connect platforms and get insights"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;