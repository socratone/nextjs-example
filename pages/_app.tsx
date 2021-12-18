import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Layout을 모든 페이지에 적용한다.
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
