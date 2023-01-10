import * as React from "react";

import Seo from "@/components/Seo";
import Sidebar from "@/components/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className="h-screen overflow-hidden ">{children}</div>;
};

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <Seo />
            <main className="flex h-screen overflow-hidden">
                <Sidebar />
                <section className=" flex min-h-screen w-full flex-col overflow-hidden bg-zinc-900">
                    {children}
                </section>
            </main>
            {/* <Player /> */}
        </Layout>
    );
};

export default Layout;
export { Layout, PageLayout };
