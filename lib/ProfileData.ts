// Profile data service with types

export interface WorkExperience {
  position: string;
  company: string;
  duration: string;
  location: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  details: string[];
  icon: string;
  credentialUrl: string;
}

export interface PersonalProject {
  title: string;
  description: string;
  technologies: string[];
  image: string; // URL to project image
  githubUrl?: string;
  demoUrl?: string; // Optional demo URL
  highlights: string[];
}

// Work experience data
export const getWorkExperience = (): WorkExperience[] => {
  return [
    {
      position: "Data Engineer",
      company: "Cloud Shuttle",
      duration: "Jan 2023 - Present",
      location: "Sydney, Australia",
      details: [
        "Lead data pipeline development using AWS services and Databricks",
        "Implemented ETL processes for real-time analytics dashboards",
        "Optimized database performance increasing query speeds by 40%",
        "Designed and deployed data lake solutions using S3 and Glue"
      ]
    },
    {
      position: "Software Developer",
      company: "WebTec Solutions",
      duration: "July 2022 - Jan 2023",
      location: "Canberra, Australia",
      details: [
        "Developed microservices using Node.js and Express",
        "Created responsive web interfaces with React and Tailwind CSS",
        "Implemented authentication systems and secure API endpoints",
        "Improved application performance by 30% through code refactoring"
      ]
    },
    {
      position: "Machine Learning Engineer III",
      company: "Fusemachines Nepal",
      duration: "April 2019 - June 2022",
      location: "Kathmandu, Nepal",
      details: [
        "Designed and implemented NLP models for text classification and sentiment analysis",
        "Worked on computer vision solutions for retail analytics",
        "Trained and deployed machine learning models to production environments",
        "Led a team of 4 junior ML engineers on client projects"
      ]
    }
  ];
};

// Education data
export const getEducation = (): Education[] => {
  return [
    {
      degree: "Masters of Computer Science",
      institution: "University of Wollongong",
      duration: "July 2023 - Present",
      location: "Wollongong, NSW, Australia",
      details: [
        "Specialization in Machine Learning and Data Science",
        "Research focus on Natural Language Processing",
        "GPA: 3.8/4.0",
        "Thesis: Efficient Fine-tuning Methods for Low-Resource Languages"
      ]
    },
    {
      degree: "Bachelors of Electronics and Communication Engineering",
      institution: "Tribhuvan University",
      duration: "June 2014 - December 2018",
      location: "Kathmandu, Nepal",
      details: [
        "Focus on embedded systems and signal processing",
        "Graduated with distinction",
        "Final year project: IoT-based smart home system",
        "Awarded for best academic performance in the department"
      ]
    }
  ];
};

// Certification data
export const getCertifications = (): Certification[] => {
  return [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "July 2023",
      details: [
        "Advanced machine learning model development",
        "Neural network implementation",
        "Computer vision and NLP applications",
        "TensorFlow deployment in production"
      ],
      icon: "🧠",
      credentialUrl:
        "https://www.credential.net/8b27ce74-5170-45a3-a5c5-91e5d8b5940b"
    },
    {
      title: "Natural Language Processing",
      issuer: "Coursera",
      date: "May 2022",
      details: [
        "Sentiment analysis",
        "Language modeling",
        "Neural machine translation",
        "BERT and transformers"
      ],
      icon: "📚",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/certificate/93Q9C9DEKG5C"
    },
    {
      title: "Databricks Certified Data Engineer",
      issuer: "Databricks",
      date: "March 2023",
      details: [
        "Data pipeline development",
        "ETL processes",
        "Distributed computing",
        "Performance optimization"
      ],
      icon: "💾",
      credentialUrl:
        "https://credentials.databricks.com/6bec6b0c-d965-4111-ad18-416b5fbcbb70"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "January 2024",
      details: [
        "Cloud architecture design",
        "High-availability deployments",
        "Security best practices",
        "Cost optimization strategies"
      ],
      icon: "☁️",
      credentialUrl: "https://www.credly.com/badges/example-aws-architect"
    }
  ];
};
export const getPersonalProjects = (): PersonalProject[] => {
  return [
    {
      title: "Markdown To PDF Generator",
      description: "Online app to generate pdf from your markdown.",
      technologies: ["Solidjs", "Frontend", "markdown", "pdf"],
      image: "/projects/markdown_to_pdf_Project.png",
      demoUrl: "https://projects.aadityachapagain.com/md_to_pdf",
      highlights: [
        "Implemented custom markdown to pdf converter using remark",
        "Several theme of pdf can be generated",
        "can process markdown file"
      ]
    },
    {
      title: "Online Code Editor",
      description: "Interactive Online code editor with autocomplete",
      technologies: ["typesript", "solidjs", "Express"],
      image: "/projects/code_editor_Project.png", // Replace with actual image path
      demoUrl: "https://projects.aadityachapagain.com/code_editor",
      highlights: [
        "Responsive and draggable code editor",
        "code autcomplete for js, python, rust"
      ]
    },
    {
      title: "Financial Calculator",
      description: "Visual tool to estimate your investment on various sectors and analyzing loans to better manage your financial",
      technologies: ["typesript", "solidjs", "Express"],
      image: "/projects/financial_calculator_Project.png", // Replace with actual image path
      demoUrl: "https://projects.aadityachapagain.com/financial_calculator",
      highlights: [
        "Generate charts of of future Financial status on varoius Terms",
        "Compare various Investments and Loans scheme with different variables"
      ]
    },
    {
      title: "Loan Optimizer",
      description: "Tool to help you decide how to optimize your loan structure to make your life easy",
      technologies: ["typesript", "solidjs", "Express"],
      image: "/projects/loan_optimizer_Project.png", // Replace with actual image path
      demoUrl: "https://projects.aadityachapagain.com/loan_optimizer",
      highlights: [
        "Help you with your loans, if you have any to make impactful decisions"
      ]
    }
  ];
};
