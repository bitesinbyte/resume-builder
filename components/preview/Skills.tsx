import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const Skills = ({ title, skills }: { title: string; skills: string[] }) => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleTitleChange = (e: React.FocusEvent<HTMLHeadingElement>) => {
    const newSkills = [...resumeData.skills];
    const data = newSkills.find((skillType) => skillType.title === title);
    if (!data) return;
    data.title = e.target.innerText;
    setResumeData({ ...resumeData, skills: newSkills });
  };

  return skills.length > 0 ? (
    <>
      <h2
        className="section-title mb-1 border-b-2 border-border editable"
        contentEditable
        suppressContentEditableWarning
        onBlur={handleTitleChange}
      >
        {title}
      </h2>
      <p className="sub-content">{skills.join(", ")}</p>
    </>
  ) : (
    <></>
  );
};

export default Skills;
