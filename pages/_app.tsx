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
        {/* Head는 여럿이 나와도 합쳐지고 마지막에 나오는 태그가 결과값이 된다. */}
        {/* 그러므로 여기서 global한 title과 meta를 설정하고 */}
        {/* 개별 페이지에서 필요한 경우 title과 meta를 다시 설정할 수 있다. */}
        <title>NextJS Example</title>
        <meta name="description" content="NextJS Tutorial" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
