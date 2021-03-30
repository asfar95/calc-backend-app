import * as express from 'express'
import * as path from 'path'
import { PORT, ROUTES_DIR } from './var/config'
import { files } from './helpers'
import * as cors from 'cors';

const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

for (const route of files(ROUTES_DIR)) {
  require(path.resolve(route)).default(app)
}

app.listen(PORT, () => {
  console.log(
    `Server started on port ${PORT} on env ${process.env.NODE_ENV ||
    'dev'}`,
  );
})

export default app
