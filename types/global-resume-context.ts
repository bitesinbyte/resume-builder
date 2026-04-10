import { createContext } from "react";
import { Resume } from "./resume";
import { DefaultResumeContextData } from "@/config/default-resume-data";

export const ResumeContext = createContext<GlobalResumeContext>(DefaultResumeContextData);

export type GlobalResumeContext = {
    resumeData: Resume;
    setResumeData: React.Dispatch<React.SetStateAction<Resume>>;
    handleProfilePicture: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
