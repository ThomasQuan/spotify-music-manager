import Image from "next/image";
import React, { FC } from "react";

import clsxm from "@/lib/clsxm";

import Skeleton from "@/components/Skeleton";

import { IImageProps } from "@/types/spotify";

interface IHeaderInfoProps {
    image?: IImageProps;
    isPublic: boolean;
    name?: string;
    creator?: string;
    total: number;
    duration: string;
    description?: string;
    primaryColor?: string;
    type: string;
}

interface HeaderProps {
    className?: string;
    headerInfo: IHeaderInfoProps;
}
const Header: FC<HeaderProps> = ({ className = "", headerInfo }) => {
    return (
        <header
            className={clsxm(
                "flex min-h-fit w-full",
                "items-end justify-center",
                "px-10 pt-20 pb-4",
                className
            )}
            style={{ backgroundColor: headerInfo.primaryColor ?? "#2B2B2B" }}
        >
            <div className="rounded-lg shadow-2xl ">
                {headerInfo.image ? (
                    <div className="h-56 w-60 overflow-hidden">
                        <Image
                            alt="spotify-playlist-header"
                            src={headerInfo.image.url as string}
                            height={headerInfo.image.height ?? 450}
                            width={headerInfo.image.width ?? 450}
                        />
                    </div>
                ) : (
                    <div className="h-56 w-60">
                        <Skeleton />
                    </div>
                )}
            </div>
            <div className="w-full pl-8">
                <h4 className="text-sm font-semibold uppercase">
                    {`${headerInfo.isPublic ? "Public" : "Private"} ${headerInfo.type}`}
                </h4>
                <h1 className="text-6xl">{headerInfo.name}</h1>
                {headerInfo.description && (
                    <p className="mt-8 font-extralight">{headerInfo.description}</p>
                )}
                <p className={`${!headerInfo.description && "mt-8"}`}>
                    {headerInfo.creator} . {headerInfo.total} songs,{" "}
                    <span className="font-light">{headerInfo.duration}</span>
                </p>
            </div>
        </header>
    );
};

export default Header;
export { Header };
