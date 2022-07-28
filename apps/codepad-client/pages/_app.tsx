import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Welcome to codepad-client!</title>
      </Head>
      <main className="app">
        <CssBaseline />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
