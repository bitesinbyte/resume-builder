import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/font";
import clsx from "clsx";
import { Providers } from "./provider";
import { Toaster } from "react-hot-toast";
import { NavigationBar } from "@/components/shared/NavigationBar";



export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}
export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
    generator: "Next.js",
    keywords: siteConfig.keywords,
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: siteConfig.name,
        url: siteConfig.homepage,
        title: siteConfig.name,
        description: siteConfig.description,
        images: siteConfig.logo,
    },
    twitter: {
        card: "summary_large_image",
        site: siteConfig.homepage,
        title: siteConfig.name,
        description: siteConfig.description,
        images: siteConfig.logo
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body

                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}>
                <Providers themeProps={{ attribute: "class", enableSystem: false }}>
                    <div >
                        <NavigationBar />
                        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                            <Toaster position="top-right" reverseOrder={false} />
                            {children}
                        </main>
                    </div>
                </Providers></body>
        </html >
    );
}
