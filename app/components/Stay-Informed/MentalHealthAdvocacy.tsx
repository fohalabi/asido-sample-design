'use client'
import React from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '../../types/index';

const MentalHealthAdvocacy: React.FC = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  // Touch handlers for swipe gestures
  const handleTouchStart = React.useRef(0);
  const handleTouchEnd = React.useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (handleTouchStart.current - handleTouchEnd.current > 50 && currentSlide < articles.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (handleTouchEnd.current - handleTouchStart.current > 50 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const articles: Article[] = [
    {
      id: 1,
      title: "Naija Spirit: Unique Powers of Resilience or Learned Helplessness?",
      date: "10th July 2025",
      topic: "Naija Spirit: Unique Powers of Resilience or Learned Helplessness?",
      author: "Dr. Jibril Abdulmalik",
      authorTitle: "Consultant Psychiatrist, Founder/CEO, Asido Foundation",
      image: "/Masked Image.png",
      bgColor: "bg-blue-100",
      accentColor: "text-blue-700"
    },
    {
      id: 2,
      title: "Ignorance Around Mental Health Challenges is Expensive",
      date: "10th July 2025",
      topic: "Ignorance Around Mental Health Challenges is Expensive",
      author: "Dr. Jibril Abdulmalik",
      authorTitle: "Consultant Psychiatrist, Founder/CEO, Asido Foundation",
      image: "/Image shape.png",
      bgColor: "bg-purple-100",
      accentColor: "text-purple-700"
    },
    {
      id: 3,
      title: "Stretched to Breaking Point: Emotional Burden of Caring for the Elderly with Dementia",
      date: "10th July 2025",
      topic: "Stretched to Breaking Point: Emotional Burden of Caring for the Elderly with Dementia",
      author: "Dr. Jibril Abdulmalik",
      authorTitle: "Consultant Psychiatrist, Founder/CEO, Asido Foundation",
      image: "/Image shape (1).png",
      bgColor: "bg-green-100",
      accentColor: "text-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" id='MentalHealth'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-teal-500 text-lg font-semibold mb-3">Stay Informed</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-4xl">
            Through advocacy, education, and support, we are building a stigma-free future for mental health in Nigeria.
          </h1>
        </div>
        
        {/* Articles Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Articles Carousel - Mobile */}
        <div className="lg:hidden relative">
          {/* Cards Container */}
          <div 
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {articles.map((article) => (
                <div key={article.id} className="w-full flex-shrink-0 px-4">
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {currentSlide > 0 && (
            <button
              onClick={() => setCurrentSlide(currentSlide - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {currentSlide < articles.length - 1 && (
            <button
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-teal-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthAdvocacy
