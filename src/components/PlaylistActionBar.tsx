import React, { FC } from "react";

import clsxm from "@/lib/clsxm";

interface PlaylistActionBarProps {
    className?: string;
}
const PlaylistActionBar: FC<PlaylistActionBarProps> = ({ className = "" }) => {
    return (
        <div className={clsxm(className, "flex h-40 w-full items-center justify-between px-10")}>
            <div>Action Button</div>
        </div>
    );
};

export default PlaylistActionBar;
export { PlaylistActionBar };
