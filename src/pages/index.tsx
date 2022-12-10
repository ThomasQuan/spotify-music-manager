import * as React from "react";

import Layout, { PageLayout } from "@/components/layout/Layout";
import ButtonLink from "@/components/links/ButtonLink";
import Seo from "@/components/Seo";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <PageLayout>
      <div className=''>
        <ButtonLink className='mt-6' href='/components' variant='light'>
          See all components
        </ButtonLink>
      </div>
    </PageLayout>
  );
}
