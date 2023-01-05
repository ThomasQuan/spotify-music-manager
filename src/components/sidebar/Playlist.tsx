import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { AiFillSound } from "react-icons/ai";

import ButtonLink from "@/components/links/ButtonLink";

import { PlaylistType } from "@/types/spotify";

interface PlaylistProps {
    className?: string;
}
const Playlist: FC<PlaylistProps> = ({ className = "" }) => {
    const [playlists, setPlaylists] = useState<PlaylistType[]>([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get("/api/playlists").then((res) => {
                setPlaylists(res.data.items);
            });
        }
        fetchData();
    }, []);

    return (
        <div className={`${className} masked-overflow mb-20 flex-1 overflow-scroll py-4`}>
            {playlists.map((pl) => (
                <ButtonLink
                    key={pl.id}
                    className="flex justify-between px-0 font-light text-gray-400"
                    variant="transparent"
                    href={`/playlist/${pl.id}`}
                >
                    {pl.name}
                    <AiFillSound className="text-green-400" />
                </ButtonLink>
            ))}
        </div>
    );
};

export default Playlist;
export { Playlist };
