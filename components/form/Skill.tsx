import React, { useContext } from "react";
import { ResumeContext } from "../shared/builder";
import FormButton from "./FormButton";
import { Input } from "@nextui-org/react";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // skills
  const handleSkill = (e, index, title) => {
    const newSkills = [
      ...resumeData.skills.find((skillType) => skillType.title === title)
        .skills,
    ];
    newSkills[index] = e.target.value;
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const addSkill = (title) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills, ""];
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const removeSkill = (title, index) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
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
      {skillType.skills.map((skill, index) => (
        <Input
          key={index}
          type="text"
          placeholder={title}
          name={title}
          value={skill}
          onChange={(e) => handleSkill(e, index, title)}
        />
      ))}
      <FormButton
        size={skillType.skills.length}
        add={() => addSkill(title)}
        remove={() => removeSkill(title)}
      />
    </div>
  );
};

export default Skill;
