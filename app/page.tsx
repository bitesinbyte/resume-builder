"use client";
import React, { createContext, useRef, useState } from "react";
import { DefaultResumeContextData, DefaultResumeData } from "@/config/default-resume-data";
import Language from "@/components/form/Language";
import Preview from "@/components/preview/Preview";
import FormCP from "@/components/form/FormCP";
import PersonalInformation from "@/components/form/PersonalInformation";
import LoadUnload from "@/components/form/LoadUnload";
import SocialMedia from "@/components/form/SocialMedia";
import Summary from "@/components/form/Summary";
import Education from "@/components/form/Education";
import WorkExperience from "@/components/form/WorkExperience";
import Projects from "@/components/form/Projects";
import Skill from "@/components/form/Skill";
import Certification from "@/components/form/certification";
import { WinPrint } from "@/components/shared/WinPrint";
import { Resume } from "@/types/resume";
import { GlobalResumeContext } from "@/types/global-resume-context";
import { useReactToPrint } from "react-to-print";

export const ResumeContext = createContext<GlobalResumeContext>(DefaultResumeContextData);

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });
  // resume data
  const [resumeData, setResumeData] = useState<Resume>(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e: any) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setResumeData({ ...resumeData, profilePicture: String(event.target.result) });
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e: any) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };
  return (
    <section className="flex flex-col items-center justify-center md:py-10">
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          {!formClose && (
            <form className="p-4 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
              <LoadUnload />
              <PersonalInformation />
              <SocialMedia />
              <Summary />
              <Education />
              <WorkExperience />
              <Projects />
              {
                resumeData.skills.map((skill: any, index: any) => (
                  <Skill
                    title={skill.title}
                    key={index}
                  />
                ))
              }
              <Language />
              <Certification />
            </form>
          )}
          <div className="md:max-w-[60%] sticky top-0 preview rm-padding-print p-6 md:overflow-y-scroll md:h-screen" ref={contentRef}>
            <Preview />
          </div>
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <WinPrint handlePrint={handlePrint} />
      </ResumeContext.Provider>
    </section>
  );
};

