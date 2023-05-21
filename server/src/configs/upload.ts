import { randomBytes } from 'node:crypto'
import { resolve } from 'node:path'
import { diskStorage, contentParser } from 'fastify-multer'

const uploadFolder = resolve(__dirname, '..', '..', 'uploads')

const testFolder = resolve(__dirname, '..', '..', 'test')

export const upload = {
  directory: uploadFolder,
  storage: diskStorage({
    destination: uploadFolder,
    filename: (_, file, cb) => {
      const fileHash = randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`
      return cb(null, fileName)
    },
  }),
}

export { contentParser, testFolder }
