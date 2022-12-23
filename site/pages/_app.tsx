import '../styles/foundational/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/foundational/Layout"
import ErrorBoundary from '../components/foundational/ErrorBoundary'

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;