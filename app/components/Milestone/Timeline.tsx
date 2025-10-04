'use client'
import React, { useState, useRef, useEffect } from 'react';
import TimelineCard from './TimelineCard';
import { timelineEvents } from '../../data/TimelineData';

const MentalHealthTimeline: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineHeight = timelineRef.current.scrollHeight;
        
        // Calculate how much of the timeline is visible
        const scrolled = windowHeight - rect.top;
        const progress = Math.min(Math.max(scrolled / timelineHeight, 0), 1);
        
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4" id='Timeline'>
      <div className="max-w-6xl mx-auto">

        <div className="relative" ref={timelineRef}>
          {/* Permanent blue line above timeline - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-600 pointer-events-none z-10" style={{ top: '-4rem', height: '4rem' }}></div>

          {/* Permanent blue line above timeline - Mobile */}
          <div className="md:hidden absolute left-[5px] -top-16 w-0.5 bg-blue-600 h-16 pointer-events-none z-10"></div>

          {/* Gray background line - Desktop (starts from 2019) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-gray-300 pointer-events-none z-0"></div>

          {/* Gray background line - Mobile (starts from 2019) */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-0.5 bg-gray-300 pointer-events-none z-0"></div>

          {/* Blue progress line - Desktop (fills as you scroll) */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 bg-blue-600 transition-all duration-300 ease-out pointer-events-none z-10" 
            style={{ height: `${scrollProgress}%` }}
          />

          {/* Blue progress line - Mobile (fills as you scroll) */}
          <div 
            className="md:hidden absolute left-[5px] top-0 w-0.5 bg-blue-600 transition-all duration-300 ease-out pointer-events-none z-10"
            style={{ height: `${scrollProgress}%` }}
          />

          {/* Animated blue progress line - Desktop */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 bg-blue-600 transition-all duration-300 ease-out pointer-events-none z-0" 
            style={{ height: `${scrollProgress}%` }}
          />

          {/* Animated blue progress line - Mobile */}
          <div 
            className="md:hidden absolute left-[5px] top-0 w-0.5 bg-blue-600 transition-all duration-300 ease-out pointer-events-none z-0"
            style={{ height: `${scrollProgress}%` }}
          />

          {/* Animated dot that moves with scroll - Desktop */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-[6px] border-white shadow-lg transition-all duration-300 ease-out pointer-events-none z-20"
            style={{ top: `${scrollProgress}%` }}
          />

          {/* Animated dot that moves with scroll - Mobile */}
          <div 
            className="md:hidden absolute left-[5px] transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-[4px] border-white shadow-lg transition-all duration-300 ease-out pointer-events-none z-20"
            style={{ top: `${scrollProgress}%` }}
          />

          {timelineEvents.map((event, index) => {
            const showYear = index === 0 || timelineEvents[index - 1].year !== event.year;
            
            // Calculate if this year's dot should be filled based on scroll
            const yearEvents = timelineEvents.filter(e => e.year === event.year);
            const firstYearIndex = timelineEvents.findIndex(e => e.year === event.year);
            const dotFilled = index === 0 || scrollProgress > (firstYearIndex / timelineEvents.length) * 100;
            
            return (
              <TimelineCard 
                key={index} 
                {...event} 
                index={index} 
                isLast={index === timelineEvents.length - 1}
                showYear={showYear}
                dotFilled={dotFilled}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MentalHealthTimeline;
