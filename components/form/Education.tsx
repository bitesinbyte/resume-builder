import FormButton from "./FormButton";
import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";
import { Education as EducationType } from "@/types/resume";

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

  const removeEducation = () => {
    const newEducation = [...resumeData.education];
    newEducation.pop();
    setResumeData({ ...resumeData, education: newEducation });
  };

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">Education</h2>
      {resumeData.education.map((education: EducationType, index: number) => (
        <div key={index} className="space-y-3 rounded-lg border border-border/50 bg-muted/30 p-4">
          <div className="space-y-1.5">
            <label className="form-label">School</label>
            <input
              type="text"
              placeholder="School"
              name="school"
              className="form-input"
              value={education.school}
              onChange={(e) => handleEducation(e, index)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="form-label">Degree</label>
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              className="form-input"
              value={education.degree}
              onChange={(e) => handleEducation(e, index)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                name="startYear"
                className="form-input"
                value={education.startYear}
                onChange={(e) => handleEducation(e, index)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="form-label">End Date</label>
              <input
                type="date"
                name="endYear"
                className="form-input"
                value={education.endYear}
                onChange={(e) => handleEducation(e, index)}
              />
            </div>
          </div>
        </div>
      ))}
      <FormButton size={resumeData.education.length} add={addEducation} remove={removeEducation} />
    </div>
  );
};

export default Education;
