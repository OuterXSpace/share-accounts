import React from 'react';
import { IPopUpFooterStatementProps } from './pop-up-footer-statement.type';
import { useSpring, animated } from 'react-spring';
import { observer } from 'mobx-react';
import { useWindowDimensions } from '../../hooks';
import { popUpStatementStore } from '../../stores';

export const PopUpFooterStatement: React.FC<IPopUpFooterStatementProps> = observer((props) => {
  const closeState = popUpStatementStore.closePopup;

  const dimention = useWindowDimensions();

  const { height } = useSpring({
    from: { height: '0px' },
    to: {
      height: closeState ? '0px' : dimention.width > 768 ? '80px' : '240px',
    },
    config: { duration: 800 },
  });

  return (
    <animated.div style={{ height }} className="fixed bg-black bottom-0 left-0 w-full">
      <div className="w-[95%] p-4 mx-auto my-auto flex justify-between flex-wrap items-center">
        <p className="w-[85%] text-white text-left">
          Chúng tôi sử dụng cookie để cung cấp cho bạn trải nghiệm tốt nhất trên trang chủ của chúng tôi. Bằng việc tiếp
          tục truy cập, bạn cho phép chúng tôi sử dụng cookie. Để tìm hiểu thêm vui lòng truy cập{' '}
          <span>
            <a
              className="underline text-slate-400"
              href="https://www.fonterra.com/nz/en/cookies-statement.html?utm_source=aemauthor.fonterra.com&utm_medium=cookiebanner"
              target="_blank"
              rel="noreferrer"
            >
              Điều khoản sử dụng
            </a>
          </span>{' '}
          và{' '}
          <span>
            <a
              href="https://www.fonterra.com/nz/en/privacy-statement.html?utm_source=aemauthor.fonterra.com&utm_medium=cookiebanner"
              target="_blank"
              className="underline text-slate-400"
              rel="noreferrer"
            >
              Chính sách bảo mật
            </a>
          </span>
        </p>
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <button
            className="text-white font-bold rounded bg-sky-300 px-4 py-2"
            onClick={() => popUpStatementStore.setClosePopup(false)}
          >
            Đồng ý
          </button>
          <button
            className="text-white font-bold rounded bg-slate-300 px-4 py-2"
            onClick={() => popUpStatementStore.setClosePopup(true)}
          >
            Đóng
          </button>
        </div>
      </div>
    </animated.div>
  );
});
