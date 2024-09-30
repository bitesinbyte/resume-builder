import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import React, { useContext } from "react";
import { ResumeContext } from "../shared/builder";
import { Button, Input } from "@nextui-org/react";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // load backup resume data
  const handleLoad = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event?.target?.result) return;

      const resumeData = JSON.parse(event.target.result as string);
      setResumeData(resumeData);
    };
    reader.readAsText(file);
  };

  // download resume data
  const handleDownload = (data: any, filename: any, event: any) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="flex flex-wrap gap-4 mb-2 justify-center">
      <label className="flex gap-2 items-center border-solid border-2 border-gray-300 dark:border-slate-500 cursor-pointer p-2 rounded-lg">
        <h2 className="text-small">Load Data</h2>
        <FaCloudUploadAlt className="text-[1.2rem]" />
        <Input
          aria-label="Load Data"
          label="Load Data"
          className="hidden"
          type="file"
          onChange={handleLoad}
          accept=".json"
        />
      </label>
      <Button
        aria-label="Save Data"
        variant="bordered"
        onClick={(event) =>
          handleDownload(
            resumeData,
            resumeData.name + ".json",
            event
          )
        }
        endContent={<FaCloudDownloadAlt className="text-[1.2rem]" />}
      >
        Save Data
      </Button>
    </div>

  );
};

export default LoadUnload;
