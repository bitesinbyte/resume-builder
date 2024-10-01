import { GlobalResumeContext } from "@/types/global-resume-context";
import { Resume } from "@/types/resume";


export const DefaultResumeData:Resume = {
  name: "ALEXANDRA EVANS",
  position: "Software Engineer",
  contactInformation: "+1-555-1234",
  email: "alex.evans@example.com",
  address: "Austin, TX",
  profilePicture: "",
  socialMedia: [
    {
      socialMedia: "Github",
      link: "github.com/alex-evans",
    },
    {
      socialMedia: "LinkedIn",
      link: "linkedin.com/in/alex-evans-tech",
    },
    {
      socialMedia: "Website",
      link: "alexevans.dev",
    },
  ],
  summary: "Innovative Software Engineer with 8 years of experience in building scalable web applications and optimizing user experiences. Passionate about solving complex problems and enhancing product performance using modern technologies.",
  education: [
    {
      school: "University of Texas at Austin",
      degree: "Bachelor of Science in Computer Engineering",
      startYear: "2014-09-01",
      endYear: "2018-06-15"
    },
  ],
  workExperience: [
    {
      company: "CloudTech Solutions",
      position: "Senior Software Engineer",
      description: "CloudTech Solutions is a cloud computing company specializing in enterprise solutions, helping businesses scale their digital infrastructure.",
      keyAchievements: "Designed and implemented a microservices-based architecture that reduced server costs by 25%.\nLed a team of 7 developers to build a highly available cloud platform.\nDecreased page load time by 40% through performance optimizations.\nDeveloped a CI/CD pipeline that improved deployment efficiency by 50%.\nMentored junior engineers and improved their productivity by 30%.",
      startYear: "2019-04-10",
      endYear: "2023-09-30"
    },
    {
      company: "BlueSky Technologies",
      position: "Front-End Engineer",
      description: "BlueSky Technologies is a tech firm focused on creating web applications for the retail industry.",
      keyAchievements: "Increased customer engagement by 20% with UI/UX improvements.\nDeveloped and delivered 25+ client-facing web applications.\nMigrated legacy code to modern JavaScript frameworks, improving maintainability by 60%.\nCollaborated with cross-functional teams to meet project deadlines ahead of schedule.",
      startYear: "2018-07-15",
      endYear: "2019-03-20"
    },
    {
      company: "NexaSoft",
      position: "Software Developer Intern",
      description: "NexaSoft is a startup offering software solutions for e-commerce platforms.",
      keyAchievements: "Contributed to the development of an internal tool that reduced manual work by 30%.\nOptimized database queries, improving the application's overall performance by 15%.\nWorked closely with the product team to deliver features aligned with client expectations.",
      startYear: "2017-06-01",
      endYear: "2017-08-30"
    }
  ],
  projects: [],
  skills: [
    {
      title: "Technical Skills",
      skills: [
        "JavaScript", "Python", "React", "Node.js", "HTML5", "CSS3", "TypeScript", "SQL", "AWS"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Leadership", "Problem-solving", "Teamwork", "Adaptability", "Critical thinking"
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        "Technical Writing", "Agile Methodologies", "Public Speaking"
      ]
    }
  ],
  languages: [
    "English",
    "Spanish",
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Certified ScrumMaster",
  ],
};

export const DefaultResumeContextData:GlobalResumeContext={
  resumeData: DefaultResumeData,
  setResumeData: (data: Resume) => {},
  handleProfilePicture: (e: any) => {},
  handleChange: (e: any) => {},
};