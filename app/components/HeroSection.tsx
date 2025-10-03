'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const HeroSection = () => {

  const [isLinksMenuOpen, setIsLinksMenuOpen] = useState(false);
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
      <div className="bg-gray-100 md:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:border-b md:border-gray-200 pt-0 md:pt-4">
          {/* Desktop: Show all links in a row */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 md:gap-8 py-4">
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

          {/* Mobile: Menu toggle and dropdown */}
          <div className="md:hidden">
            {/* Menu Header with Toggle */}
            <div className="flex items-center justify-between py-4">
              <h2 className="text-blue-600 font-bold text-lg">MILESTONES</h2>
              <button 
                onClick={() => setIsLinksMenuOpen(!isLinksMenuOpen)}
                className="p-2"
              >
                {isLinksMenuOpen ? (
                  <X className="w-6 h-6 text-blue-600" />
                ) : (
                  <Menu className="w-6 h-6 text-blue-600" />
                )}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isLinksMenuOpen && (
              <div className="flex flex-col space-y-3 pb-4 border-t border-gray-200 pt-4">
                <a 
                  href="#who-we-are" 
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  WHO WE ARE
                </a>
                <a 
                  href="#leadership" 
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  LEADERSHIP
                </a>
                <a 
                  href="#volunteer-team" 
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  OUR VOLUNTEER TEAM
                </a>
                <a 
                  href="#milestones" 
                  className="text-teal-500 font-semibold text-sm hover:text-teal-600 transition-colors"
                >
                  MILESTONES
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;