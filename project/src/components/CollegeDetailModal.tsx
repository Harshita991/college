import React from 'react';
import { X, MapPin, Users, Calendar, DollarSign, TrendingUp, Award, ExternalLink } from 'lucide-react';

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

interface CollegeDetailModalProps {
  college: College;
  isOpen: boolean;
  onClose: () => void;
}

const CollegeDetailModal: React.FC<CollegeDetailModalProps> = ({ college, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={college.campus_images.main} 
            alt={college.name}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-3xl"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold mb-2">{college.name}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{college.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Est. {college.founded}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Campus Images Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {Object.entries(college.campus_images).map(([key, url]) => (
              <div key={key} className="relative group">
                <img 
                  src={url} 
                  alt={`${college.name} ${key}`}
                  className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-xl"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium capitalize">
                  {key === 'main' ? 'Campus' : key}
                </div>
              </div>
            ))}
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{college.students}</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{college.acceptance_rate}</div>
              <div className="text-sm text-gray-600">Acceptance Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{college.tuition}</div>
              <div className="text-sm text-gray-600">Annual Tuition</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{college.graduation_rate}</div>
              <div className="text-sm text-gray-600">Graduation Rate</div>
            </div>
          </div>

          {/* Detailed Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* About */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{college.description}</p>
              </div>

              {/* Campus Details */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campus Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campus Size:</span>
                    <span className="font-medium">{college.campus_size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Student-Faculty Ratio:</span>
                    <span className="font-medium">{college.student_faculty_ratio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employment Rate:</span>
                    <span className="font-medium">{college.employment_rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Salary:</span>
                    <span className="font-medium">{college.average_salary}</span>
                  </div>
                </div>
              </div>

              {/* Popular Majors */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Popular Majors</h3>
                <div className="flex flex-wrap gap-2">
                  {college.popular_majors.map((major, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {major}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notable Alumni */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Notable Alumni</h3>
                <div className="flex flex-wrap gap-2">
                  {college.notable_alumni.map((alumni, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {alumni}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Campus Life */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campus Life</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Student Organizations:</span>
                    <span className="font-medium">{college.campus_life.clubs}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sports Teams:</span>
                    <span className="font-medium">{college.campus_life.sports_teams}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Greek Life:</span>
                    <span className="font-medium">{college.campus_life.greek_life ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">International Students:</span>
                    <span className="font-medium">{college.campus_life.diversity_stats.international_students}</span>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campus Facilities</h3>
                <div className="space-y-4">
                  {Object.entries(college.facilities).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-gray-800 capitalize mb-2">{category}</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {items.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Aid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Aid</h3>
                <div className="bg-green-50 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-800">Average Aid:</span>
                    <span className="font-medium text-green-900">{college.financial_aid.average_aid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-800">Need-Based Aid:</span>
                    <span className="font-medium text-green-900">{college.financial_aid.need_based_aid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-800">Merit Scholarships:</span>
                    <span className="font-medium text-green-900">{college.financial_aid.merit_scholarships ? 'Available' : 'Not Available'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="mt-8 text-center">
            <a
              href={college.admissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Apply to {college.name}</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailModal;