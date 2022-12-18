import React, { FC } from "react";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiHome5Line } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";

import Button from "@/components/buttons/Button";
import Playlist from "@/components/sidebar/Playlist";
interface SidebarProps {
  className?: string;
}
const Sidebar: FC<SidebarProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex w-96 flex-col bg-black pt-6 pl-8 opacity-80 ${className}`}
    >
      {/* header */}
      <div className="flex flex-col space-y-4">
        <Button
          className="px-0 py-0"
          onClick={() => {
            return null;
          }}
          variant="transparent"
        >
          <div className="flex items-center space-x-4">
            <RiHome5Line className="h-6 w-6" />
            <p>Home</p>
          </div>
        </Button>
        <Button
          className="px-0 py-0"
          onClick={() => {
            return null;
          }}
          variant="transparent"
        >
          <div className="flex items-center space-x-4">
            <FiSearch className="h-6 w-6" />
            <p>Search</p>
          </div>
        </Button>
        <Button
          className="px-0 py-0"
          onClick={() => {
            return null;
          }}
          variant="transparent"
        >
          <div className="flex items-center space-x-4">
            <VscLibrary className="h-6 w-6" />
            <p>Library</p>
          </div>
        </Button>
        <Button
          className="px-0 py-0"
          onClick={() => {
            return null;
          }}
          variant="transparent"
        >
          <div className="flex items-center space-x-4">
            <BsPlusSquare className="h-6 w-6" />
            <p>Create Playlist</p>
          </div>
        </Button>
        <Button
          className="px-0 py-0"
          onClick={() => {
            return null;
          }}
          variant="transparent"
        >
          <div className="flex items-center space-x-4">
            <BsHeart className="h-6 w-6" />
            <p>Liked Song</p>
          </div>
        </Button>
      </div>
      <hr className="mt-4 h-0.5 opacity-40" />
      <Playlist />
    </div>
  );
};

export default Sidebar;
export { Sidebar };
