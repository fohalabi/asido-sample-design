'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`bg-white border-gray-200 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center ${isScrolled ? 'justify-between py-3' : 'justify-between py-2'}`}>
                    {/* Logo */}
                    <div className="flex items-center space-x-8">
                        <Image 
                            src="/ff28bca11f3093fd5c15bfb1491483e108725274.png"
                            alt='Asido Foundation'
                            width={128}
                            height={40}
                            className="lg:hidden"
                            priority
                        />
                        <Image 
                            src={isScrolled ? "/Image (2).png" : "/ff28bca11f3093fd5c15bfb1491483e108725274.png"}
                            alt='Asido Foundation'
                            width={isScrolled ? 28 : 128}
                            height={isScrolled ? 19 : 40}
                            className="hidden lg:block"
                            priority
                        />
                        
                        
                        {isScrolled && (
                            <nav className="hidden lg:flex items-center space-x-6">
                                <a href="#TimelineHeader" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                    ABOUT US
                                </a>
                                <a href="#Timeline" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                    IMPACT
                                </a>
                                <a href="#get-involved" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                    GET INVOLVED
                                </a>
                                <a href="#MentalHealth" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                    STAY INFORMED
                                </a>
                            </nav>
                        )}
                    </div>

                    
                    <div className='flex items-center space-x-3'>
                        
                        {!isScrolled && (
                            <button className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        )}
                        
                        
                        <button className='lg:hidden w-8 h-8 flex items-center justify-center' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {!isMobileMenuOpen ? <Menu className='w-6 h-6 text-blue-600' /> : <X className='w-6 h-6 text-blue-600' />}
                        </button>
                        
                        
                        {isScrolled && (
                            <div className='hidden lg:flex items-center space-x-4'>
                                <a href="#pledge" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                    TAKE THE PLEDGE
                                </a>
                                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded transition-colors text-sm">
                                    DONATE
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                
                {!isScrolled && (
                    <div className='hidden lg:flex items-center justify-between'>
                        <nav className="flex items-center space-x-8">
                            <a href="#TimelineHeader" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                ABOUT US
                            </a>
                            <a href="#Timeline" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                IMPACT
                            </a>
                            <a href="#get-involved" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                GET INVOLVED
                            </a>
                            <a href="#MentalHealth" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                STAY INFORMED
                            </a>
                        </nav>

                        <div className='flex items-center space-x-4'>
                            <a href="#pledge" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                TAKE THE PLEDGE
                            </a>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded transition-colors text-sm">
                                DONATE
                            </button>
                        </div>
                    </div>
                )}

                
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col animate-fadeIn">
                        
                        <div className="flex justify-end p-4">
                            <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center">
                                <X className="w-8 h-8 text-blue-600" />
                            </button>
                        </div>

                        {/* Navigation links */}
                        <nav className="flex flex-col px-6">
                            <a 
                                href="#TimelineHeader" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-blue-600 font-semibold text-xs hover:text-blue-700 transition-colors py-2 border-b border-gray-200 w-full animate-slideInLeft"
                                style={{ animationDelay: '0.1s' }}
                            >
                                ABOUT US
                            </a>
                            <a 
                                href="#Timeline" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-blue-600 font-semibold text-xs hover:text-blue-700 transition-colors py-2 border-b border-gray-200 w-full animate-slideInLeft"
                                style={{ animationDelay: '0.2s' }}
                            >
                                IMPACT
                            </a>
                            <a 
                                href="#get-involved" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-blue-600 font-semibold text-xs hover:text-blue-700 transition-colors py-2 border-b border-gray-200 w-full animate-slideInLeft"
                                style={{ animationDelay: '0.3s' }}
                            >
                                GET INVOLVED
                            </a>
                            <a 
                                href="#MentalHealth" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-blue-600 font-semibold text-xs hover:text-blue-700 transition-colors py-2 border-b border-gray-200 w-full animate-slideInLeft"
                                style={{ animationDelay: '0.4s' }}
                            >
                                STAY INFORMED
                            </a>
                            <a 
                                href="#pledge" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-blue-600 font-semibold text-xs hover:text-blue-700 transition-colors py-2 border-b border-gray-200 w-full animate-slideInLeft"
                                style={{ animationDelay: '0.5s' }}
                            >
                                TAKE THE PLEDGE
                            </a>
                        </nav>

                        {/* Spacer to push donate button to bottom */}
                        <div className="flex-1"></div>

                        {/* Donate button */}
                        <div className="p-6 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-4 rounded transition-colors text-base w-full">
                                DONATE
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;