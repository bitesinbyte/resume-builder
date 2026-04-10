import FormButton from "./FormButton";
import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const Projects = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleProjects = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const newProjects = [...resumeData.projects];
    switch (e.target.name) {
      case "name":
        newProjects[index].name = e.target.value;
        break;
      case "link":
        newProjects[index].link = e.target.value;
        break;
      case "description":
        newProjects[index].description = e.target.value;
        break;
      case "keyAchievements":
        newProjects[index].keyAchievements = e.target.value;
        break;
      case "startYear":
        newProjects[index].startYear = e.target.value;
        break;
      case "endYear":
        newProjects[index].endYear = e.target.value;
        break;
    }
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          name: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = () => {
    const newProjects = [...resumeData.projects];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="space-y-3 rounded-lg border border-border/50 bg-muted/30 p-4">
          <div className="space-y-1.5">
            <label className="form-label">Project Name</label>
            <input
              type="text"
              placeholder="Project Name"
              name="name"
              className="form-input"
              value={project.name}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="form-label">Link</label>
            <input
              type="text"
              placeholder="Link"
              name="link"
              className="form-input"
              value={project.link}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="form-label">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              className="form-textarea"
              value={project.description}
              maxLength={250}
              onChange={(e) => handleProjects(e, index)}
              rows={3}
            />
          </div>
          <div className="space-y-1.5">
            <label className="form-label">Key Achievements</label>
            <textarea
              placeholder="Key Achievements (one per line)"
              name="keyAchievements"
              className="form-textarea"
              value={project.keyAchievements}
              onChange={(e) => handleProjects(e, index)}
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
                value={project.startYear}
                onChange={(e) => handleProjects(e, index)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="form-label">End Date</label>
              <input
                type="date"
                name="endYear"
                className="form-input"
                value={project.endYear}
                onChange={(e) => handleProjects(e, index)}
              />
            </div>
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.projects.length}
        add={addProjects}
        remove={removeProjects}
      />
    </div>
  );
};

export default Projects;
