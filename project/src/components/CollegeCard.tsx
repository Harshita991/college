import React, { useState } from 'react';
import { ExternalLink, MapPin, Users, Star, Calendar, DollarSign, TrendingUp, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  ranking: number;
  students: string;
  admissionUrl: string;
  description: string;
  acceptance_rate: string;
  tuition: string;
  founded: number;
  campus_size: string;
  student_faculty_ratio: string;
  graduation_rate: string;
  employment_rate: string;
  average_salary: string;
  notable_alumni: string[];
  popular_majors: string[];
  campus_images: {
    main: string;
    library: string;
    dormitory: string;
    recreation: string;
  };
  facilities: {
    academic: string[];
    recreation: string[];
    dining: string[];
    housing: string[];
    technology: string[];
    health: string[];
  };
  campus_life: {
    clubs: number;
    sports_teams: number;
    greek_life: boolean;
    diversity_stats: {
      international_students: string;
      underrepresented_minorities: string;
    };
  };
  academics: {
    schools_colleges: string[];
    research_opportunities: boolean;
    study_abroad: boolean;
    internship_programs: boolean;
  };
  financial_aid: {
    average_aid: string;
    need_based_aid: string;
    merit_scholarships: boolean;
  };
}

interface CollegeCardProps {
  college: College;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImageTab, setActiveImageTab] = useState('main');

  const imageTabLabels = {
    main: 'Campus',
    library: 'Library',
    dormitory: 'Housing',
    recreation: 'Recreation'
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group">
      {/* Campus Images Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={college.campus_images[activeImageTab as keyof typeof college.campus_images]} 
          alt={`${college.name} ${activeImageTab}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Image Navigation Tabs */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {Object.entries(imageTabLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveImageTab(key)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeImageTab === key 
                  ? 'bg-white text-gray-900' 
                  : 'bg-black/30 text-white hover:bg-black/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Ranking Badge */}
        <div className="absolute top-4 right-4 flex items-center bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
          <Star className="h-4 w-4 mr-1" />
          #{college.ranking}
        </div>
      </div>

      <div className="p-6">
        {/* Header Section */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {college.name}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{college.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">Est. {college.founded}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {college.description}
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-3 rounded-xl">
            <div className="flex items-center mb-1">
              <Users className="h-4 w-4 text-blue-600 mr-1" />
              <p className="text-xs text-blue-600 font-medium">Students</p>
            </div>
            <p className="font-bold text-gray-900">{college.students}</p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-xl">
            <div className="flex items-center mb-1">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <p className="text-xs text-green-600 font-medium">Acceptance</p>
            </div>
            <p className="font-bold text-gray-900">{college.acceptance_rate}</p>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-xl">
            <div className="flex items-center mb-1">
              <DollarSign className="h-4 w-4 text-purple-600 mr-1" />
              <p className="text-xs text-purple-600 font-medium">Tuition</p>
            </div>
            <p className="font-bold text-gray-900">{college.tuition}</p>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-xl">
            <div className="flex items-center mb-1">
              <Award className="h-4 w-4 text-orange-600 mr-1" />
              <p className="text-xs text-orange-600 font-medium">Graduation</p>
            </div>
            <p className="font-bold text-gray-900">{college.graduation_rate}</p>
          </div>
        </div>

        {/* Popular Majors */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Majors</h4>
          <div className="flex flex-wrap gap-2">
            {college.popular_majors.slice(0, 3).map((major, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                {major}
              </span>
            ))}
            {college.popular_majors.length > 3 && (
              <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs">
                +{college.popular_majors.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Expandable Details */}
        {isExpanded && (
          <div className="space-y-6 mb-6 border-t border-gray-100 pt-6">
            {/* Campus Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Campus Info</h5>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Size:</span> {college.campus_size}</p>
                  <p><span className="font-medium">Student-Faculty Ratio:</span> {college.student_faculty_ratio}</p>
                  <p><span className="font-medium">Employment Rate:</span> {college.employment_rate}</p>
                  <p><span className="font-medium">Average Salary:</span> {college.average_salary}</p>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Campus Life</h5>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Student Clubs:</span> {college.campus_life.clubs}+</p>
                  <p><span className="font-medium">Sports Teams:</span> {college.campus_life.sports_teams}</p>
                  <p><span className="font-medium">Greek Life:</span> {college.campus_life.greek_life ? 'Yes' : 'No'}</p>
                  <p><span className="font-medium">International Students:</span> {college.campus_life.diversity_stats.international_students}</p>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Campus Facilities</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h6 className="text-sm font-medium text-blue-600 mb-2">Academic</h6>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {college.facilities.academic.slice(0, 3).map((facility, index) => (
                      <li key={index}>• {facility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-medium text-green-600 mb-2">Recreation</h6>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {college.facilities.recreation.slice(0, 3).map((facility, index) => (
                      <li key={index}>• {facility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-medium text-purple-600 mb-2">Technology</h6>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {college.facilities.technology.slice(0, 3).map((facility, index) => (
                      <li key={index}>• {facility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-sm font-medium text-orange-600 mb-2">Housing</h6>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {college.facilities.housing.slice(0, 3).map((facility, index) => (
                      <li key={index}>• {facility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Notable Alumni */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Notable Alumni</h5>
              <div className="flex flex-wrap gap-2">
                {college.notable_alumni.map((alumni, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {alumni}
                  </span>
                ))}
              </div>
            </div>

            {/* Financial Aid */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Financial Aid</h5>
              <div className="bg-green-50 p-4 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <p><span className="font-medium text-green-800">Average Aid:</span> <span className="text-green-700">{college.financial_aid.average_aid}</span></p>
                  <p><span className="font-medium text-green-800">Need-Based Aid:</span> <span className="text-green-700">{college.financial_aid.need_based_aid}</span></p>
                  <p><span className="font-medium text-green-800">Merit Scholarships:</span> <span className="text-green-700">{college.financial_aid.merit_scholarships ? 'Available' : 'Not Available'}</span></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {college.type}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="h-4 w-4 ml-1" />
                </>
              ) : (
                <>
                  <span>More Info</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </>
              )}
            </button>
          </div>
          
          <a
            href={college.admissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 group shadow-lg hover:shadow-xl"
          >
            <span>Apply Now</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;