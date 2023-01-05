import React, { FC } from "react";

import clsxm from "@/lib/clsxm";

interface PlayerProps {
    className?: string;
}
const Player: FC<PlayerProps> = ({ className = "" }) => {
    return (
        <div
            className={clsxm(
                className,
                "sticky bottom-0 flex h-16 w-full items-center justify-between bg-slate-800"
            )}
        >
            Player
        </div>
    );
};

export default Player;
export { Player };
