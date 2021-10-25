import 'dotenv/config'
import { AppLogger as log } from './Logger'

log.error({
  type: 'LOG_TYPE_1',
  error: {
    name: 'error message',
    message: "i'm a error message",
  },
})

log.info({
  type: 'LOG_TYPE_1',
  message: "i'm a info message",
})

log.debug({
  type: 'LOG_TYPE_1',
  message: "i'm a debug message",
})

log.warn({
  type: 'LOG_TYPE_1',
  message: "i'm a warn message",
})
