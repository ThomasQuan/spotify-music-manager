import React, { FC } from "react";

interface ErrorProps {
    className?: string;
}
const Error: FC<ErrorProps> = ({ className = "" }) => {
    return <div className={className}>Error</div>;
};

export default Error;
export { Error };
