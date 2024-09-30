import { PdfIcon } from "@/icons/PdfIcon";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";

export const WinPrint = ({ handlePrint }: { handlePrint: any }) => {
    return (
        <Tooltip content="Download Resume">
            <Button
                isIconOnly
                startContent={<PdfIcon />}
                aria-label="Download Resume"
                className="exclude-print fixed bottom-5 right-10 font-bold rounded-full bg-white shadow-lg border-2 border-white"
                onPress={() => handlePrint()} />
        </Tooltip>);
};