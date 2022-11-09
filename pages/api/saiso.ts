import type { NextApiRequest, NextApiResponse } from 'next'
import { Client, LogLevel } from '@notionhq/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            //
        case "POST":
    
        default:
            return {saiso: "Caramba! It seems we got a weird request here. Try again with plain GET or POST requests!"};
    }
}

