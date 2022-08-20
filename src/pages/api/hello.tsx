import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"

const API_KEY = "de2fd6bb-0258-4904-5b87-683ec673067e:fx";
const url = "https://api-free.deepl.com/v2/translate"

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const reqBody: { japanese: string } = req.body.data

    const params = {
      "text": reqBody.japanese,
      "auth_key": API_KEY,
        "target_lang": "EN"
    }

    const response = await axios.get(url, { params })
    const result = response.data.translations[0].text
    res.status(200).json({ translation: result })
}
