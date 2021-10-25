type CustomEnvVar = 'LOG_LEVEL' | 'LOGDNA_URL' | 'LOGDNA_KEY'

type ProcessEnvExtended = {
  [key in CustomEnvVar]: string
}

declare namespace NodeJS {
  export interface ProcessEnv extends ProcessEnvExtended {}
}
