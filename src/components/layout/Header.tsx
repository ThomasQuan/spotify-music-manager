import React, { FC } from "react";

import clsxm from "@/lib/clsxm";

interface IHeaderInfoProps {
    imageUrl?: string;
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
                "sticky top-0 z-50 flex min-h-fit w-full",
                "items-end justify-center",
                "px-10 pt-20 pb-4",
                className
            )}
            style={{ backgroundColor: headerInfo.primaryColor ?? "#2B2B2B" }}
        >
            <div className="h-64 w-72 border shadow-lg"></div>
            <div className="w-full pl-8">
                <h4 className="text-sm font-semibold uppercase">
                    {`${headerInfo.isPublic ? "Public" : "Private"} ${headerInfo.type}`}
                </h4>
                <h1 className="text-8xl">{headerInfo.name}</h1>
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
