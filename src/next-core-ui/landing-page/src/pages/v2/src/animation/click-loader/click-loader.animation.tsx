import React, { useRef } from 'react';
import gsap from 'gsap-trial/dist/gsap';
import { useGSAP } from '@gsap/react';
import { ClickLoaderProp } from './click-loader.type';
import Link from 'next/link';
import { useRouter } from 'next/router';

gsap.registerPlugin(useGSAP);

export const ClickLoader: React.FC<ClickLoaderProp> = (props) => {
  const { link, title } = props;

  const container = useRef<any>();

  const onClickRef = useRef<any>();

  const router = useRouter();

  useGSAP(
    (_, contextSafe) => {
      const handleClick = contextSafe(() => {
        document.body.classList.add('body-loader');
        setTimeout(() => {
          router.reload();
          document.body.classList.remove('body-loader');
        }, 1000);
      });

      onClickRef?.current?.addEventListener('click', handleClick);

      return () => {
        onClickRef?.current?.removeEventListener('click', handleClick);
      };
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <Link href={link} ref={onClickRef}>
        {title}
      </Link>
    </div>
  );
};
