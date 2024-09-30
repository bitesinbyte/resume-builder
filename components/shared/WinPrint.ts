import {Button} from "@nextui-org/button";
export const WinPrint = () => {

const print = () => {
    window.print();
};

return (<Button
    aria-label="Download Resume"
    className="exclude-print fixed bottom-5 right-10 font-bold rounded-full bg-white text-fuchsia-600 shadow-lg border-2 border-white"
    onClick={print}
    />);
};