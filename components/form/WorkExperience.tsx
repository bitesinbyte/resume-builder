import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../shared/builder";
import { Input, Textarea } from "@nextui-org/react";

const WorkExperience = () => {
  const {
    resumeData,
    setResumeData,
  } = useContext(ResumeContext);

  const handleWorkExperience = (e, index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index][e.target.name] = e.target.value;
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

  const removeWorkExperience = (index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
    newworkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  return (
    <div>
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
          <div className="flex-wrap-gap-2">
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
