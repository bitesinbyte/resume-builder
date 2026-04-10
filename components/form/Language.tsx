import React, { useContext } from "react";
import FormButton from "./FormButton";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const Language = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);
  const skillType = "languages" as const;
  const title = "Languages";
  const placeholder = "Language";

  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newSkills = [...resumeData.languages];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeSkill = () => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">{title}</h2>
      {resumeData[skillType].map((skill: string, index: number) => (
        <input
          key={index}
          type="text"
          placeholder={placeholder}
          name="skill"
          className="form-input"
          value={skill}
          onChange={(e) => handleSkills(e, index)}
        />
      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
    </div>
  );
};

export default Language;
