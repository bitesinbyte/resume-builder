export type Resume ={
    name: string;
    position: string;
    contactInformation: string;
    email: string;
    address: string;
    profilePicture?: string;
    socialMedia: Social[];
    languages: string[];
    certifications: string[];
    workExperience: Experience[];
    education: Education[];
    skills: Skill[];
    projects: Project[];
    summary: string;
};
export type Experience = {
    company: string;
    position: string;
    description: string;
    keyAchievements: string;
    startYear: string;
    endYear: string;
};
export type Education = {
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
};
export type Skill = {
    title: string;
    skills: string[];
};
export type Project = {
    name: string;
    link: string;
    description: string;
    keyAchievements: string;
    startYear: string;
    endYear: string;
};
export type Social = {
    socialMedia: string;
    link: string;
};