import React, { useContext } from "react";
import FormButton from "./FormButton";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const Certification = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);
  const skillType = "certifications" as const;
  const title = "Certifications";

  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newSkills = [...resumeData.certifications];
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
          type="text"
          key={index}
          placeholder={title}
          name={title}
          value={skill}
          className="form-input"
          onChange={(e) => handleSkills(e, index)}
        />
      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
    </div>
  );
};

export default Certification;
