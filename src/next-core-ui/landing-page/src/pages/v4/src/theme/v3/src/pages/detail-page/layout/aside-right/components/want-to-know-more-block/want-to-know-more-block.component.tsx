import Link from 'next/link';
import { WantToKnowMoreBlockV4Props } from './want-to-know-more-block.type';

export const WantToKnowMoreBlockV4: React.FC<WantToKnowMoreBlockV4Props> = (props) => {
  return (
    <div className="want-to-know-more-block">
      <div className="want-to-know-more-block__inner">
        <p>
          <span className="h3 block">Bạn yêu thích tiền điện tử?</span>
          <br />
          Tham gia nhóm Telegram của chúng tôi và cập nhật các bài phân tích kỹ thuật cùng các tin tức biến động của thị
          trường liên tục 24/7.
        </p>
        <p>
          <Link className="j-btn" href="https://t.me/beincrypto_vn">
            Tham gia
          </Link>
        </p>
      </div>
    </div>
  );
};
