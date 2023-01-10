import dayjs from "dayjs";
import Image from "next/image";
import React, { FC } from "react";
import { BsFillClockFill } from "react-icons/bs";

import clsxm from "@/lib/clsxm";
import { formatTimeDisplay } from "@/lib/helper";

import Skeleton from "@/components/Skeleton";

import { PlaylistItem } from "@/types/spotify";

interface TableProps {
    className?: string;
    songs: PlaylistItem[];
}
const Table: FC<TableProps> = ({ className = "", songs }) => {
    return (
        <table className={clsxm(className, "mx-2 mb-20 w-full text-left")}>
            <thead className="border-b uppercase">
                <tr>
                    <th className="pb-4 font-light">#</th>
                    <th className="pb-4 font-light">Title</th>
                    <th className="pb-4 font-light">Album</th>
                    <th className="pb-4 font-light">Date Added</th>
                    <th className="pb-4 font-light">
                        <BsFillClockFill className="h-5 w-5" />
                    </th>
                </tr>
            </thead>
            <tbody className="table-body">
                {songs.map((song, key) => {
                    const image = song.track.album.images && song.track.album.images[2];
                    return (
                        <tr key={key} className="">
                            <td>{key + 1}</td>
                            <td>
                                <div className="flex items-center space-x-6">
                                    <div>
                                        {image ? (
                                            <Image
                                                alt={`song-album-image-${song.track.name}`}
                                                src={image.url as string}
                                                height={image.height as number}
                                                width={image.width as number}
                                            />
                                        ) : (
                                            <Skeleton className="h-[64px] w-[64px]" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-medium line-clamp-1">
                                            {song.track.name}
                                        </p>
                                        <p className="text-sm text-gray-400 line-clamp-1">
                                            {song.track.artists.map((artist) => artist.name)}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>{song.track.album.name}</td>
                            <td>{formatTimeDisplay(song.added_at)}</td>
                            <td>{dayjs.duration(song.track.duration_ms).format("m:ss")}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
export { Table };
