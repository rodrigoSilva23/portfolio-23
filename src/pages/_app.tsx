import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }:any) => (
  <>
    <Head>
      <title>Rodrigo-Dev</title>
      <link rel="icon" type="image/png" href="/link-icon.png" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Portfolio Rodrigo dos santos." />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
