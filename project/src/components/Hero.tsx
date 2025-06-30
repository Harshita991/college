import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const Hero: React.FC<HeroProps> = ({ onSearchChange, searchQuery }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> College</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Access admission portals for thousands of colleges and universities. Start your journey to higher education today.
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search colleges, universities, or programs..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-200"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center space-x-2">
              <span>Explore Colleges</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              View Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;