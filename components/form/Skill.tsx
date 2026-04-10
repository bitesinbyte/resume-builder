import React, { useContext } from "react";
import FormButton from "./FormButton";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";
import { Resume, Skill as SkillType } from "@/types/resume";

const Skill = ({ title }: { title: string }) => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleSkill = (e: React.ChangeEvent<HTMLInputElement>, index: number, title: string) => {
    let data = resumeData.skills.find((skillType) => skillType.title === title)?.skills;
    if (!data) return;
    const newSkills = [...data];
    newSkills[index] = e.target.value;
    setResumeData((prevData: Resume) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const addSkill = (title: string) => {
    setResumeData((prevData: Resume) => {
      const skillType = prevData.skills.find(
        (skillType: SkillType) => skillType.title === title
      );
      if (!skillType) return prevData;
      const newSkills = [...skillType.skills, ""];
      const updatedSkills = prevData.skills.map((skill: SkillType) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return { ...prevData, skills: updatedSkills };
    });
  };

  const removeSkill = (title: string) => {
    setResumeData((prevData: Resume) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      if (!skillType) return prevData;
      const newSkills = [...skillType.skills];
      newSkills.pop();
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return { ...prevData, skills: updatedSkills };
    });
  };

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">{title}</h2>
      {skillType &&
        skillType.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            placeholder={title}
            name={title}
            value={skill}
            onChange={(e) => handleSkill(e, index, title)}
            className="form-input"
          />
        ))}
      <FormButton
        size={skillType?.skills.length ?? 0}
        add={() => addSkill(title)}
        remove={() => removeSkill(title)}
      />
    </div>
  );
};

export default Skill;
