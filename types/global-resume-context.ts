import { createContext } from "react";
import { Resume } from "./resume";
import { DefaultResumeContextData } from "@/config/default-resume-data";
export const ResumeContext = createContext<GlobalResumeContext>(DefaultResumeContextData);
export type GlobalResumeContext = {
    resumeData :Resume,
    setResumeData: any,
    handleProfilePicture: any,
    handleChange: any
};