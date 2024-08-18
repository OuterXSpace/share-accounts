import { Html, Head, Main, NextScript } from 'next/document';
import { FAVICON } from '../constants/platform';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={FAVICON ?? ''} type="image/svg+xml" />
        {/* <script src="https://cdn.tailwindcss.com" async /> */}
      </Head>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
