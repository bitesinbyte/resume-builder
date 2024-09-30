import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "@/app/page";
import { Input, Textarea } from "@nextui-org/react";
import { GlobalResumeContext } from "@/types/global-resume-context";

const Projects = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleProjects = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
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

  const removeProjects = (index: number) => {
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
          <div className="grid grid-cols-2 gap-1">
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
