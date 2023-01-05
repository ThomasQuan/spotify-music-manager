import React, { FC } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillPlayCircleFill, BsHeart, BsSearch } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { TbCloudDownload } from "react-icons/tb";

import clsxm from "@/lib/clsxm";
interface PlaylistActionBarProps {
    className?: string;
}
const PlaylistActionBar: FC<PlaylistActionBarProps> = ({ className = "" }) => {
    return (
        <div className={clsxm(className, "flex h-40 w-full items-center justify-between px-10")}>
            <div className="flex items-center justify-around space-x-10">
                <BsFillPlayCircleFill className="h-16 w-16" />
                <BsHeart className="h-8 w-8" />
                <TbCloudDownload className="h-8 w-8" />
                <HiDotsHorizontal className="h-8 w-8" />
            </div>
            <div className="flex items-center space-x-4">
                <BsSearch className="h-6 w-6" />
                <div className="flex items-center space-x-4">
                    <p>Customer Order</p>
                    <AiFillCaretDown className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
};

export default PlaylistActionBar;
export { PlaylistActionBar };
