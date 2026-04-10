import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";

const Summary = () => {
  const { resumeData, handleChange } = useContext<GlobalResumeContext>(ResumeContext);

  return (
    <div className="space-y-3">
      <h2 className="form-section-title">Summary</h2>
      <textarea
        placeholder="Write a brief professional summary..."
        name="summary"
        value={resumeData.summary}
        onChange={handleChange}
        maxLength={500}
        className="form-textarea"
        rows={4}
      />
    </div>
  );
};

export default Summary;
