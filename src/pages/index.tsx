import clsx from "clsx";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";

import { greetingByTime } from "@/lib/helper";
import { isAuthenticated } from "@/lib/isAuthenticated";

import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";

import { SuperSession } from "@/types/auth";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <div className={clsx("layout min-h-screen py-20", "text-white")}>
      <h1>Good {greetingByTime("Thomas")}</h1>
      <ArrowLink direction="left" className="mt-2" href="/">
        Back to Home
      </ArrowLink>

      {/* Page content */}
      <div className="mt-6">
        <h3>Fast navigation</h3>
        <hr />
        <div className="flex flex-wrap justify-start">
          <ButtonLink
            className="mt-6 mr-4 min-w-[200px]"
            href="/components"
            variant="light"
          >
            See all components
          </ButtonLink>
          <ButtonLink
            className="mt-6 mr-4 min-w-[200px]"
            href=""
            variant="light"
          >
            See Battle Card
          </ButtonLink>
          <ButtonLink
            className="mt-6 mr-4 min-w-[200px]"
            href=""
            variant="light"
          >
            Play Random Song
          </ButtonLink>
        </div>
      </div>
      <div className="mt-6">
        <h3>Listening Contribution</h3>
        <hr />
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!(await isAuthenticated(session as SuperSession))) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: { newReleases: "" } };
};
