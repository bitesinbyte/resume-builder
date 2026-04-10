import FormButton from "./FormButton";
import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const WorkExperience = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleWorkExperience = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
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

  const removeWorkExperience = () => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">Work Experience</h2>
      {resumeData.workExperience.map((workExperience, index) => (
        <div key={index} className="space-y-3 rounded-lg border border-border/50 bg-muted/30 p-4">
          <div className="space-y-1.5">
            <label className="form-label">Company</label>
            <input
              type="text"
              placeholder="Company"
              name="company"
              className="form-input"
              value={workExperience.company}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              name="position"
              className="form-input"
              value={workExperience.position}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="form-label">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              className="form-textarea"
              value={workExperience.description}
              maxLength={250}
              onChange={(e) => handleWorkExperience(e, index)}
              rows={3}
            />
          </div>
          <div className="space-y-1.5">
            <label className="form-label">Key Achievements</label>
            <textarea
              placeholder="Key Achievements (one per line)"
              name="keyAchievements"
              className="form-textarea"
              value={workExperience.keyAchievements}
              onChange={(e) => handleWorkExperience(e, index)}
              rows={4}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                name="startYear"
                className="form-input"
                value={workExperience.startYear}
                onChange={(e) => handleWorkExperience(e, index)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="form-label">End Date</label>
              <input
                type="date"
                name="endYear"
                className="form-input"
                value={workExperience.endYear}
                onChange={(e) => handleWorkExperience(e, index)}
              />
            </div>
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
