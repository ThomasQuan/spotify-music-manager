import dayjs from "dayjs";
import React, { FC } from "react";

import clsxm from "@/lib/clsxm";

import Header from "@/components/layout/Header";
import Table from "@/components/layout/Table";
import PlaylistActionBar from "@/components/PlaylistActionBar";

import { PlaylistDetail } from "@/types/spotify";

interface PlaylistComponentProps {
    className?: string;
    playlist: PlaylistDetail;
}
const PlaylistComponent: FC<PlaylistComponentProps> = ({ className = "", playlist }) => {
    const playDuration = playlist.tracks.items
        .map((item) => item.track?.duration_ms)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <div className={clsxm(className, "overflow-scroll")}>
            <Header
                headerInfo={{
                    creator: playlist.owner.display_name,
                    duration: `${dayjs.duration(playDuration).hours()} hr ${dayjs
                        .duration(playDuration)
                        .minutes()} min`,
                    isPublic: Boolean(playlist.public),
                    name: playlist.name,
                    total: playlist.tracks.items.length,
                    description: playlist.description,
                    type: playlist.type ?? "Playlist",
                    primaryColor: playlist.primary_color,
                    image: playlist.images && playlist.images[0]
                }}
            />
            <PlaylistActionBar />
            <Table songs={playlist.tracks.items} />
        </div>
    );
};

export default PlaylistComponent;
export { PlaylistComponent };
