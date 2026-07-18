'use client';

import { Logo } from "@/icons/logo";
import { Github, Linkedin, Instagram, X } from "lucide-react";

const products = [
    { label: "Kenntnistrainer", href: "https://www.kenntnistrainer.de" },
    { label: "Fachsprachprufung", href: "https://www.fachsprachtrainer.de" },
    { label: "Leben in Deutschland", href: "https://www.lebenindeutschland.org" },
    { label: "Developer Tools", href: "https://tools.lamplitlabs.com" },
    { label: "Resume Builder", href: "https://resume.lamplitlabs.com" },
    { label: "EDMX Tools", href: "https://edmx.lamplitlabs.com" },
];

const navigation = [
    { label: "Products", href: "https://www.lamplitlabs.com/#products" },
    { label: "About", href: "https://www.lamplitlabs.com/#about" },
    { label: "Blog", href: "https://blogs.lamplitlabs.com" },
    { label: "Contact", href: "https://www.lamplitlabs.com/#contact" },
];

const socials = [
    { label: "GitHub", href: "https://github.com/lamplitlabs", icon: Github },
    { label: "X", href: "https://x.com/lamplitlabs", icon: X },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/lamplitlabs", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/lamplitlabs", icon: Instagram },
];

export const Footer = () => {
    return (
        <footer className="border-t exclude-print">
            <div className="mx-auto max-w-5xl px-4 py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a
                            href="https://www.lamplitlabs.com"
                            className="inline-flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Logo size={28} />
                            <span className="text-base font-semibold tracking-tight">
                                Lamplit Labs
                            </span>
                        </a>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Small, practical software that illuminates the path forward.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold">Products</h4>
                        <ul className="space-y-2">
                            {products.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold">Navigation</h4>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold">Connect</h4>
                        <div className="flex flex-wrap gap-2">
                            {socials.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                                >
                                    <item.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Lamplit Labs. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
