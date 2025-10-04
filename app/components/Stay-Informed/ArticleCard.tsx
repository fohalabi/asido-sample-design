import React from 'react'
import { Article } from '../../types/index';
import Image from 'next/image';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
    const {
        title,
        date,
        topic,
        author,
        authorTitle,
        image,
        bgColor,
        accentColor
    } = article;
    return (
        <div className="flex flex-col">
            {/* Upper Section - Gray Background */}
            <div className={`bg-gray-200 p-6 pb-2 relative ${article.accentColor === 'text-blue-700' ? 'text-blue-600' : article.accentColor === 'text-purple-700' ? 'text-purple-700' : 'text-emerald-700'}`}>
                <div className="flex justify-center items-start mb-4">
                    <div className="flex gap-3">
                        <div className="w-10 h-8 rounded flex items-center justify-center">
                           <Image src="/Logo+Word.png" alt="Asido" width={60} height={20} className="object-contain" />
                        </div>
                        <div className="w-14 h-8 rounded flex items-center justify-center">
                           <Image src="/aef9334bc9be8099c439ddebfc13300cf3a390d9.png" alt="Asido" width={60} height={28} className="object-contain" />
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className={`text-xl font-bold mb-2 ${article.accentColor}`}>
                        Your Mental<br />Health & You
                    </h3>

                    <div className={`w-32 h-0.5 my-3 ${article.accentColor === 'text-blue-700' ? 'bg-blue-600' : article.accentColor === 'text-purple-700' ? 'bg-purple-700' : 'bg-emerald-700'}`}></div>

                    <p className="text-xs text-gray-700 mb-4 mt-2">
                        A weekly column for the Nigerian Tribune<br />on Thursdays
                    </p>
                </div>
                {/* Author Image - Overlapping */}
                <div className="absolute bottom-4 right-1 z-10">
                    <Image
                        src={image}
                        alt={author}
                        width={160}
                        height={160}
                        className="relative w-39 h-39 object-cover rounded-lg"
                    />
                </div>
            </div>
            {/* Lower Section - Colored Background */}
           <div className={`px-6 pt-8 pb-4 text-white ${article.accentColor === 'text-blue-700' ? 'bg-blue-600' : article.accentColor === 'text-purple-700' ? 'bg-purple-700' : 'bg-emerald-700'}`}>
                <div className="flex justify-between items-start text-xs">
                    <div className="flex-1">
                        <p className="font-semibold mb-1">TOPIC</p>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-5 bg-white"></div>
                            <p className="text-white text-[10px]">{topic}</p>
                        </div>
                        
                        <p className="font-semibold mb-1">DATE</p>
                        <div className="flex items-center gap-2">
                            <div className="w-0.5 h-4 bg-white"></div>
                            <p className="text-white">{date}</p>
                        </div>
                    </div>
                    <div className="flex-1 text-right">
                        <p className="font-bold text-xl">{author}</p>
                        <p className="text-white text-xs mt-1">{authorTitle}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-3 text-white text-[10px] px-8 md:px-8">
                    <a href="#" className="hover:opacity-80">
                        <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="white">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80">
                        <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="white">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80">
                        <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="#" className="hover:opacity-80 flex items-center gap-0.5">
                        <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="text-[9px] md:text-[10px]">@asidofoundation</span>
                    </a>
                    <div className="h-3 w-px bg-white opacity-50"></div>
                    <a href="https://t.me/asidofoundation" className="hover:opacity-80 flex items-center gap-0.5 ml-auto">
                        <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="white">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        <span className="text-[9px] md:text-[10px] whitespace-nowrap">t.me/asidofoundation</span>
                    </a>
                </div>
            </div>
            {/* Article Content */}
            <div className="p-6 flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {title}
                </h2>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition">
                    READ MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ArticleCard
