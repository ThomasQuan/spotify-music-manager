export interface IImageProps {
    height: number | null;
    url: string | null;
    width: number | null;
}

export interface Album {
    id: string;
    name: string;
    artists: [Artist];
    images?: IImageProps[];
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
    images?: IImageProps[];
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

export interface PlaylistItem {
    added_at: string;
    primary_color?: string;
    track: Track;
}
export interface PlaylistType {
    description?: string;
    id: string;
    followers?: {
        total?: number;
    };
    images?: IImageProps[];
    name: string;
    owner?: {
        id: string;
        display_name?: string;
    };
    items?: PlaylistItem[];
    tracks?: {
        items?: PlaylistItem[];
        total: number;
    };
    type?: string;
    total?: number;
}

export interface TracksAbstractData {
    href: string;
    items: PlaylistItem[];
    limit: number;
    next?: number;
    offset: number;
    previous?: number;
    total: number;
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
    images?: IImageProps[];
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
    tracks: TracksAbstractData;
    type: string;
    uri: string;
}
