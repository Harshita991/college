export interface College {
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

export const colleges: College[] = [
  {
    id: "1",
    name: "Harvard University",
    location: "Cambridge, MA",
    type: "Private",
    ranking: 1,
    students: "23,000",
    admissionUrl: "https://college.harvard.edu/admissions",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts, established in 1636. It's the oldest institution of higher education in the United States and consistently ranks among the world's top universities.",
    acceptance_rate: "3.4%",
    tuition: "$54,002",
    founded: 1636,
    campus_size: "5,076 acres",
    student_faculty_ratio: "7:1",
    graduation_rate: "98%",
    employment_rate: "95%",
    average_salary: "$89,700",
    notable_alumni: ["Barack Obama", "Mark Zuckerberg", "Bill Gates", "John F. Kennedy"],
    popular_majors: ["Economics", "Computer Science", "Political Science", "Psychology", "Biology"],
    campus_images: {
      main: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
      library: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      dormitory: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
      recreation: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
    },
    facilities: {
      academic: ["Widener Library", "Harvard Medical School", "Harvard Business School", "Science Center", "Lecture Halls"],
      recreation: ["Harvard Stadium", "Malkin Athletic Center", "Blodgett Pool", "Tennis Courts", "Fitness Centers"],
      dining: ["Annenberg Hall", "House Dining Halls", "Harvard Square Restaurants", "Cafés", "Food Trucks"],
      housing: ["Freshman Dormitories", "12 Undergraduate Houses", "Graduate Housing", "Family Housing"],
      technology: ["Computer Labs", "Research Facilities", "Innovation Labs", "Maker Spaces", "High-Speed WiFi"],
      health: ["Harvard University Health Services", "Counseling Center", "Dental Clinic", "Pharmacy", "Mental Health Services"]
    },
    campus_life: {
      clubs: 450,
      sports_teams: 42,
      greek_life: false,
      diversity_stats: {
        international_students: "25%",
        underrepresented_minorities: "47%"
      }
    },
    academics: {
      schools_colleges: ["Harvard College", "Medical School", "Business School", "Law School", "Graduate School of Arts and Sciences"],
      research_opportunities: true,
      study_abroad: true,
      internship_programs: true
    },
    financial_aid: {
      average_aid: "$59,000",
      need_based_aid: "100% of demonstrated need",
      merit_scholarships: false
    }
  },
  {
    id: "2",
    name: "Stanford University",
    location: "Stanford, CA",
    type: "Private",
    ranking: 2,
    students: "17,000",
    admissionUrl: "https://admission.stanford.edu/",
    description: "Stanford University is a private research university in Stanford, California. Known for its academic excellence, innovation in technology and entrepreneurship, and beautiful campus in the heart of Silicon Valley.",
    acceptance_rate: "3.9%",
    tuition: "$56,169",
    founded: 1885,
    campus_size: "8,180 acres",
    student_faculty_ratio: "5:1",
    graduation_rate: "96%",
    employment_rate: "94%",
    average_salary: "$94,000",
    notable_alumni: ["Elon Musk", "Larry Page", "Sergey Brin", "Reed Hastings"],
    popular_majors: ["Computer Science", "Engineering", "Economics", "Biology", "Psychology"],
    campus_images: {
      main: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
      library: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      dormitory: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
      recreation: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
    },
    facilities: {
      academic: ["Green Library", "Engineering Quad", "Medical School", "Business School", "Research Labs"],
      recreation: ["Stanford Stadium", "Arrillaga Family Recreation Center", "Golf Course", "Tennis Courts", "Swimming Pools"],
      dining: ["Dining Halls", "CoHo Café", "Tresidder Union", "Food Trucks", "Campus Restaurants"],
      housing: ["Freshman Dorms", "Upperclass Houses", "Graduate Housing", "Family Housing"],
      technology: ["d.school", "StartX Accelerator", "Computer Clusters", "Maker Spaces", "Research Computing"],
      health: ["Vaden Health Center", "Counseling Services", "Sports Medicine", "Pharmacy", "Wellness Programs"]
    },
    campus_life: {
      clubs: 650,
      sports_teams: 36,
      greek_life: true,
      diversity_stats: {
        international_students: "23%",
        underrepresented_minorities: "56%"
      }
    },
    academics: {
      schools_colleges: ["School of Engineering", "School of Medicine", "Graduate School of Business", "School of Law", "School of Education"],
      research_opportunities: true,
      study_abroad: true,
      internship_programs: true
    },
    financial_aid: {
      average_aid: "$53,000",
      need_based_aid: "100% of demonstrated need",
      merit_scholarships: true
    }
  },
  {
    id: "3",
    name: "MIT",
    location: "Cambridge, MA",
    type: "Private",
    ranking: 3,
    students: "11,500",
    admissionUrl: "https://mitadmissions.org/",
    description: "Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. World-renowned for science, technology, engineering programs, and cutting-edge research.",
    acceptance_rate: "4.1%",
    tuition: "$53,790",
    founded: 1861,
    campus_size: "168 acres",
    student_faculty_ratio: "3:1",
    graduation_rate: "96%",
    employment_rate: "93%",
    average_salary: "$104,700",
    notable_alumni: ["Buzz Aldrin", "Kofi Annan", "Benjamin Netanyahu", "Amar Bose"],
    popular_majors: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Mathematics", "Physics"],
    campus_images: {
      main: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
      library: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      dormitory: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
      recreation: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
    },
    facilities: {
      academic: ["MIT Libraries", "Koch Institute", "Computer Science Building", "Media Lab", "Research Labs"],
      recreation: ["Z Center", "Sailing Pavilion", "Tennis Courts", "Track & Field", "Fitness Centers"],
      dining: ["Student Center", "Dining Halls", "Food Trucks", "Campus Cafés", "Restaurants"],
      housing: ["Undergraduate Dorms", "Graduate Housing", "Family Housing", "Fraternities & Sororities"],
      technology: ["Fab Labs", "Maker Spaces", "Supercomputing Center", "Innovation Labs", "Startup Incubators"],
      health: ["MIT Medical", "Mental Health Services", "Sports Medicine", "Pharmacy", "Wellness Programs"]
    },
    campus_life: {
      clubs: 500,
      sports_teams: 33,
      greek_life: true,
      diversity_stats: {
        international_students: "33%",
        underrepresented_minorities: "45%"
      }
    },
    academics: {
      schools_colleges: ["School of Engineering", "School of Science", "Sloan School of Management", "School of Architecture", "School of Humanities"],
      research_opportunities: true,
      study_abroad: true,
      internship_programs: true
    },
    financial_aid: {
      average_aid: "$48,000",
      need_based_aid: "100% of demonstrated need",
      merit_scholarships: false
    }
  },
  {
    id: "4",
    name: "University of California, Berkeley",
    location: "Berkeley, CA",
    type: "Public",
    ranking: 4,
    students: "45,000",
    admissionUrl: "https://admissions.berkeley.edu/",
    description: "UC Berkeley is a public land-grant research university in Berkeley, California. Known for academic excellence, research innovation, social activism, and diverse student body.",
    acceptance_rate: "14.5%",
    tuition: "$14,226",
    founded: 1868,
    campus_size: "1,232 acres",
    student_faculty_ratio: "20:1",
    graduation_rate: "92%",
    employment_rate: "89%",
    average_salary: "$78,500",
    notable_alumni: ["Steve Wozniak", "Eric Schmidt", "Jennifer Granholm", "Jerry Brown"],
    popular_majors: ["Computer Science", "Economics", "Political Science", "Psychology", "Engineering"],
    campus_images: {
      main: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
      library: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      dormitory: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
      recreation: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
    },
    facilities: {
      academic: ["Doe Memorial Library", "Engineering Buildings", "Science Facilities", "Business School", "Law School"],
      recreation: ["Recreational Sports Facility", "Memorial Stadium", "Tennis Courts", "Swimming Pools", "Fitness Centers"],
      dining: ["Dining Commons", "Food Courts", "Campus Restaurants", "Cafés", "Food Trucks"],
      housing: ["Residence Halls", "Apartments", "Co-ops", "Greek Housing", "Family Housing"],
      technology: ["Computer Labs", "Research Centers", "Innovation Hubs", "Maker Spaces", "High-Performance Computing"],
      health: ["University Health Services", "Counseling Center", "Sports Medicine", "Pharmacy", "Mental Health"]
    },
    campus_life: {
      clubs: 1000,
      sports_teams: 30,
      greek_life: true,
      diversity_stats: {
        international_students: "17%",
        underrepresented_minorities: "67%"
      }
    },
    academics: {
      schools_colleges: ["College of Engineering", "College of Letters & Science", "Haas School of Business", "School of Law", "Graduate School"],
      research_opportunities: true,
      study_abroad: true,
      internship_programs: true
    },
    financial_aid: {
      average_aid: "$22,000",
      need_based_aid: "Covers full need for CA residents",
      merit_scholarships: true
    }
  },
  {
    id: "5",
    name: "Yale University",
    location: "New Haven, CT",
    type: "Private",
    ranking: 5,
    students: "13,500",
    admissionUrl: "https://admissions.yale.edu/",
    description: "Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701, it's known for its undergraduate liberal arts program and Gothic Revival architecture.",
    acceptance_rate: "4.6%",
    tuition: "$59,950",
    founded: 1701,
    campus_size: "1,015 acres",
    student_faculty_ratio: "6:1",
    graduation_rate: "97%",
    employment_rate: "94%",
    average_salary: "$83,200",
    notable_alumni: ["George W. Bush", "Hillary Clinton", "Meryl Streep", "Anderson Cooper"],
    popular_majors: ["Economics", "Political Science", "History", "Psychology", "Biology"],
    campus_images: {
      main: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
      library: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      dormitory: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
      recreation: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
    },
    facilities: {
      academic: ["Sterling Memorial Library", "Science Hill", "Art Galleries", "Music School", "Drama School"],
      recreation: ["Payne Whitney Gymnasium", "Yale Bowl", "Tennis Courts", "Sailing Center", "Golf Course"],
      dining: ["Residential College Dining", "Campus Restaurants", "Cafés", "Food Courts", "Catering Services"],
      housing: ["14 Residential Colleges", "Graduate Housing", "Family Housing", "Off-Campus Options"],
      technology: ["Computer Clusters", "Digital Media Center", "Research Computing", "Innovation Labs", "Maker Spaces"],
      health: ["Yale Health", "Mental Health Services", "Sports Medicine", "Pharmacy", "Wellness Center"]
    },
    campus_life: {
      clubs: 500,
      sports_teams: 35,
      greek_life: false,
      diversity_stats: {
        international_students: "20%",
        underrepresented_minorities: "52%"
      }
    },
    academics: {
      schools_colleges: ["Yale College", "Graduate School", "School of Medicine", "Law School", "School of Art"],
      research_opportunities: true,
      study_abroad: true,
      internship_programs: true
    },
    financial_aid: {
      average_aid: "$62,000",
      need_based_aid: "100% of demonstrated need",
      merit_scholarships: false
    }
  },
  {
    id: "6",
    name: "Princeton University",
    location: "Princeton, NJ",
    type: "Private",
    ranking: 6,
    students: "5,400",
    admissionUrl: "https://admission.princeton.edu/",
    description: "Princeton University is a private Ivy League research university in Princeton, New Jersey. Known for its undergraduate focus, beautiful campus, and strong liberal arts education.",
    acceptance_rate: "4.0%",
    tuition: "$56,010",
    founded: 1746,
    campus_size: "600 acres",
    student_faculty_ratio: "5:1",
    graduation_rate: "97%",
    employment_rate: "95%",
    average_salary: "$87,900",
    notable_alumni: ["Woodrow Wilson", "F. Scott Fitzgerald", "Jeff Bezos", "Elena Kagan"],
    popular_majors: ["Economics", "Computer Science", "Public Policy", "History", "Politics"],
    campus_images: {
      main: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
      library: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      dormitory: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
      recreation: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
    },
    facilities: {
      academic: ["Firestone Library", "Engineering Quad", "Art Museum", "Chapel", "Academic Buildings"],
      recreation: ["Dillon Gymnasium", "Princeton Stadium", "Tennis Courts", "Sailing Center", "Golf Course"],
      dining: ["Dining Halls", "Campus Club", "Cafés", "Food Courts", "Catering"],
      housing: ["Residential Colleges", "Graduate Housing", "Family Housing", "Eating Clubs"],
      technology: ["Computer Centers", "Research Labs", "Innovation Spaces", "Digital Humanities", "High-Performance Computing"],
      health: ["McCosh Health Center", "Counseling Services", "Sports Medicine", "Pharmacy", "Wellness Programs"]
    },
    campus_life: {
      clubs: 300,
      sports_teams: 38,
      greek_life: false,
      diversity_stats: {
        international_students: "23%",
        underrepresented_minorities: "48%"
      }
    },
    academics: {
      schools_colleges: ["School of Engineering", "School of Public Affairs", "Graduate School", "Princeton Writing Program"],
      research_opportunities: true,
      study_abroad: true,
      internship_programs: true
    },
    financial_aid: {
      average_aid: "$56,000",
      need_based_aid: "100% of demonstrated need",
      merit_scholarships: false
    }
  }
];

export const categories = [
  "All",
  "Private",
  "Public", 
  "Community College",
  "Ivy League",
  "Engineering",
  "Liberal Arts",
  "Research Universities"
];