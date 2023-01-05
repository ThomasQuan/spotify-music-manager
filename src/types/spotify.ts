interface Image {
    height: number | null;
    url: string | null;
    width: number | null;
}

export interface Album {
    id: string;
    name: string;
    artists: [Artist];
    images?: [Image];
    album_type?: string;
    release_date?: string;
    tracks?: {
        total: number;
        items: Track[];
    };
}

export interface Artist {
    id: string;
    name: string;
    images?: [Image];
    followers?: {
        total: number;
    };
    genres?: [string];
}

export interface Track {
    id: string;
    name: string;
    album: Album;
    artists: [Artist];
    duration_ms: number;
    preview_url: string;
    popularity: number;
    track_number: number;
}

export interface PlaylistType {
    description?: string;
    id: string;
    followers?: {
        total?: number;
    };
    images?: [Image];
    name: string;
    owner?: {
        id: string;
        display_name?: string;
    };
    items?: [{ added_at: string; track: Track }];
    tracks?: {
        items?: [{ added_at: string; track: Track }];
        total: number;
    };
    type?: string;
    total?: number;
}

export interface PlaylistDetail {
    collaborative: boolean;
    description: string;
    external_urls: Record<string, string>;
    followers?: {
        href?: string;
        total: number;
    };
    href: string;
    id: string;
    images?: [Image];
    name: string;
    owner: {
        display_name: string;
        external_urls: Record<string, string>;
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    primary_color: string;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        items: {
            added_at: Date;
            added_by: {
                external_urls: Record<string, string>;
                href: string;
                id: string;
                type: string;
                uri: string;
            };
            is_locale: boolean;
            primary_color?: string;
            track: Track;
        }[];
        limit: number;
        next?: number;
        offset: number;
        previous?: number;
        total: number;
    };
    type: string;
    uri: string;
}

export interface SearchResults {
    albums?: {
        items: Album[];
    };
    artists?: {
        items: Artist[];
    };
    playlists?: {
        items: PlaylistType[];
    };
    tracks?: {
        items: Track[];
    };
}
