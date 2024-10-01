import React, { useContext } from "react";
import FormButton from "./FormButton";
import { Input } from "@nextui-org/react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const Language = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);
  const skillType = "languages";
  const title = "Languages";
  const placeholder = "Language";

  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>, index: number, skillType: any) => {
    const newSkills = [...resumeData.languages];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeSkill = (index: number) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="font-bold">{title}</h2>
      {resumeData[skillType].map((skill: any, index: number) => (

        <Input
          key={index}
          type="text"
          placeholder={placeholder}
          name="skill"
          variant="bordered"
          value={skill}
          onChange={(e) => handleSkills(e, index, skillType)}
        />

      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
    </div>
  );
};

export default Language;