import axios from "axios";
import { createContext, useCallback, useContext, useState } from "react";

import { PlaylistType } from "@/types/spotify";

interface LoadingStateProps {
    fetchPlaylists: boolean;
    fetchPlaylistSongs: boolean;
}

interface ContextProps {
    playlists: PlaylistType[];
    // searchResults: SearchResults | null;
    // query: string;
    // setQuery: Dispatch<SetStateAction<string>>;
    fetchPlaylists: () => void;
    fetchPlaylistSongs: (id: string) => void;
    loadingState: LoadingStateProps;
    playlistSongs: any;
    // fetchSearchResults: (query: string) => void;
    // currentTrack: Track | null;
    // setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
    // tracksQueue: Track[];
    // setTracksQueue: Dispatch<SetStateAction<Track[]>>;
}

const SpotifyContext = createContext({} as ContextProps);

export const SpotifyProvider = ({ children }: any) => {
    const [playlists, setPlaylists] = useState<PlaylistType[]>([]);
    const [loadingState, setLoadingState] = useState<LoadingStateProps>({
        fetchPlaylists: false,
        fetchPlaylistSongs: false
    });
    const [playlistSongs, setPlaylistSongs] = useState();

    // FETCH PLAYLIST
    const fetchPlaylists = useCallback(async () => {
        setLoadingState({
            ...loadingState,
            fetchPlaylists: true
        });
        try {
            await axios.get("/api/playlists").then((res) => {
                setPlaylists(res.data.items);
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingState({
                ...loadingState,
                fetchPlaylists: false
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // FETCH PLAYLIST SONGS
    const fetchPlaylistSongs = async (id: string) => {
        setLoadingState({
            ...loadingState,
            fetchPlaylistSongs: true
        });
        try {
            await axios.post("/api/playlist-songs", { id }).then((res) => {
                setPlaylistSongs(res.data);
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingState({
                ...loadingState,
                fetchPlaylists: true
            });
        }
    };

    return (
        <SpotifyContext.Provider
            value={{
                playlists,
                playlistSongs,
                loadingState,
                fetchPlaylists,
                fetchPlaylistSongs
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

export const useSpotify = () => useContext(SpotifyContext);
