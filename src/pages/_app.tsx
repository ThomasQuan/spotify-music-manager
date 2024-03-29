import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import "@/styles/table.css";
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import "@/styles/colors.css";

import { Layout, PageLayout } from "@/components/layout/Layout";

import SpotifyProvider from "@/context/SpotifyContext";

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

dayjs.extend(duration);

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if (router.pathname === "/login") {
        return (
            <Layout>
                <Component />
            </Layout>
        );
    }

    return (
        <SessionProvider session={pageProps.session}>
            <SpotifyProvider>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </SpotifyProvider>
        </SessionProvider>
    );
}

export default MyApp;
