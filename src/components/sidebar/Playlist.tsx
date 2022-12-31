import React, { FC, useEffect } from "react";
import { AiFillSound } from "react-icons/ai";

import ButtonLink from "@/components/links/ButtonLink";

import { useSpotify } from "@/context/SpotifyContext";

interface PlaylistProps {
    className?: string;
}
const Playlist: FC<PlaylistProps> = ({ className = "" }) => {
    const { fetchPlaylists, playlists } = useSpotify();
    useEffect(() => {
        fetchPlaylists();
        const playlistInterval = setInterval(() => {
            fetchPlaylists();
        }, 15000);
        return () => {
            clearInterval(playlistInterval);
        };
    }, [fetchPlaylists]);

    return (
        <div className={`${className} masked-overflow flex-1 overflow-scroll py-4`}>
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
