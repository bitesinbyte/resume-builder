import FormButton from "./FormButton";
import React, { useContext } from "react";
import { Input } from "@nextui-org/react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  // social media
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

  const removeSocialMedia = (index: number) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
    newSocialMedia.pop();
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="font-bold">Social Media</h2>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <div key={index} className="flex gap-2">
          <Input
            variant="bordered"
            type="text"
            placeholder="Social Media"
            name="socialMedia"
            className="w-[30%]"
            value={socialMedia.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
          />
          <Input
            variant="bordered"
            type="text"
            placeholder="Link"
            name="link"
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
