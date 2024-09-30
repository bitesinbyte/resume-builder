import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/font";
import clsx from "clsx";
import { Providers } from "./provider";
import { Toaster } from "react-hot-toast";
import { NavigationBar } from "@/components/shared/NavigationBar";
import { GoogleAnalytics } from '@next/third-parties/google'

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
                    "min-h-screen bg-background",
                    fontSans.variable
                )}>
                <Providers themeProps={{ attribute: "class", enableSystem: false }}>
                    <div >
                        <NavigationBar />
                        <main className="container mx-auto flex-grow">
                            <Toaster position="top-right" reverseOrder={false} />
                            {children}
                        </main>
                    </div>
                </Providers>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2889277787752693"
                    crossOrigin="anonymous">
                </script>
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-2889277787752693"
                    data-ad-slot="6964229794"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
            </body>
            <GoogleAnalytics gaId="G-Z6WDXYW5WY" />
        </html >
    );
}
