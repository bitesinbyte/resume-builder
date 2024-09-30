'use client'
import {
    Navbar,
    NavbarContent,
    NavbarBrand,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { Logo } from "../../icons/logo";

export const NavigationBar = () => {
    return (
        <>
            <Navbar className="w-[100%]" maxWidth="2xl" position="sticky" >
                <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink className="flex justify-start items-center gap-1" href="/">
                            <Logo />
                            <p className="font-bold text-black dark:text-white" >Resume Builder</p>
                        </NextLink>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="basis-1 pl-4" justify="end">
                    <ThemeSwitch />
                </NavbarContent>
            </Navbar >
        </>
    );
};