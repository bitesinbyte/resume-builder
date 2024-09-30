import React, { FocusEventHandler, useContext } from "react";
import { ResumeContext } from "@/app/page";
import { GlobalResumeContext } from "@/types/global-resume-context";
import { Skill } from "@/types/resume";


const Skills = ({ title, skills }: { title: string, skills: string[] }) => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleTitleChange = (e: any) => {
    const newSkills = [...resumeData.skills];

    let data = newSkills.find((skillType) => skillType.title === title);
    if (!data) return;

    data.title = e.target.innerText;
    setResumeData({ ...resumeData, skills: newSkills });
  };

  return (
    skills.length > 0 ?
      <>
        <h2 className="section-title mb-1 border-b-2 border-gray-300 editable" contentEditable suppressContentEditableWarning onBlur={handleTitleChange}>
          {title}
        </h2>
        <p className="sub-content">{skills.join(", ")}</p>
      </>
      : <></>
  );
};

export default Skills;