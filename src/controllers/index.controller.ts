import { Request, Response } from 'express'

export default class IndexController {
  public sum(req: Request, res: Response): void {
    const x: number = +req.query.x
    const y: number = +req.query.y
    res.json({ sum: x + y });
  }
}

export const indexController = new IndexController()
