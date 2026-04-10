import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Bold,
  Italic,
  Underline,
  Plus,
  Minus,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Skills from "./Skills";
import DateRange from "@/components/shared/DateRange";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";
import dynamic from "next/dynamic";
import Language from "./Language";
import Certification from "./Certification";
import { HighlightMenu } from "react-highlight-menu";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";
import type { DropResult } from "@hello-pangea/dnd";

const DragDropContext = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.DragDropContext),
  { ssr: false }
);
const Droppable = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.Droppable),
  { ssr: false }
);
const Draggable = dynamic(
  () => import("@hello-pangea/dnd").then((mod) => mod.Draggable),
  { ssr: false }
);

const Preview = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const icons: { name: string; icon: React.ReactNode }[] = [
    { name: "github", icon: <Github className="h-3 w-3" /> },
    { name: "linkedin", icon: <Linkedin className="h-3 w-3" /> },
    { name: "twitter", icon: <Twitter className="h-3 w-3" /> },
    { name: "facebook", icon: <Facebook className="h-3 w-3" /> },
    { name: "instagram", icon: <Instagram className="h-3 w-3" /> },
    { name: "youtube", icon: <Youtube className="h-3 w-3" /> },
    { name: "website", icon: <Globe className="h-3 w-3" /> },
  ];

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (source.droppableId === "work-experience") {
      const newWorkExperience = [...resumeData.workExperience];
      const [removed] = newWorkExperience.splice(source.index, 1);
      newWorkExperience.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (source.droppableId.includes("WORK_EXPERIENCE_KEY_ACHIEVEMENT")) {
      const newWorkExperience = [...resumeData.workExperience];
      const workExperienceIndex = parseInt(source.droppableId.split("-")[1]);
      const keyAchievements =
        newWorkExperience[workExperienceIndex].keyAchievements.split("\n");
      const [removed] = keyAchievements.splice(source.index, 1);
      keyAchievements.splice(destination.index, 0, removed);
      newWorkExperience[workExperienceIndex].keyAchievements =
        keyAchievements.join("\n");
      setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (source.droppableId === "skills") {
      const newSkills = [...resumeData.skills];
      const [removed] = newSkills.splice(source.index, 1);
      newSkills.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, skills: newSkills });
    }

    if (source.droppableId.includes("projects")) {
      const newProjects = [...resumeData.projects];
      const [removed] = newProjects.splice(source.index, 1);
      newProjects.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, projects: newProjects });
    }

    if (source.droppableId.includes("PROJECTS_KEY_ACHIEVEMENT")) {
      const newProjects = [...resumeData.projects];
      const projectIndex = parseInt(source.droppableId.split("-")[1]);
      const keyAchievements =
        newProjects[projectIndex].keyAchievements.split("\n");
      const [removed] = keyAchievements.splice(source.index, 1);
      keyAchievements.splice(destination.index, 0, removed);
      newProjects[projectIndex].keyAchievements = keyAchievements.join("\n");
      setResumeData({ ...resumeData, projects: newProjects });
    }
  };

  const MenuButton = ({
    title,
    icon,
    onClick,
  }: {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      title={title}
      className="p-2 rounded-md font-semibold hover:bg-accent transition-colors"
    >
      {icon}
    </button>
  );

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const toggleBold = () => formatText("bold");
  const toggleItalic = () => formatText("italic");
  const toggleUnderline = () => formatText("underline");
  const changeFontSize = (size: string) => formatText("fontSize", size);
  const alignText = (alignment: string) => formatText(`justify${alignment}`);

  useKeyboardShortcut("b", true, toggleBold);
  useKeyboardShortcut("i", true, toggleItalic);
  useKeyboardShortcut("u", true, toggleUnderline);

  const A4PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const alertA4Size = () => {
      const preview: Element | null = document.querySelector(".preview");
      if (!preview) return;
      const previewHeight = preview.clientHeight;
      if (previewHeight > 1122) {
        alert("A4 size exceeded");
      }
    };

    return (
      <div className="w-8.5in" onLoad={alertA4Size}>
        {children}
      </div>
    );
  };

  return (
    <A4PageWrapper>
      <HighlightMenu
        styles={{
          borderColor: "hsl(var(--primary))",
          backgroundColor: "hsl(var(--primary))",
          boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.2)",
          zIndex: 10,
          borderRadius: "8px",
          padding: "4px",
        }}
        target="body"
        menu={() => (
          <>
            <MenuButton title="Bold (Ctrl+B)" icon={<Bold className="h-4 w-4" />} onClick={toggleBold} />
            <MenuButton title="Italic (Ctrl+I)" icon={<Italic className="h-4 w-4" />} onClick={toggleItalic} />
            <MenuButton title="Underline (Ctrl+U)" icon={<Underline className="h-4 w-4" />} onClick={toggleUnderline} />
            <MenuButton title="Increase Font Size" icon={<Plus className="h-4 w-4" />} onClick={() => changeFontSize("4")} />
            <MenuButton title="Decrease Font Size" icon={<Minus className="h-4 w-4" />} onClick={() => changeFontSize("2")} />
            <MenuButton title="Align Left" icon={<AlignLeft className="h-4 w-4" />} onClick={() => alignText("Left")} />
            <MenuButton title="Align Center" icon={<AlignCenter className="h-4 w-4" />} onClick={() => alignText("Center")} />
            <MenuButton title="Align Right" icon={<AlignRight className="h-4 w-4" />} onClick={() => alignText("Right")} />
          </>
        )}
        allowedPlacements={[]}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="f-col items-center mb-1">
          {resumeData && resumeData.profilePicture && resumeData.profilePicture.length > 0 && (
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border">
              <Image
                src={resumeData.profilePicture}
                alt="profile"
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
          )}
          <h1 className="name">{resumeData.name}</h1>
          <p className="profession">{resumeData.position}</p>
          <ContactInfo
            mainclass="flex flex-row gap-1 mb-1 contact"
            linkclass="inline-flex items-center gap-1"
            teldata={resumeData.contactInformation}
            emaildata={resumeData.email}
            addressdata={resumeData.address}
            telicon={<Phone className="h-3 w-3" />}
            emailicon={<Mail className="h-3 w-3" />}
            addressicon={<MapPin className="h-3 w-3" />}
          />
          <div className="grid grid-cols-3 gap-1">
            {resumeData.socialMedia.map((socialMedia, index) => {
              return (
                <a
                  href={`http://${socialMedia.link}`}
                  aria-label={socialMedia.socialMedia}
                  key={index}
                  title={socialMedia.socialMedia}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 social-media align-center justify-center"
                >
                  {icons.map((icon, iconIndex) => {
                    if (icon.name === socialMedia.socialMedia.toLowerCase()) {
                      return <span key={iconIndex}>{icon.icon}</span>;
                    }
                  })}
                  {socialMedia.link}
                </a>
              );
            })}
          </div>
        </div>
        <hr className="border-dashed border-border my-2" />
        {/* two column layout */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 space-y-2">
            {resumeData.summary.length > 0 && (
              <div className="mb-1">
                <h2 className="section-title mb-1 border-b-2 border-border">
                  Summary
                </h2>
                <p className="content break-words">{resumeData.summary}</p>
              </div>
            )}
            <div>
              {resumeData.education.length > 0 && (
                <div className="mb-1">
                  <h2 className="section-title mb-1 border-b-2 border-border">
                    Education
                  </h2>
                  {resumeData.education.map((item, index) => (
                    <div key={index} className="mb-1">
                      <p className="content i-bold">{item.degree}</p>
                      <p className="content">{item.school}</p>
                      <DateRange
                        startYear={item.startYear}
                        endYear={item.endYear}
                        id={`education-start-end-date`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Droppable droppableId="skills" type="SKILLS">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {resumeData.skills.map((skill, index) => (
                    <Draggable
                      key={`SKILLS-${index}`}
                      draggableId={`SKILLS-${index}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`mb-1 ${
                            snapshot.isDragging &&
                            "outline-dashed outline-2 outline-muted-foreground/50"
                          }`}
                        >
                          <Skills title={skill.title} skills={skill.skills} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Language title="Languages" languages={resumeData.languages} />
            <Certification
              title="Certifications"
              certifications={resumeData.certifications}
            />
          </div>

          <div className="col-span-2 space-y-2">
            {resumeData.workExperience.length > 0 && (
              <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h2
                      className="section-title mb-1 border-b-2 border-border editable"
                      contentEditable
                      suppressContentEditableWarning
                    >
                      Work Experience
                    </h2>
                    {resumeData.workExperience.map((item, index) => (
                      <Draggable
                        key={`${item.company}-${index}`}
                        draggableId={`WORK_EXPERIENCE-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-1 ${
                              snapshot.isDragging &&
                              "outline-dashed outline-2 outline-muted-foreground/50"
                            }`}
                          >
                            <div className="flex flex-row justify-between space-y-1">
                              <p className="content i-bold">{item.company}</p>
                              <DateRange
                                startYear={item.startYear}
                                endYear={item.endYear}
                                id={`work-experience-start-end-date`}
                              />
                            </div>
                            <p className="content">{item.position}</p>
                            <p className="content hyphens-auto">
                              {item.description}
                            </p>
                            <Droppable
                              droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                              type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                            >
                              {(provided) => (
                                <ul
                                  className="list-disc ul-padding content"
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                >
                                  {typeof item.keyAchievements === "string" &&
                                    item.keyAchievements
                                      .split("\n")
                                      .map((achievement, subIndex) => (
                                        <Draggable
                                          key={`${item.company}-${index}-${subIndex}`}
                                          draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                          index={subIndex}
                                        >
                                          {(provided, snapshot) => (
                                            <li
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              className={`
                                          hover:outline-dashed hover:outline-2
                                          ${
                                            snapshot.isDragging &&
                                            "outline-dashed outline-2 outline-muted-foreground/50"
                                          }`}
                                            >
                                              <div
                                                dangerouslySetInnerHTML={{
                                                  __html: achievement,
                                                }}
                                                contentEditable
                                              />
                                            </li>
                                          )}
                                        </Draggable>
                                      ))}
                                  {provided.placeholder}
                                </ul>
                              )}
                            </Droppable>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
            {resumeData.projects.length > 0 && (
              <Droppable droppableId="projects" type="PROJECTS">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h2
                      className="section-title mb-1 border-b-2 border-border editable"
                      contentEditable
                      suppressContentEditableWarning
                    >
                      Projects
                    </h2>
                    {resumeData.projects.map((item, index) => (
                      <Draggable
                        key={`${item.name}-${index}`}
                        draggableId={`PROJECTS-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-1 ${
                              snapshot.isDragging &&
                              "outline-dashed outline-2 outline-muted-foreground/50"
                            }`}
                          >
                            <div className="flex flex-row justify-between space-y-1">
                              <p className="content i-bold">{item.name}</p>
                              <DateRange
                                startYear={item.startYear}
                                endYear={item.endYear}
                                id={`project-start-end-date`}
                              />
                            </div>
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="content text-foreground/70 hover:text-foreground transition-colors"
                            >
                              {item.link}
                            </Link>
                            <p className="content">{item.description}</p>
                            <Droppable
                              droppableId={`PROJECTS_KEY_ACHIEVEMENT-${index}`}
                              type="PROJECTS_KEY_ACHIEVEMENT"
                            >
                              {(provided) => (
                                <ul
                                  className="list-disc ul-padding content"
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                >
                                  {typeof item.keyAchievements === "string" &&
                                    item.keyAchievements
                                      .split("\n")
                                      .map((achievement, subIndex) => (
                                        <Draggable
                                          key={`${item.name}-${index}-${subIndex}`}
                                          draggableId={`PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                          index={subIndex}
                                        >
                                          {(provided, snapshot) => (
                                            <li
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              className={`
                                          hover:outline-dashed hover:outline-2
                                          ${
                                            snapshot.isDragging &&
                                            "outline-dashed outline-2 outline-muted-foreground/50"
                                          }`}
                                            >
                                              <div
                                                dangerouslySetInnerHTML={{
                                                  __html: achievement,
                                                }}
                                                contentEditable
                                              />
                                            </li>
                                          )}
                                        </Draggable>
                                      ))}
                                  {provided.placeholder}
                                </ul>
                              )}
                            </Droppable>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </div>
        </div>
      </DragDropContext>
    </A4PageWrapper>
  );
};
export default Preview;
