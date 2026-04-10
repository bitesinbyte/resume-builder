import FormButton from "./FormButton";
import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleSocialMedia = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newSocialMedia = [...resumeData.socialMedia];
    switch (e.target.name) {
      case "socialMedia":
        newSocialMedia[index].socialMedia = e.target.value;
        break;
      case "link":
        newSocialMedia[index].link = e.target.value.replace("https://", "");
        break;
    }
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = () => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia.pop();
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">Social Media</h2>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <div key={index} className="flex gap-3">
          <input
            type="text"
            placeholder="Platform"
            name="socialMedia"
            className="form-input w-[35%]"
            value={socialMedia.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className="form-input flex-1"
            value={socialMedia.link}
            onChange={(e) => handleSocialMedia(e, index)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={addSocialMedia}
        remove={removeSocialMedia}
      />
    </div>
  );
};

export default SocialMedia;
