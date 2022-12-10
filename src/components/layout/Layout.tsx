import * as React from "react";

import Seo from "@/components/Seo";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Put Header or Footer Here
  return <>{children}</>;
};

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Seo />
      <main className='flex h-screen overflow-hidden'>
        <Sidebar />
        <section className='flex min-h-screen w-full flex-col overflow-hidden bg-white'>
          {children}
        </section>
      </main>
    </Layout>
  );
};

export default Layout;
export { Layout, PageLayout };
