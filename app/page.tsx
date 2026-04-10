"use client";
import React, { useRef, useState } from "react";
import { useResumeStorage } from "@/hooks/useResumeStorage";
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
import { useReactToPrint } from "react-to-print";
import { ResumeContext } from "@/types/global-resume-context";
import { Skill as SkillType } from "@/types/resume";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });
  const [resumeData, setResumeData] = useResumeStorage();
  const [formClose, setFormClose] = useState(false);

  const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:h-[calc(100vh-3.5rem-3rem)]">
          {!formClose && (
            <form className="exclude-print md:w-[40%] md:h-full md:overflow-y-auto space-y-6 rounded-xl border bg-card p-5">
              <LoadUnload />
              <PersonalInformation />
              <SocialMedia />
              <Summary />
              <Education />
              <WorkExperience />
              <Projects />
              {resumeData.skills.map((skill: SkillType, index: number) => (
                <Skill title={skill.title} key={index} />
              ))}
              <Language />
              <Certification />
            </form>
          )}
          <div
            className={`${formClose ? "w-full" : "md:w-[60%]"} sticky top-[4.5rem] preview rm-padding-print md:overflow-y-auto md:h-[calc(100vh-3.5rem-3rem)] rounded-xl border bg-card p-6`}
            ref={contentRef}
          >
            <Preview />
          </div>
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <WinPrint handlePrint={handlePrint} />
      </ResumeContext.Provider>
    </section>
  );
}
