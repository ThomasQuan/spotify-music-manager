import { useRouter } from "next/router";
import { useEffect } from "react";

import Loader from "@/components/Loader";
import PlaylistComponent from "@/components/Playlist";

import { useSpotify } from "@/context/SpotifyContext";

export default function ComponentsPage() {
    const router = useRouter();

    const { fetchPlaylistDetail, playlistDetail } = useSpotify();
    useEffect(() => {
        if (router.query.id) {
            fetchPlaylistDetail(router.query.id as string);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.id]);

    if (!playlistDetail) {
        return <Loader />;
    }
    return <PlaylistComponent playlist={playlistDetail} />;
}
