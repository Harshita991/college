import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import CollegeCard from './components/CollegeCard';
import Resources from './components/Resources';
import Footer from './components/Footer';
import { colleges, categories } from './data/colleges';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           college.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || 
                             college.type === selectedCategory ||
                             (selectedCategory === 'Ivy League' && ['Harvard University', 'Stanford University', 'MIT', 'Yale University', 'Princeton University', 'Columbia University'].includes(college.name)) ||
                             (selectedCategory === 'Engineering' && ['MIT', 'Stanford University', 'Georgia Institute of Technology'].includes(college.name)) ||
                             (selectedCategory === 'Liberal Arts' && ['Harvard University', 'Yale University', 'Princeton University', 'Columbia University'].includes(college.name));
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />
      
      <Hero 
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <section id="colleges" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Colleges' : selectedCategory}
              </h2>
              <p className="text-gray-600 mt-2">
                {filteredColleges.length} colleges found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
          </div>
          
          {filteredColleges.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No colleges found</h3>
              <p className="text-gray-600">Try adjusting your search terms or selected category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Resources />
      <Footer />
    </div>
  );
}

export default App;