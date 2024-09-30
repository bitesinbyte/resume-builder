"use client";

import React, { useState, createContext, useContext } from "react";
import Language from "../form/Language";
import Meta from "../meta/Meta";
import FormCP from "../form/FormCP";
import LoadUnload from "../form/LoadUnload";
import Preview from "../preview/Preview";
import { DefaultResumeData } from "@/config/default-resume-data";
import SocialMedia from "../form/SocialMedia";
import WorkExperience from "../form/WorkExperience";
import Skill from "../form/Skill";
import PersonalInformation from "../form/PersonalInformation";
import Summary from "../form/Summary";
import Projects from "../form/Projects";
import Education from "../form/Education";
import dynamic from "next/dynamic";
import Certification from "../form/certification";
import { WinPrint } from "./WinPrint";

const ResumeContext = createContext(DefaultResumeData);

export default function Builder({ props }: { props: any }) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e: any) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e: any) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
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
          <Preview />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <WinPrint />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
