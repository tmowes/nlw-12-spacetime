import { join } from 'node:path'

export const staticConfig = {
  root: join(__dirname, '..', '..', 'uploads'),
  prefix: '/uploads',
}
