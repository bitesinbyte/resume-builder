'use client';

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { Logo } from "../../icons/logo";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Bites In Byte", href: "https://bitesinbyte.com", external: true },
    { label: "Blog", href: "https://blogs.bitesinbyte.com", external: true },
];

export const NavigationBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 exclude-print ${
                scrolled
                    ? "bg-background/95 backdrop-blur-xl shadow-sm border-b"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
                {/* Logo */}
                <NextLink
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    href="/"
                >
                    <Logo size={32} />
                    <span className="text-lg font-semibold tracking-tight">
                        Resume Builder
                    </span>
                </NextLink>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="relative rounded-md px-3 py-2 text-sm transition-colors
                                       text-muted-foreground hover:text-foreground
                                       after:absolute after:bottom-0 after:left-1/2 after:h-[2px]
                                       after:bg-foreground after:transition-all after:duration-300
                                       after:w-0 hover:after:left-1 hover:after:w-[calc(100%-8px)]"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="ml-1">
                        <ThemeSwitch />
                    </div>
                </nav>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeSwitch />
                    <button
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="animate-slide-down border-t bg-background/95 backdrop-blur-xl md:hidden">
                    <nav className="mx-auto max-w-5xl space-y-1 px-4 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};
