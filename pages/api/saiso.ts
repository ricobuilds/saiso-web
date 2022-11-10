import { Client, LogLevel } from '@notionhq/client'
import { NextApiRequest, NextApiResponse } from 'next'

const notion = new Client({ auth: process.env.NOTION_KEY, logLevel: LogLevel.DEBUG })

const databaseId = process.env.NOTION_DATABASE_ID
        
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            const getResponse = await notion.databases.retrieve({ database_id: `${databaseId}` })
            res.status(200).json({...getResponse.properties});
        case "POST":
            try {
                await notion.pages.create({
                    "parent": {
                        "type": "database_id",
                        "database_id": `${databaseId}`
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
    }
}