import '../../styles/globals.css'
import type { AppProps } from 'next/app'

//全体で使用する共通したコンポーネントを定義
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
