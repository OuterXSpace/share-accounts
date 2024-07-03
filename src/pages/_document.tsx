import { Html, Head, Main, NextScript } from 'next/document';
import { FAVICON, THEME } from '../constants/platform';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={FAVICON} type="image/svg+xml" />
        {['DYNAMIC_PAGE_V1', 'DYNAMIC_PAGE_V2', 'DYNAMIC_PAGE_V3', 'DYNAMIC_PAGE_V4'].includes(THEME) && (
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
