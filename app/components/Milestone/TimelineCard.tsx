import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { TimelineEvent } from '../../types/Timelinetypes';
import Image from 'next/image';

interface TimelineCardProps extends TimelineEvent {
  index: number;
  isLast: boolean;
  showYear: boolean;
  dotFilled: boolean;
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
  showYear,
  dotFilled
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
          {showYear && <div className={`w-3 h-3 rounded-full flex-shrink-0 border-2 transition-colors duration-300 ${dotFilled ? 'bg-blue-600 border-blue-600' : 'bg-gray-300 border-gray-300'}`}></div>}
          {/* {!isLast && <div className="w-0.5 flex-1 bg-gray-400"></div>} */}
        </div>
        <div className="flex-1 pb-4">
          {showYear && <h3 className="text-2xl font-bold text-blue-900 mb-4 -mt-2.5">{year}</h3>}
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
      <div className={`hidden md:block mb-16`}>
        <div className="relative flex items-start">
          {/* Left content */}
          <div className={`w-5/12 ${isLeft ? '' : 'invisible'}`}>
            {isLeft && (
              <div className="pr-6 text-left">
               {showYear && <h3 className={`text-2xl font-bold text-blue-900 mb-4 -mt-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>{year}</h3>}
                <div className="rounded-lg p-0">
                  <h4 className={`${titleColor} font-semibold mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>{title}</h4>
                  <p className={`text-gray-800 font-medium mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>{subtitle}</p>
                  {description && <p className={`text-gray-600 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>{description}</p>}
                  
                  {imageUrl && (
                    <div className={`mt-4 w-full h-72 relative rounded-lg overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                      <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {link && (
                    <button className={`mt-4 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
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
            {showYear && <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md z-10 transition-colors duration-300 ${dotFilled ? 'bg-blue-600' : 'bg-gray-300'}`}></div>}
              {!isLast && <div className="w-0.5 h-full bg-gray-400 absolute"></div>}
            </div>
          </div>

          {/* Right content */}
          <div className={`w-5/12 ${!isLeft ? '' : 'invisible'}`}>
            {!isLeft && (
              <div className="pl-6">
                {showYear && <h3 className={`text-2xl font-bold text-blue-900 mb-4 -mt-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>{year}</h3>}
                <div className="rounded-lg p-0">
                  <h4 className={`${titleColor} font-semibold mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>{title}</h4>
                  <p className={`text-gray-800 font-medium mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>{subtitle}</p>
                  {description && <p className={`text-gray-600 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>{description}</p>}
                  
                  {imageUrl && (
                    <div className={`mt-4 w-full h-72 relative rounded-lg overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                      <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {link && (
                    <button className={`mt-4 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
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