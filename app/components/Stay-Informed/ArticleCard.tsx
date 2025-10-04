import React from 'react'
import { Article } from '../../types/index';
import Image from 'next/image';
import { Twitter, Facebook, Linkedin, Instagram, Send } from 'lucide-react';

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
            <div className={`bg-gray-200 p-6 pb-16 relative ${article.accentColor === 'text-blue-700' ? 'text-blue-600' : article.accentColor === 'text-purple-700' ? 'text-purple-700' : 'text-emerald-700'}`}>
                <div className="flex justify-center items-start mb-4">
                    <div className="flex gap-3">
                        <div className="w-16 h-8 rounded flex items-center justify-center">
                           <Image src="/Logo+Word.png" alt="Asido" width={60} height={20} className="object-contain" />
                        </div>
                        <div className="w-16 h-8 rounded flex items-center justify-center">
                           <Image src="/aef9334bc9be8099c439ddebfc13300cf3a390d9.png" alt="Asido" width={60} height={28} className="object-contain" />
                        </div>
                    </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${accentColor}`}>
                    Your Mental<br />Health & You
                </h3>
                <p className="text-xs text-gray-700 mb-4">
                    A weekly column for the Nigerian Tribune<br />on Thursdays
                </p>
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
                        <p className="text-white mb-3 text-xs">{topic}</p>
                        <p className="font-semibold mb-1">DATE</p>
                        <p className="text-white">{date}</p>
                    </div>
                    <div className="flex-1 text-right">
                        <p className="font-bold text-xl">{author}</p>
                        <p className="text-white text-xs mt-1">{authorTitle}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-4 text-white text-sm">
                    <a href="#" className="hover:opacity-80">
                        <Twitter size={18} />
                    </a>
                    <a href="#" className="hover:opacity-80">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="hover:opacity-80">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="hover:opacity-80 flex items-center gap-1">
                        <Instagram size={18} />
                        <span className="text-xs">@asidofoundation</span>
                    </a>
                    <div className="h-4 w-px bg-white opacity-50"></div>
                    <a href="https://t.me/asidofoundation" className="hover:opacity-80 flex items-center gap-1 ml-auto">
                        <Send size={18} />
                        <span className="text-xs">t.me/asidofoundation</span>
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
