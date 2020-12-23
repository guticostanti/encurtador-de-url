import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/constants'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        // Ver se a URL já existe
        // Criar hash para a URL
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // Salvar a URL no banco
        // Retornar a URL que a gente salvou
        response.json({ originURL, hash, shortURL })
    }
}