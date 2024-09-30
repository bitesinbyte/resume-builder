import React, { useContext } from "react";
import { ResumeContext } from "@/app/page";

import { Textarea } from "@nextui-org/react";
import { GlobalResumeContext } from "@/types/global-resume-context";
const Summary = () => {
  const { resumeData, handleChange } = useContext<GlobalResumeContext>(ResumeContext);
  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Summary</h2>
      <div className="grid-4">
        <Textarea
          placeholder="Summary"
          name="summary"
          className="w-full h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength={500}
        />
      </div>
    </div>
  );
};

export default Summary;
