import '/src/styles/globals.css'
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// GoogleアナリティクスのトラッキングIDを設定
const TRACKING_ID = 'G-3MYJDEDVZL';

function MyApp({ Component, pageProps }) {

  // Googleアナリティクスの初期化
  ReactGA.initialize(TRACKING_ID);

  const router = useRouter();
  useEffect(() => {
    // ページの変更時にGoogleアナリティクスにページビューを送信
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    // ページ変更の監視を開始
    router.events.on('routeChangeComplete', handleRouteChange);

    // コンポーネントのアンマウント時に監視を停止
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
  return <Component {...pageProps} />
}

export default MyApp
