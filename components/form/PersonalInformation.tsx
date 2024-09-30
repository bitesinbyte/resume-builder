import React, { useContext } from "react";
import { ResumeContext } from "../shared/builder";
import { Input } from "@nextui-org/react";
import { Logo } from "@/icons/logo";
import { FaCloudUploadAlt } from "react-icons/fa";
const PersonalInformation = ({ }) => {
  const { resumeData, setResumeData, handleProfilePicture, handleChange } =
    useContext(ResumeContext);

  return (
    <div>
      <h2 className="font-bold">Personal Information</h2>
      <div className="grid grid-cols-2 gap-2">
        <Input
          variant="bordered"
          type="text"
          placeholder="Full Name"
          label="Full Name"
          name="name"
          value={resumeData.name}
          onChange={handleChange}
        />
        <Input
          variant="bordered"
          type="text"
          placeholder="Job Title"
          label="Job Title"
          name="position"
          value={resumeData.position}
          onChange={handleChange}
        />
        <Input
          variant="bordered"
          type="text"
          placeholder="Contact Information"
          label="Contact Information"
          name="contactInformation"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength={10}
          maxLength={15}
        />
        <Input
          variant="bordered"
          type="email"
          placeholder="Email"
          label="Email"
          name="email"
          value={resumeData.email}
          onChange={handleChange}
        />
        <Input
          variant="bordered"
          type="text"
          placeholder="Address"
          label="Address"
          name="address"
          value={resumeData.address}
          onChange={handleChange}
        />
        <label className="flex gap-2 items-center border-solid border-2 border-gray-300 dark:border-slate-500 cursor-pointer p-2 rounded-lg">
          <h2 className="text-small">Profile Picture</h2>
          <FaCloudUploadAlt className="text-[1.2rem]" />
          <Input
            aria-label="Profile Picture"
            label="Profile Picture"
            name="profileImage"
            className="hidden"
            type="file"
            onChange={handleProfilePicture}
            accept="image/*"
          />
        </label>
      </div>
    </div >
  );
};

export default PersonalInformation;
