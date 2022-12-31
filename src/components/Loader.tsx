import React, { FC } from "react";

interface LoaderProps {
    className?: string;
}
const Loader: FC<LoaderProps> = ({ className = "" }) => {
    return <div className={className}>Loader</div>;
};

export default Loader;
export { Loader };
