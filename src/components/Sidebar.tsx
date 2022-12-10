import React, { FC } from "react";

interface SidebarProps {
  className?: string;
}
const Sidebar: FC<SidebarProps> = ({ className = "" }) => {
  return (
    <div className={`w-96 bg-black ${className}`}>
      {/* header */}
      <div></div>
      {/* playlist */}
      <div>
        <h3>Slavic Hardbass 2019</h3>
        <h3>Slavic Hardbass 2019</h3>
        <h3>Slavic Hardbass 2019</h3>
        <h3>Slavic Hardbass 2019</h3>
      </div>
    </div>
  );
};

export default Sidebar;
export { Sidebar };
