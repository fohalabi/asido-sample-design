'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
                <div className="flex items-center justify-between m-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image 
                            src="/ff28bca11f3093fd5c15bfb1491483e108725274.png"
                            alt='Asido Foundation'
                            width={128}
                            height={40}
                            priority
                        />
                    </div>

                    {/* Search icon */}
                    <div className='flex items-center space-x-3'>
                        <button className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Hamburger menu - visible on mobile */}
                        <button
                            className='lg:hidden w-8 h-8 flex items-center justify-center'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {!isMobileMenuOpen ? (
                                <Menu className='w-6 h-6 text-blue-600' />
                            ) : (
                                <X className='w-6 h-6 text-blue-600' />
                            )}
                        </button>
                    </div>
                </div>


                {/* Bottom row: Navigation and CTA buttons */}
                <div className='hidden lg:flex items-center justify-between'>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#about"
                            className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                        >
                            ABOUT US
                        </a>
                        <a
                            href="#impact"
                            className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                        >
                            IMPACT
                        </a>
                        <a
                            href="#get-involved"
                            className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                        >
                            GET INVOLVED
                        </a>
                        <a
                            href="#stay-informed"
                            className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                        >
                            STAY INFORMED
                        </a>
                    </nav>

                    {/* Right side actions */}
                    <div className='flex items-center space-x-4'>
                        {/* Take the pledge link */}
                        <a
                            href="#pledge"
                            className="hidden lg:block text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                        >
                            TAKE THE PLEDGE
                        </a>

                        {/* Donate button */}
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded transition-colors text-sm -mt-1">
                            DONATE
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
                        <nav className="flex flex-col space-y-3 mb-4">
                            <a href="#about" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                ABOUT US
                            </a>
                            <a href="#impact" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                IMPACT
                            </a>
                            <a href="#get-involved" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                GET INVOLVED
                            </a>
                            <a href="#stay-informed" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                STAY INFORMED
                            </a>
                        </nav>

                        <div className="flex flex-col space-y-3">
                        <a href="#pledge" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                            TAKE THE PLEDGE
                        </a>
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm w-full">
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
