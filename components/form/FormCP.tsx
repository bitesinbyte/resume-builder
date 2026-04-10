import { ChevronLeft, ChevronRight } from "lucide-react";

const FormCP = ({ formClose, setFormClose }: {
  formClose: boolean;
  setFormClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      aria-label={formClose ? "Open Form" : "Close Form"}
      title={formClose ? "Open Form" : "Close Form"}
      className="exclude-print fixed bottom-6 left-6 z-40
                 flex h-12 w-12 items-center justify-center
                 rounded-full bg-primary text-primary-foreground
                 shadow-lg transition-all hover:scale-110 hover:shadow-xl
                 border border-border/50"
      onClick={() => setFormClose(!formClose)}
    >
      {formClose ? (
        <ChevronRight className="h-5 w-5" />
      ) : (
        <ChevronLeft className="h-5 w-5" />
      )}
    </button>
  );
};

export default FormCP;
