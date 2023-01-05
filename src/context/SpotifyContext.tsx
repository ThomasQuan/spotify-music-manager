import axios from "axios";
import { createContext, useContext, useState } from "react";

import { PlaylistDetail } from "@/types/spotify";

interface ContextProps {
    // searchResults: SearchResults | null;
    // query: string;
    // setQuery: Dispatch<SetStateAction<string>>;
    fetchPlaylistDetail: (id: string) => void;
    playlistDetail?: PlaylistDetail;
    // fetchSearchResults: (query: string) => void;
    // currentTrack: Track | null;
    // setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
    // tracksQueue: Track[];
    // setTracksQueue: Dispatch<SetStateAction<Track[]>>;
}

const SpotifyContext = createContext({} as ContextProps);
type PropsWithChildren<P = unknown> = P & { children?: React.ReactNode | undefined };

const SpotifyProvider = ({ children }: PropsWithChildren) => {
    const [playlistDetail, setPlaylistDetail] = useState<PlaylistDetail>();

    // FETCH PLAYLIST SONGS
    const fetchPlaylistDetail = async (id: string) => {
        try {
            await axios.post("/api/playlist-songs", { id }).then((res) => {
                setPlaylistDetail(res.data);
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <SpotifyContext.Provider
            value={{
                playlistDetail,
                fetchPlaylistDetail
                // query,
                // setQuery,
                // searchResults,
                // fetchSearchResults,
                // currentTrack,
                // setCurrentTrack,
                // tracksQueue,
                // setTracksQueue,
            }}
        >
            {children}
        </SpotifyContext.Provider>
    );
};
export default SpotifyProvider;
export const useSpotify = () => useContext(SpotifyContext);
