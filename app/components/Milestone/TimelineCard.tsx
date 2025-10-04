import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { TimelineEvent } from '../../types/Timelinetypes';
import Image from 'next/image';

interface TimelineCardProps extends TimelineEvent {
  index: number;
  isLast: boolean;
  showYear: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ 
  year, 
  title, 
  titleColor = "text-green-500",
  subtitle, 
  description, 
  imagePlaceholder = false,
  imageUrl,
  link = false,
  index,
  isLast,
  showYear
}) => {
  const isLeft = index % 2 !== 0;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div className="relative" ref={cardRef}>
      {/* Mobile Layout */}
      <div className={`md:hidden flex gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center">
          {showYear && <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>}
          {!isLast && <div className="w-0.5 flex-1 bg-gray-300 mt-2"></div>}
        </div>
        <div className="flex-1 pb-4">
          {showYear && <h3 className="text-2xl font-bold text-blue-900 mb-4">{year}</h3>}
          <div className="rounded-lg p-0">
            <h4 className={`${titleColor} font-semibold mb-2`}>{title}</h4>
            <p className="text-gray-800 font-medium mb-4">{subtitle}</p>
            {description && <p className="text-gray-600">{description}</p>}
            
            {imageUrl && (
              <div className="mt-4 w-full h-48 relative rounded-lg overflow-hidden">
                <Image 
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            {link && (
              <button className="mt-4 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                LEARN MORE <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={`hidden md:block mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative flex items-start">
          {/* Left content */}
          <div className={`w-5/12 ${isLeft ? '' : 'invisible'}`}>
            {isLeft && (
              <div className="pr-6 text-left">
               {showYear && <h3 className="text-2xl font-bold text-blue-900 mb-4">{year}</h3>}
                <div className="rounded-lg p-0">
                  <h4 className={`${titleColor} font-semibold mb-2`}>{title}</h4>
                  <p className="text-gray-800 font-medium mb-4">{subtitle}</p>
                  {description && <p className="text-gray-600">{description}</p>}
                  
                  {imageUrl && (
                    <div className="mt-4 w-full h-48 relative rounded-lg overflow-hidden">
                      <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {link && (
                    <button className="mt-4 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      LEARN MORE <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Center timeline */}
          <div className="w-2/12 flex justify-center relative">
            <div className="flex flex-col items-center">
              {showYear && <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>}
              {!isLast && <div className="w-0.5 h-full bg-gray-300 absolute top-4"></div>}
            </div>
          </div>

          {/* Right content */}
          <div className={`w-5/12 ${!isLeft ? '' : 'invisible'}`}>
            {!isLeft && (
              <div className="pl-6">
                {showYear && <h3 className="text-2xl font-bold text-blue-900 mb-4">{year}</h3>}
                <div className="rounded-lg p-0">
                  <h4 className={`${titleColor} font-semibold mb-2`}>{title}</h4>
                  <p className="text-gray-800 font-medium mb-4">{subtitle}</p>
                  {description && <p className="text-gray-600">{description}</p>}
                  
                  {imageUrl && (
                    <div className="mt-4 w-full h-48 relative rounded-lg overflow-hidden">
                      <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {link && (
                    <button className="mt-4 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      LEARN MORE <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;