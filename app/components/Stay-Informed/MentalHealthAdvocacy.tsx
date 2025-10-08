'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';


export default function MentalHealthCards() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Show left arrow if scrolled right from the start
      setShowLeftArrow(scrollLeft > 10);
      
      // Show right arrow if not at the end
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h3 className="text-teal-500 text-lg font-semibold mb-3">Stay Informed</h3>
          <h2 className="text-gray-900 text-xl md:text-3xl font-bold leading-tight">
            Through advocacy, education, and support, we are building a stigma-free future for mental health in Nigeria.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className='relative'>
          {/* Left Arrow - Mobile Only */}
          {showLeftArrow && (
            <button
              onClick={() => scrollTo('left')}
              className="md:hidden absolute left-2 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all z-20 backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          {/* Right Arrow - Mobile Only */}
          {showRightArrow && (
            <button
              onClick={() => scrollTo('right')}
              className="md:hidden absolute right-2 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all z-20 backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}

          <div 
            ref={scrollRef} 
            className="cards-scroll md:grid md:grid-cols-3 md:gap-8 flex overflow-x-auto snap-x snap-mandatory gap-4 md:overflow-visible scrollbar-hide pb-4"
          >
            <div className="flex flex-col min-w-[75vw] md:min-w-0 snap-start">
              <div className="overflow-hidden mb-6 relative w-full">
                <Image 
                  src="/It. 2.png" 
                  alt="Your Mental Health & You - Blue Card"
                  width={700}
                  height={700}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-gray-900 text-xl font-bold mb-4 leading-tight">
                  Naija Spirit: Unique Powers of Resilience or Learned Helplessness?
                </h3>
                <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group">
                  READ MORE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="flex flex-col min-w-[75vw] md:min-w-0 snap-start">
              <div className=" overflow-hidden mb-6 relative w-full">
                <Image 
                  src="/It. 2 (1).png" 
                  alt="Your Mental Health & You - Purple Card"
                  width={700}
                  height={700}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-gray-900 text-xl font-bold mb-4 leading-tight">
                  Ignorance Around Mental Health Challenges is Expensive
                </h3>
                <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group">
                  READ MORE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            
            <div className="flex flex-col min-w-[75vw] md:min-w-0 snap-start">
              <div className="overflow-hidden mb-6 relative w-full">
                <Image 
                  src="/It. 2 (2).png" 
                  alt="Your Mental Health & You - Green Card"
                  width={700}
                  height={700}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-gray-900 text-xl font-bold mb-4 leading-tight">
                  Stretched to Breaking Point: Emotional Burden of Caring for the Elderly with Dementia
                </h3>
                <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group">
                  READ MORE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}