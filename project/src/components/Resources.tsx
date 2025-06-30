import React from 'react';
import { BookOpen, FileText, Calculator, Users, CheckCircle, Clock } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      icon: FileText,
      title: "Application Essays",
      description: "Tips and examples for writing compelling college application essays",
      link: "#"
    },
    {
      icon: Calculator,
      title: "Financial Aid Calculator",
      description: "Estimate your financial aid eligibility and potential costs",
      link: "#"
    },
    {
      icon: CheckCircle,
      title: "Application Checklist",
      description: "Complete checklist to ensure you don't miss any requirements",
      link: "#"
    },
    {
      icon: Clock,
      title: "Deadline Tracker",
      description: "Keep track of important application deadlines",
      link: "#"
    },
    {
      icon: BookOpen,
      title: "SAT/ACT Prep",
      description: "Free resources and practice tests for standardized exams",
      link: "#"
    },
    {
      icon: Users,
      title: "Student Forums",
      description: "Connect with other students and share experiences",
      link: "#"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resources & Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to navigate the college application process successfully
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <resource.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-4">{resource.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a 
                href={resource.link}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;