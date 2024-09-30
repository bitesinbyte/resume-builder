import React, { useContext } from "react";
import FormButton from "./FormButton";
import { Input } from "@nextui-org/react";
import { ResumeContext } from "@/app/page";
import { GlobalResumeContext } from "@/types/global-resume-context";

const Certification = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);
  const skillType = "certifications";
  const title = "Certifications";

  const handleSkills = (e: any, index: number, skillType: string) => {
    const newSkills = [...resumeData.certifications];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeSkill = (index: any) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="font-bold">{title}</h2>
      {resumeData[skillType].map((skill: any, index: any) => (
        <Input
          type="text"
          key={index}
          placeholder={title}
          name={title}
          value={skill}
          onChange={(e) => handleSkills(e, index, skillType)}
        />
      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
    </div>
  );
};

export default Certification;