import FormButton from "./FormButton";
import React, { Context, useContext } from "react";
import { Input } from "@nextui-org/react";
import { ResumeContext } from "@/app/page";
import { GlobalResumeContext } from "@/types/global-resume-context";


const Education = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);
  const handleEducation = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newEducation = [...resumeData.education];
    switch (e.target.name) {
      case "school":
        newEducation[index].school = e.target.value;
        break;
      case "degree":
        newEducation[index].degree = e.target.value;
        break;
      case "startYear":
        newEducation[index].startYear = e.target.value;
        break;
      case "endYear":
        newEducation[index].endYear = e.target.value;
        break;
    }
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { school: "", degree: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeEducation = (index: any) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = newEducation[newEducation.length - 1];
    newEducation.pop();
    setResumeData({ ...resumeData, education: newEducation });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="font-bold">Education</h2>
      {resumeData.education.map((education: any, index: any) => (
        <div key={index} className="flex-col-gap-2">
          <Input
            variant="bordered"
            type="text"
            placeholder="School"
            name="school"
            className="w-full"
            label="School"
            value={education.school}
            onChange={(e) => handleEducation(e, index)} />
          <Input
            type="text"
            variant="bordered"
            placeholder="Degree"
            label="Degree"
            name="degree"
            className="w-full"
            value={education.degree}
            onChange={(e) => handleEducation(e, index)} />
          <div className="grid grid-cols-2 gap-1">
            <Input
              type="date"
              variant="bordered"
              placeholder="Start Year"
              label="Start Year"
              name="startYear"
              value={education.startYear}
              onChange={(e) => handleEducation(e, index)} />
            <Input
              type="date"
              variant="bordered"
              placeholder="End Year"
              label="End Year"
              name="endYear"
              value={education.endYear}
              onChange={(e) => handleEducation(e, index)} />
          </div>
        </div>
      ))}
      <FormButton size={resumeData.education.length} add={addEducation} remove={removeEducation} />
    </div>
  )
}

export default Education;