import { Express } from 'express'
import { indexController } from '../controllers/index.controller'

export default class IndexRoute {
  constructor(app: Express) {
    app.route('/sum').get(indexController.sum)
  }
}
