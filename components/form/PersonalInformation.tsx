import React, { useContext } from "react";
import { Upload } from "lucide-react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const PersonalInformation = () => {
  const { resumeData, handleProfilePicture, handleChange } =
    useContext<GlobalResumeContext>(ResumeContext);

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">Personal Information</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={resumeData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="space-y-1.5">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            placeholder="Job Title"
            name="position"
            value={resumeData.position}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="space-y-1.5">
          <label className="form-label">Phone</label>
          <input
            type="text"
            placeholder="Contact Information"
            name="contactInformation"
            value={resumeData.contactInformation}
            onChange={handleChange}
            minLength={10}
            maxLength={15}
            className="form-input"
          />
        </div>
        <div className="space-y-1.5">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={resumeData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="space-y-1.5">
          <label className="form-label">Address</label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={resumeData.address}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="space-y-1.5">
          <label className="form-label">Profile Picture</label>
          <label className="flex items-center gap-2 cursor-pointer rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
            <Upload className="h-4 w-4" />
            <span>Upload photo</span>
            <input
              aria-label="Profile Picture"
              name="profileImage"
              className="hidden"
              type="file"
              onChange={handleProfilePicture}
              accept="image/*"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
