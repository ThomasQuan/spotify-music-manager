import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { SuperSession } from "@/types/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let accessToken;
    await getSession({ req }).then(async (res) => {
        accessToken = (res as SuperSession).user?.accessToken;
    });
    const playlistReq = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    res.status(200).json(playlistReq.data);
}
