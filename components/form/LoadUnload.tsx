import { Upload, Download } from "lucide-react";
import React, { useContext } from "react";
import { GlobalResumeContext, ResumeContext } from "@/types/global-resume-context";
import { Resume } from "@/types/resume";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext<GlobalResumeContext>(ResumeContext);

  const handleLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event?.target?.result) return;
      const data = JSON.parse(event.target.result as string) as Resume;
      setResumeData(data);
    };
    reader.readAsText(file);
  };

  const handleDownload = (data: Resume, filename: string, event: React.MouseEvent) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <label className="btn-outline cursor-pointer gap-2">
        <Upload className="h-4 w-4" />
        <span>Load Data</span>
        <input
          aria-label="Load Data"
          className="hidden"
          type="file"
          onChange={handleLoad}
          accept=".json"
        />
      </label>
      <button
        aria-label="Save Data"
        className="btn-outline gap-2"
        onClick={(event) =>
          handleDownload(resumeData, resumeData.name + ".json", event)
        }
      >
        <Download className="h-4 w-4" />
        Save Data
      </button>
    </div>
  );
};

export default LoadUnload;
