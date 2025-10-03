import React from 'react';
import { TimelineItemProps } from './types/type';
import Image from 'next/image';

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  item, 
  index, 
  totalItems, 
  scrollProgress 
}) => {
  const itemProgress = (index / (totalItems - 1)) * 100;
  const isFilled = scrollProgress >= itemProgress;
  
  return (
    <div className="relative">
      {/* Year marker dot on the line */}
      <div 
        className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-blue-600 z-10 transition-all duration-500 ease-in-out ${
          isFilled ? 'bg-blue-600' : 'bg-white'
        }`}
      ></div>

      {/* Year label to the right */}
      <div className="absolute left-20 md:left-[calc(50%+2rem)] -top-2 flex items-center">
        <span className="text-blue-600 font-bold text-2xl">{item.year}</span>
      </div>

      {/* Milestones list below the year */}
      <div className="ml-20 md:ml-[calc(50%+2rem)] mt-8 space-y-4 max-w-md">
        {item.milestones.map((milestone, mIndex) => (
          <div 
            key={mIndex}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-semibold text-lg text-blue-600 mb-2">{milestone.title}</h3>
            {milestone.image && (
              <Image
                width={60}
                height={40}
                src={milestone.image}
                alt={milestone.imageAlt || milestone.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <p className="text-gray-700 leading-relaxed">{milestone.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem
