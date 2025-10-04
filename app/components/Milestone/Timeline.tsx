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
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="relative" ref={timelineRef}>
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

          {timelineEvents.map((event, index) => {
            const showYear = index === 0 || timelineEvents[index - 1].year !== event.year;
            return (
              <TimelineCard 
                key={index} 
                {...event} 
                index={index} 
                isLast={index === timelineEvents.length - 1}
                showYear={showYear}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MentalHealthTimeline;
