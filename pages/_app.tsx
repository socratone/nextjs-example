// 모든 global css 파일은 여기서 import
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Layout을 모든 페이지에 적용한다.
    <Layout>
      <Head>
        {/* 아래 meta 태그는 개별적으로 설정한 태그와 중복된 채 모든 페이지에 적용된다. */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
