import { useRouter } from "next/router";
import { useEffect } from "react";

import { useSpotify } from "@/context/SpotifyContext";

export default function ComponentsPage() {
    const router = useRouter();

    const { fetchPlaylistSongs } = useSpotify();
    useEffect(() => {
        if (router.query.id) {
            fetchPlaylistSongs(router.query.id as string);
        }
    }, [router.query.id, fetchPlaylistSongs]);

    // console.log(playlistSongs);
    return <div>1</div>;
}
