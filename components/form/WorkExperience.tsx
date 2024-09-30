import FormButton from "./FormButton";
import React, { useContext } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const WorkExperience = () => {
  const {
    resumeData,
    setResumeData,
  } = useContext<GlobalResumeContext>(ResumeContext);

  const handleWorkExperience = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newworkExperience = [...resumeData.workExperience];
    switch (e.target.name) {
      case "company":
        newworkExperience[index].company = e.target.value;
        break;
      case "position":
        newworkExperience[index].position = e.target.value;
        break;
      case "description":
        newworkExperience[index].description = e.target.value;
        break;
      case "keyAchievements":
        newworkExperience[index].keyAchievements = e.target.value;
        break;
      case "startYear":
        newworkExperience[index].startYear = e.target.value;
        break;
      case "endYear":
        newworkExperience[index].endYear = e.target.value;
        break;
    }
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeWorkExperience = (index: number) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
    newworkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="font-bold">Work Experience</h2>
      {resumeData.workExperience.map((workExperience, index) => (
        <div key={index} className="flex-col-gap-2">
          <Input
            type="text"
            variant="bordered"
            placeholder="Company"
            label="Company"
            name="company"
            className="w-full"
            value={workExperience.company}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <Input
            variant="bordered"
            type="text"
            placeholder="Job Title"
            label="Job Title"
            name="position"
            className="w-full"
            value={workExperience.position}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <Textarea
            type="text"
            variant="bordered"
            placeholder="Description"
            label="Description"
            name="description"
            value={workExperience.description}
            maxLength={250}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <Textarea
            variant="bordered"
            type="text"
            placeholder="Key Achievements"
            label="Key Achievements"
            name="keyAchievements"
            value={workExperience.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <div className="grid grid-cols-2 gap-1">
            <Input
              variant="bordered"
              type="date"
              placeholder="Start Year"
              label="Start Year"
              name="startYear"
              value={workExperience.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <Input
              variant="bordered"
              type="date"
              placeholder="End Year"
              label="End Year"
              name="endYear"
              value={workExperience.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.workExperience.length}
        add={addWorkExperience}
        remove={removeWorkExperience}
      />
    </div>
  );
};

export default WorkExperience;
