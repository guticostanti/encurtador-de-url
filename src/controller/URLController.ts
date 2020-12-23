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

    public async redirect(req: Request, response: Response): Promise<void> {
        // Pegar hash da URL
        const { hash } = req.params
        // Encontrar a URL original pelo hash
        const url = {
            originURL: "https://cloud.mongodb.com/v2/5fe280b72da2f11fa23ffc67#clusters",
            hash: "nh72KXPJ9",
            shortURL: "http://localhost:5000/nh72KXPJ9",
        }
        // Redirecionar para a URL original a partir do que encontramos no DB
        response.redirect(url.originURL)
    }
}