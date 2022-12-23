import '../styles/foundational/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/foundational/Layout"

function App({ Component, pageProps }: AppProps) {
  <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default App;