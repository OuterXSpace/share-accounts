import { Html, Head, Main, NextScript } from 'next/document';
import { FAVICON, THEME } from '../constants/platform';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={FAVICON} type="image/svg+xml" />
        {['DYNAMIC_THEME_01', 'DYNAMIC_THEME_02', 'DYNAMIC_THEME_03', 'DYNAMIC_THEME_04'].includes(THEME) && (
          <script src="https://cdn.tailwindcss.com" async />
        )}
      </Head>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
