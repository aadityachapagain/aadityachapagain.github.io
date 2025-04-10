// data/resumeData.ts
import { Experience } from "../components/resume/ExperienceSection";
import { SkillCategory } from "../components/resume/SkillsSection";
import { Education } from "../components/resume/EducationSection";
import { Certification } from "../components/resume/CertificationSection";

export const experienceData: Experience[] = [
  {
    position: "Data Engineer",
    company: "Cloud Shuttle",
    location: "Sydney, Australia",
    period: "Jan 2023 - Current"
  },
  {
    position: "Software Developer",
    company: "WebTec Solutions",
    location: "Canberra, Australia",
    period: "July 2022 - Jan 2023"
  },
  {
    position: "Machine Learning Engineer III",
    company: "Fusemachines Nepal",
    location: "Kathmandu, Nepal",
    period: "April 2019 - June 2022"
  },
  {
    position: "ML Intern",
    company: "Leapfrog Technology",
    location: "Kathmandu, Nepal",
    period: "Jan 2019 - March 2019"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Python Machine Learning tools",
    skills: "Keras, Pytorch, JIT, HuggingFace, Pandas, Scikit-Learn, Spacy"
  },
  {
    category: "Backend Technologies",
    skills: "FastAPI, Django, Golang"
  },
  {
    category: "Frontend Technologies",
    skills: "Nextjs, React, tailwindcss, Js"
  },
  {
    category: "Deep Learning Domain",
    skills:
      "Natural Language Processing, Computer Vision, Semi-Supervised Learning"
  },
  {
    category: "Databases",
    skills: "MySQL, Bigquery, DynamoDB, MongoDB, Postgres"
  },
  {
    category: "Devops Technologies",
    skills: "Docker, Github actions, terraform, aws-cdk"
  },
  {
    category: "Hobbyist technologies",
    skills: "Rustlang, Golang, DeepLearning"
  },
  {
    category: "Others",
    skills: "Jira, Git, Github"
  }
];

export const educationData: Education[] = [
  {
    degree: "Masters of Computer Science",
    institution: "University of Wollongong",
    location: "Wollongong, NSW, Australia",
    period: "July 2023 - Current"
  },
  {
    degree: "Bachelors of Electronics and Communication Engineering",
    institution: "Tribhuvan University Nepal",
    location: "Kathmandu, Nepal",
    period: "June 2014 - December 2018"
  },
  {
    degree: "Intermediates of Science (Biology Major)",
    institution: "Sainik Awasiya Mahavidyalaya, Bhaktapur, Nepal",
    location: "Bhaktapur, Nepal",
    period: "2012 - 2014"
  }
];

export const certificationData: Certification[] = [
  {
    name: "Natural Language Processing",
    links: [
      {
        url: "https://www.coursera.org/account/accomplishments/certificate/93Q9C9DEKG5C",
        display: "coursera.org/.../certificate/93Q9C9DEKG5C"
      },
      {
        url: "https://www.coursera.org/account/accomplishments/certificate/M69JGBDMTMWR",
        display: "coursera.org/.../certificate/M69JGBDMTMWR"
      },
      {
        url: "https://www.coursera.org/account/accomplishments/verify/AQR9YUCS4QPE",
        display: "coursera.org/.../verify/AQR9YUCS4QPE"
      }
    ]
  },
  {
    name: "Machine Learning and Deep Learning",
    links: [
      {
        url: "https://www.coursera.org/account/accomplishments/certificate/Z34F9TSHMAB9",
        display: "coursera.org/.../certificate/Z34F9TSHMAB9"
      },
      {
        url: "https://www.coursera.org/account/accomplishments/verify/WREGBKEZSPFB",
        display: "coursera.org/.../verify/WREGBKEZSPFB"
      },
      {
        url: "https://www.coursera.org/account/accomplishments/verify/YZAEL97XWQBP",
        display: "coursera.org/.../verify/YZAEL97XWQBP"
      }
    ]
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    links: [
      {
        url: "https://credentials.databricks.com/6bec6b0c-d965-4111-ad18-416b5fbcbb70",
        display:
          "credentials.databricks.com/6bec6b0c-d965-4111-ad18-416b5fbcbb70"
      }
    ]
  },
  {
    name: "TensorFlow Developer Certificate",
    links: [
      {
        url: "https://www.credential.net/8b27ce74-5170-45a3-a5c5-91e5d8b5940b",
        display: "credential.net/8b27ce74-5170-45a3-a5c5-91e5d8b5940b"
      }
    ]
  }
];
