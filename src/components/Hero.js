import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          {/* Trusted by brands section with actual logos */}
          <div className="mb-12">
            <p className="text-gray-600 mb-6 font-medium">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img 
                src="/images/logos/amazon.png" 
                alt="Amazon" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/images/logos/shopify.png" 
                alt="Shopify" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/images/logos/meta.png" 
                alt="Meta" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/images/logos/google-ads.png" 
                alt="Google Ads" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/images/logos/tiktok.png" 
                alt="TikTok" 
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Smarter spend. <span className="gradient-text">Better returns</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            Unlock Clarity on Every Ad Dollar
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AdShark is your single source of truth for marketing attribution.  
            Cut through channel noise and drive efficient growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="flex-1">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold whitespace-nowrap">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;