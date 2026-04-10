import { PlusCircle, MinusCircle } from "lucide-react";

const FormButton = ({ size, remove, add }: { size: number; remove: () => void; add: () => void }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={add}
        aria-label="Add"
        className="btn-ghost rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <PlusCircle className="h-5 w-5" />
      </button>
      {size > 0 && (
        <button
          type="button"
          onClick={remove}
          aria-label="Remove"
          className="btn-ghost rounded-md p-2 text-muted-foreground hover:text-destructive transition-colors"
        >
          <MinusCircle className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default FormButton;
