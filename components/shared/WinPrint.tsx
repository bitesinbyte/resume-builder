import { Download } from "lucide-react";

export const WinPrint = ({ handlePrint }: { handlePrint: () => void }) => {
    return (
        <button
            aria-label="Download Resume"
            title="Download Resume as PDF"
            className="exclude-print fixed bottom-6 right-6 z-40
                       flex h-12 w-12 items-center justify-center
                       rounded-full bg-primary text-primary-foreground
                       shadow-lg transition-all hover:scale-110 hover:shadow-xl
                       border border-border/50"
            onClick={() => handlePrint()}
        >
            <Download className="h-5 w-5" />
        </button>
    );
};
