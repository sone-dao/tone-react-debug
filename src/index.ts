import { ReadonlyURLSearchParams } from 'next/navigation'

export type AppDebug = {
  isDebug: boolean
  env: string
  api: string
}

export default function debug(searchParams: ReadonlyURLSearchParams): AppDebug {
  const isDebug = searchParams.get('debug') == 'true'
  const env = searchParams.get('env') || 'production'
  const api = searchParams.get('api') || 'https://api.tone.audio/v1'

  return {
    isDebug,
    env,
    api,
  }
}
