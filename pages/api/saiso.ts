import type { NextApiRequest, NextApiResponse } from 'next'
import { Client, LogLevel } from '@notionhq/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const notion = new Client({auth: req.body.notionKey, logLevel: LogLevel.DEBUG})
    const databaseId = req.body.notionDB
    switch (req.method) {
        case "GET":
            const getResponse = await notion.databases.retrieve({ database_id: `${databaseId}` })
            res.status(200).json({...getResponse.properties});
        case "POST":
            try {
                const pageResponse = await notion.pages.create({
                    "parent": {
                        "type": "database_id",
                        "database_id": databaseId
                    },
                    properties: {
                        "Type": {
                            "title": [
                                {
                                    "text": {
                                        "content": req.body.type
                                    }
                                }
                            ]
                        },
                        "Satisfaction Rate": {
                            "select": {
                                "name": req.body.satisfactionRate
                            }
                        },
                        "Feedback": {
                            "rich_text": [
                                {
                                    "text": {
                                        "content": req.body.feedback
                                    }
                                }
                            ]
                        },
                        "Email": {
                            "rich_text": [
                                {
                                    "text": {
                                        "content": req.body.email ?? 'n/a'
                                    }
                                }
                            ]
                        },
                        "Created time": {
                            "date": {
                                "start": req.body.date
                            }
                        }
                    }
                })
                res.status(200).json({result: "success"})
            } catch (error) {
                res.status(400).json({result: "error"})
            }
        default:
            return {saiso: "Caramba! It seems we got a weird request here. Try again with plain GET or POST requests!"};
    }
}

