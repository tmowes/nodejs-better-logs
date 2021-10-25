import pino from 'pino'

import { Logger, LogData } from './types'
import { logLevel } from '../configs'

const pinoLogger = pino({ level: logLevel })

const parseLoggerInputToPinoFormat = <T>({ message, error, ...data }: LogData<T>) => ({
  msg: message,
  err: error,
  ...data,
})

export const AppLogger: Logger = {
  debug: <T>(logData: LogData<T>) => pinoLogger.debug(parseLoggerInputToPinoFormat(logData)),
  info: <T>(logData: LogData<T>) => pinoLogger.info(parseLoggerInputToPinoFormat(logData)),
  warn: <T>(logData: LogData<T>) => pinoLogger.warn(parseLoggerInputToPinoFormat(logData)),
  error: <T>(logData: LogData<T>) => pinoLogger.error(parseLoggerInputToPinoFormat(logData)),
}
