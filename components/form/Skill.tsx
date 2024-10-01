import React, { useContext } from "react";
import FormButton from "./FormButton";
import { Input } from "@nextui-org/react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";
import { Resume, Skill as SkillType } from "@/types/resume";

const Skill = ({ title }: { title: string }) => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  // skills
  const handleSkill = (e: React.ChangeEvent<HTMLInputElement>, index: number, title: string) => {
    let data = resumeData.skills.find((skillType) => skillType.title === title)?.skills;
    if (!data) return;
    const newSkills = [
      ...data,
    ];
    newSkills[index] = e.target.value;
    setResumeData((prevData: Resume) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      )
    }));
  };

  const addSkill = (title: string) => {
    setResumeData((prevData: Resume) => {
      const skillType = prevData.skills.find(
        (skillType: SkillType) => skillType.title === title
      );
      if (!skillType) return;
      const newSkills = [...skillType.skills, ""];
      const updatedSkills = prevData.skills.map((skill: SkillType) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const removeSkill = (title: string) => {
    setResumeData((prevData: Resume) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      if (!skillType) return;
      const newSkills = [...skillType.skills];
      newSkills.pop();
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="flex-col-gap-2">
      <h2 className="font-bold">{title}</h2>
      {skillType && skillType.skills.map((skill, index) => (
        <Input
          key={index}
          type="text"
          variant="bordered"
          placeholder={title}
          name={title}
          value={skill}
          onChange={(e) => handleSkill(e, index, title)}
        />
      ))}
      <FormButton
        size={skillType?.skills.length}
        add={() => addSkill(title)}
        remove={() => removeSkill(title)}
      />
    </div>
  );
};

export default Skill;
