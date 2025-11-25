import React from 'react';

const Problem = () => {
  const problems = [
    "Hacked-together spreadsheets that break every month",
    "Trusting inflated platform dashboards that don't match",
    "Vanity tools with pretty charts but no actionable direction"
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Attribution Problem
            </h2>
            <p className="text-2xl md:text-3xl text-red-600 font-semibold mb-8">
              Nobody Solved Well
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              iOS 14.5 shattered tracking. Cookies are dying. Platform dashboards lie. 
              Meanwhile, you're stuck making million-dollar decisions with broken data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-up">
            {problems.map((problem, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>

          {/* Problem Visualization Image */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl fade-in-up">
            <img 
              src="/images/screenshots/problem-visual.png" 
              alt="Attribution Problem Visualization - Showing broken data tracking and platform inconsistencies"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;