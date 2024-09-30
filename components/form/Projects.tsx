import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../shared/builder";
import { Input, Textarea } from "@nextui-org/react";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = newProjects[newProjects.length - 1];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div>
      <h2 className="font-bold">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="flex-col-gap-2">
          <Input
            variant="bordered"
            type="text"
            placeholder="Project Name"
            label="Project Name"
            name="name"
            value={project.name}
            onChange={(e) => handleProjects(e, index)}
          />
          <Input
            variant="bordered"
            type="text"
            placeholder="Link"
            name="link"
            value={project.link}
            onChange={(e) => handleProjects(e, index)}
          />
          <Textarea
            type="text"
            placeholder="Description"
            label="Description"
            name="description"
            value={project.description}
            maxLength={250}
            onChange={(e) => handleProjects(e, index)}
          />
          <Textarea
            variant="bordered"
            type="text"
            placeholder="Key Achievements"
            label="Key Achievements"
            name="keyAchievements"
            value={project.keyAchievements}
            onChange={(e) => handleProjects(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <Input
              variant="bordered"
              type="date"
              placeholder="Start Year"
              label="Start Year"
              name="startYear"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
            />
            <Input
              variant="bordered"
              type="date"
              placeholder="End Year"
              label="End Year"
              name="endYear"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
            />
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
