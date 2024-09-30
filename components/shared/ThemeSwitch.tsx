"use client";

import { useEffect, useState } from "react";
import { SwitchProps } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { SunFilledIcon } from "@/icons/SunFilledIcon";
import { MoonFilledIcon } from "@/icons/MoonFilledIcon";
import { Switch } from "@nextui-org/react";

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [isSelected, setIsSelected] = useState(!(theme === "light"));
    const onChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        setIsSelected(theme === "light");
    };

    useEffect(() => {
        setTheme("dark")
        setIsSelected(true)
    }, [setTheme, setIsSelected]);

    return (
        <div className="h-auto bg-transparent rounded-lg justify-center group-data-[selected=true]:bg-transparent !text-default-500">
            <Switch
                defaultSelected
                size="lg"
                color="success"
                startContent={<SunFilledIcon />}
                endContent={<MoonFilledIcon />}
                isSelected={isSelected}
                onChange={onChange}
            >
            </Switch>
        </div>
    );
};