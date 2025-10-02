import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full mt-2">
      {/* Hero Image */}
      <div className="w-full overflow-hidden">
        <Image
          src="/Image.png" 
          alt="Asido Foundation Team" 
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Navigation Links Below Image */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 mb-3">
            <a 
              href="#who-we-are" 
              className="text-blue-600 font-semibold text-sm text-center hover:text-blue-700 transition-colors"
            >
              WHO WE ARE
            </a>
            <a 
              href="#leadership" 
              className="text-blue-600 font-semibold text-sm text-center hover:text-blue-700 transition-colors"
            >
              LEADERSHIP
            </a>
            <a 
              href="#volunteer-team" 
              className="text-blue-600 font-semibold text-sm text-center hover:text-blue-700 transition-colors"
            >
              OUR VOLUNTEER TEAM
            </a>
            <a 
              href="#milestones" 
              className="text-teal-500 font-semibold text-sm text-center hover:text-teal-600 transition-colors"
            >
              MILESTONES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;