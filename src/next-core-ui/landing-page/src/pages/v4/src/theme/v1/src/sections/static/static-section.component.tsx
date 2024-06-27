import { StaticSectionV4Props } from './static-section.type';

export const StaticSectionV4: React.FC<StaticSectionV4Props> = (props) => {
  const { data, className } = props;

  return (
    <section className="container flex flex-wrap pt-10 template-policies-container lg:flex-nowrap lg:gap-x-32">
      <aside className="pb-14 pt-12 lg:pt-0 lg:pb-0 lg:max-w-[220px] w-full h-fit lg:pl-3 lg:border-l lg:border-l-grey-200  lg:sticky top-0">
        <h4 className="mb-2 lg:px-2 s4 text-dark-grey-500 ">Trong văn bản này</h4>
        <nav data-el="anchor-menu">
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-1-dịnh-nghia"
          >
            1. Định Nghĩa
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#purpose-scope-other-definitions"
          >
            2. Mục đích, phạm vi và các định nghĩa khác
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-3-thu-thập-dữ-liệu-ca-nhan"
          >
            3. Thu thập dữ liệu cá nhân
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-4-dang-ky-nhận-bản-tin"
          >
            4. Đăng ký nhận bản tin
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-5-mục-dich-bảo-vệ-lợi-ich-hợp-phap"
          >
            5. Mục đích bảo vệ lợi ích hợp pháp
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-6-mục-dich-tiếp-thị"
          >
            6. Mục đích tiếp thị
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2 active"
            href="#h-7-kiểm-soat-va-xử-ly-dữ-liệu-ca-nhan-của-khach-truy-cập"
          >
            7. Kiểm soát và xử lý dữ liệu cá nhân của Khách truy cập
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-8-bộ-xử-ly-dược-ủy-quyền"
          >
            8. Bộ xử lý được ủy quyền
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-9-cach-cong-ty-xử-ly-dữ-liệu-ca-nhan-của-khach-truy-cập-cho-cac-hoạt-dộng-tiếp-thị"
          >
            9. Cách Công ty xử lý dữ liệu cá nhân của Khách truy cập cho các hoạt động tiếp thị
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-10-thời-gian-lưu-giữ-thong-tin-ca-nhan-của-khach"
          >
            10. Thời gian lưu giữ thông tin cá nhân của Khách
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-11-quyền-xoa-của-khach-truy-cập"
          >
            11. Quyền xóa của khách truy cập
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-12-khi-nao-cong-ty-co-thể-từ-chối-thực-hiện-yeu-cầu-tẩy-xoa"
          >
            12. Khi nào Công ty có thể từ chối thực hiện yêu cầu tẩy xóa?
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-13-khu-vực-dịa-ly"
          >
            13. Khu vực địa lý
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-14-thay-dổi-tuyen-bố-về-quyền-rieng-tư-nay"
          >
            14.Thay đổi tuyên bố về quyền riêng tư này
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-15-cookies"
          >
            15. Cookies
          </a>
          <a
            data-el="anchor-menu-item"
            className="relative block py-1 pr-2 mb-0.5 font-sans p4 rounded-md last:mb-0 hover:no-underline before:absolute before:hidden before:w-full before:h-full before:bg-grey-100 before:rounded-md before:top-1/2 before:-z-10 before:-translate-y-1/2 hover:before:block before:-left-2"
            href="#h-16-giam-sat-va-ra-soat"
          >
            16. Giám sát và rà soát
          </a>
        </nav>
      </aside>
      <div className="template-policies-content">
        <div className="hidden pb-5 lg:block">
          <h1 className="mb-3 h1 lg:hrt6">Chính sách riêng tư</h1>
          <div className="p3">
            <strong>Cập nhật mới nhất:</strong> <time dateTime="2023-04-12T16:55:50+07:00">Tháng Tư 12, 2023</time>
          </div>
        </div>
        <h2 className="bic-gutenberg-heading wp-heading mt-10 wp-block-heading" id="h-1-dịnh-nghia">
          1. Định Nghĩa
        </h2>
        <section
          data-el="bic-b-highlighted-list"
          id="bic-b-highlighted-list-block_63b60456678e3"
          className="bic-highlighted-list "
        >
          <ul className="!py-6 !list-none bg-grey-100  !px-7 unstyled-content-list rounded-2xl !ml-0">
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">Công Ty</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>
                  Công ty trách nhiệm hữu hạn Học Viện BeIn News tại Hong Kong với số đăng ký doanh nghiệp: 1332369 tại
                  căn hộ 1701 – số 02A, 17/F., số 625 phố King, North Point, Hong Kong
                </p>
              </div>
            </li>
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">Cổng tin tức</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>Cổng tin tức đang được vận hành bở Công Ty và khả dụng tại: https://beincrypto.com/,</p>
              </div>
            </li>
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">BeInCrypto</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>Tên chung được gọi hoặc là Công Ty hoặc là Cổng Tin Tức</p>
              </div>
            </li>
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">Chính sách riêng tư</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>Bản cập nhật mới nhất về chính sách riêng tư của BeInCrypto</p>
              </div>
            </li>
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">Khách truy cập</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>Cá nhân đang ghé thăm cổng tin tức</p>
              </div>
            </li>
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">Hướng dẫn</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>Hướng dẫn pháp lý được áp dụng theo phạm vi quyền hạn được quy định của công ty</p>
              </div>
            </li>
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">GDPR</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>Quy định chung về bảo vệ dữ liệu (EU) 2016/679</p>
              </div>
            </li>
            <li className="bic-highlighted-list-item pb-4 mb-[21px] border-b border-b-grey-300  last:mb-0 last:border-0 last:pb-0">
              <h4 className="text-4 font-bold leading-6 mb-0.5">Dữ liệu cá nhân</h4>
              <div className="text-3.5 leading-6 bic-highlighted-list-content font-body max-w-[800px] [&_p:last-child]:!mb-0">
                <p>
                  Dữ liệu Cá nhân có nghĩa là bất kỳ thông tin nào liên quan đến Khách truy cập, xác định hoặc có thể
                  xác định Khách truy cập và bao gồm, ví dụ: tên, địa chỉ và số nhận dạng của Khách truy cập.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="purpose-scope-other-definitions">
          2. Mục đích, phạm vi và các định nghĩa khác
        </h2>
        <p>Chính sách này dành cho khách truy cập BeInCrypto sử dụng.</p>
        <p>
          BeInCrypto đại diện cho một cổng thông tin nhằm mục đích cung cấp cho Khách truy cập báo cáo trung thực, thẳng
          thắn về thị trường tiền điện tử và ngành công nghiệp chuỗi khối.
        </p>
        <p>Công ty đã thiết lập Chính sách quyền riêng tư này theo GDPR và các Nguyên tắc liên quan.</p>
        <p>
          Chính sách này nhằm mục đích cung cấp cho Khách truy cập của Công ty thông tin về loại thông tin mà Công ty
          thu thập, cách sử dụng thông tin đó và các trường hợp có thể chia sẻ thông tin đó với bên thứ ba.
        </p>
        <p>
          Trong suốt tuyên bố về quyền riêng tư này, dữ liệu của Khách truy cập có thể được gọi là “dữ liệu cá nhân”
          hoặc “thông tin cá nhân”. Công ty đôi khi cũng có thể đề cập chung đến việc xử lý, thu thập, bảo vệ và lưu trữ
          dữ liệu cá nhân của Khách truy cập hoặc bất kỳ hành động nào như “xử lý” dữ liệu cá nhân đó.
        </p>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-3-thu-thập-dữ-liệu-ca-nhan">
          3. Thu thập dữ liệu cá nhân
        </h2>
        <p>Công ty sẽ thu thập thông tin cần thiết cho việc cung cấp và cải thiện dịch vụ.</p>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-4-dang-ky-nhận-bản-tin">
          4. Đăng ký nhận bản tin
        </h2>
        <p>
          Khách truy cập sẽ có tùy chọn đăng ký nhận bản tin thường xuyên do Công ty cung cấp bằng cách cung cấp địa chỉ
          email của họ khi làm theo tùy chọn đăng ký. Vì mục đích này, Khách truy cập đồng ý nhận email đó bằng cách
          cung cấp trực tiếp địa chỉ email của mình cho Công ty thông qua tùy chọn có sẵn trên trang web của Cổng thông
          tin.
        </p>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-5-mục-dich-bảo-vệ-lợi-ich-hợp-phap">
          5. Mục đích bảo vệ lợi ích hợp pháp
        </h2>
        <p>
          Công ty xử lý dữ liệu cá nhân để bảo vệ các lợi ích hợp pháp mà BeInCrypto hoặc bên thứ ba theo đuổi. Lợi ích
          hợp pháp là khi Công ty có lý do kinh doanh, thương mại hoặc pháp lý để sử dụng thông tin của Khách truy cập.
          Ngay cả khi đó, nó không được đi ngược lại những gì đúng và tốt nhất cho Khách truy cập. Ví dụ về các hoạt
          động xử lý như vậy bao gồm:
        </p>
        <ul>
          <li>Bắt đầu các thủ tục tố tụng tại tòa án và chuẩn bị bào chữa cho chúng tôi trong các thủ tục tố tụng</li>
          <li>
            Các biện pháp và quy trình chúng tôi thực hiện để cung cấp bảo mật hệ thống và CNTT của Công ty, ngăn ngừa
            tội phạm tiềm ẩn, bảo mật tài sản, kiểm soát tiếp nhận và các biện pháp chống xâm phạm;
          </li>
          <li>Các biện pháp quản lý kinh doanh và phát triển hơn nữa các sản phẩm và dịch vụ của Công ty;</li>
          <li>
            Việc chuyển giao, chuyển nhượng (dù hoàn toàn hay để bảo đảm cho các nghĩa vụ) và/hoặc bán cho một hoặc
            nhiều người và/hoặc tính phí và/hoặc cản trở bất kỳ hoặc tất cả các lợi ích, quyền, danh nghĩa hoặc lợi ích
            của Công ty theo bất kỳ thỏa thuận nào giữa Du khách và Công ty.
          </li>
        </ul>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-6-mục-dich-tiếp-thị">
          6. Mục đích tiếp thị
        </h2>
        <p>
          Công ty có thể sử dụng dữ liệu của Khách truy cập, chẳng hạn như vị trí hoặc lịch sử giao dịch để gửi bất kỳ
          tin tức, phân tích, nghiên cứu, báo cáo, chiến dịch hoặc cơ hội đào tạo nào mà Khách truy cập có thể quan tâm
          đến địa chỉ email đã đăng ký của họ nếu nó đã được cung cấp cho Công ty.
        </p>
        <p>
          Khách truy cập luôn có quyền thay đổi tùy chọn này nếu họ không muốn nhận thông tin đó nữa và có thể hủy đăng
          ký bất kỳ lúc nào.
        </p>
        <h2
          className="bic-gutenberg-heading wp-heading wp-block-heading"
          id="h-7-kiểm-soat-va-xử-ly-dữ-liệu-ca-nhan-của-khach-truy-cập"
        >
          7. Kiểm soát và xử lý dữ liệu cá nhân của Khách truy cập
        </h2>
        <p>
          BeInCrypto và bất kỳ đại lý nào mà BeInCrypto tham gia với mục đích thu thập, lưu trữ hoặc xử lý dữ liệu cá
          nhân và bất kỳ bên thứ ba nào hành động thay mặt Công ty có thể thu thập, xử lý và lưu trữ dữ liệu cá nhân do
          Khách truy cập cung cấp.
        </p>
        <p>
          Với mục đích xử lý và lưu trữ dữ liệu cá nhân do Khách truy cập cung cấp ở bất kỳ khu vực tài phán nào trong
          Liên minh Châu Âu hoặc bên ngoài Liên minh Châu Âu, Công ty xác nhận rằng điều này sẽ được thực hiện theo tất
          cả các luật hiện hành.
        </p>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-8-bộ-xử-ly-dược-ủy-quyền">
          8. Bộ xử lý được ủy quyền
        </h2>
        <p>
          Công ty cũng có thể sử dụng các bộ xử lý bên ngoài được ủy quyền để xử lý dữ liệu của Khách truy cập dựa trên
          các thỏa thuận dịch vụ đã ký kết, được điều chỉnh bởi các hướng dẫn từ Công ty để bảo vệ dữ liệu liên quan đến
          Khách truy cập. Các thỏa thuận rất quan trọng để cả hai bên hiểu được trách nhiệm và trách nhiệm pháp lý của
          mình.
        </p>
        <p>Các nhà cung cấp như vậy sẽ cung cấp các dịch vụ khác nhau theo thỏa thuận với Công ty.</p>
        <p>
          Khi Công ty được yêu cầu hoặc được phép tiết lộ thông tin mà không có sự đồng ý, Công ty sẽ không tiết lộ
          nhiều thông tin hơn mức cần thiết để thực hiện mục đích tiết lộ.
        </p>
        <h2
          className="bic-gutenberg-heading wp-heading wp-block-heading"
          id="h-9-cach-cong-ty-xử-ly-dữ-liệu-ca-nhan-của-khach-truy-cập-cho-cac-hoạt-dộng-tiếp-thị"
        >
          9. Cách Công ty xử lý dữ liệu cá nhân của Khách truy cập cho các hoạt động tiếp thị
        </h2>
        <p>
          Công ty có thể xử lý dữ liệu cá nhân của Khách truy cập để thông báo cho Khách truy cập về các sản phẩm, dịch
          vụ hoặc ưu đãi mà họ có thể quan tâm. Công ty nghiên cứu tất cả các thông tin đó để hình thành quan điểm về
          những gì cần thiết hoặc những gì Khách truy cập có thể quan tâm.
          <br />
          Trong một số trường hợp, hồ sơ có thể được sử dụng. Lập hồ sơ là một quá trình trong đó dữ liệu của Khách truy
          cập được xử lý tự động với mục đích đánh giá các khía cạnh cá nhân nhất định và cung cấp thêm cho Khách truy
          cập thông tin tiếp thị được nhắm mục tiêu về sản phẩm.
        </p>
        <p>
          Khách truy cập có quyền phản đối bất kỳ lúc nào đối với việc xử lý dữ liệu cá nhân của Khách truy cập cho mục
          đích tiếp thị hoặc hủy đăng ký nhận email liên quan đến tiếp thị từ Công ty, bằng cách liên hệ với bộ phận hỗ
          trợ Khách truy cập của Công ty bất kỳ lúc nào theo các cách sau:
        </p>
        <ul>
          <li>Qua Email: info@beincrypto.com</li>
          <li>Hỗ trợ khách hàng trang web</li>
        </ul>
        <h2
          className="bic-gutenberg-heading wp-heading wp-block-heading"
          id="h-10-thời-gian-lưu-giữ-thong-tin-ca-nhan-của-khach"
        >
          10. Thời gian lưu giữ thông tin cá nhân của Khách
        </h2>
        <p>
          Công ty sẽ giữ dữ liệu cá nhân của Khách truy cập trong 5 năm để đáp ứng các yêu cầu pháp lý. Trong một số
          trường hợp, thời hạn này có thể được kéo dài.
        </p>
        <p>
          Khi Công ty không còn cần giữ dữ liệu cá nhân của Khách truy cập, Công ty sẽ xóa hoặc hủy dữ liệu đó một cách
          an toàn.
        </p>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-11-quyền-xoa-của-khach-truy-cập">
          11. Quyền xóa của khách truy cập
        </h2>
        <p>
          Quyền xóa không cung cấp ‘quyền được lãng quên’ tuyệt đối. Các cá nhân có quyền xóa dữ liệu cá nhân và ngăn
          chặn việc xử lý trong các trường hợp cụ thể:
        </p>
        <ul>
          <li>
            Trường hợp dữ liệu cá nhân không còn cần thiết liên quan đến mục đích mà nó được thu thập/xử lý ban đầu;
          </li>
          <li>Khi cá nhân rút lại sự đồng ý;</li>
          <li>Khi cá nhân phản đối việc xử lý và không có lợi ích hợp pháp quan trọng hơn để tiếp tục xử lý;</li>
          <li>Khi dữ liệu cá nhân được xử lý bất hợp pháp (tức là vi phạm GDPR);</li>
          <li>Khi dữ liệu cá nhân phải được xóa để tuân thủ nghĩa vụ pháp lý;</li>
          <li>
            Khi dữ liệu cá nhân được xử lý liên quan đến việc cung cấp các dịch vụ xã hội thông tin cho trẻ em. Có một
            số trường hợp cụ thể mà quyền xóa không được áp dụng và Công ty có thể từ chối thực hiện yêu cầu.
          </li>
        </ul>
        <h2
          className="bic-gutenberg-heading wp-heading wp-block-heading"
          id="h-12-khi-nao-cong-ty-co-thể-từ-chối-thực-hiện-yeu-cầu-tẩy-xoa"
        >
          12. Khi nào Công ty có thể từ chối thực hiện yêu cầu tẩy xóa?
        </h2>
        <p>BeInCrypto có thể từ chối tuân thủ yêu cầu xóa khi dữ liệu cá nhân được xử lý vì những lý do sau:</p>
        <ul>
          <li>Tuân thủ nghĩa vụ pháp lý để thực hiện nhiệm vụ công ích hoặc thực thi quyền lực chính thức;</li>
          <li>Việc thực hiện hoặc bảo vệ các khiếu nại pháp lý.</li>
        </ul>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-13-khu-vực-dịa-ly">
          13. Khu vực địa lý
        </h2>
        <p>
          Theo nguyên tắc chung, dữ liệu của Khách truy cập được xử lý trong Liên minh Châu Âu/Khu vực Kinh tế Châu Âu
          (EU/EEA), nhưng trong một số trường hợp, dữ liệu này được chuyển đến và xử lý ở các quốc gia bên ngoài EU/EEA.
        </p>
        <p>
          Việc truyền và xử lý dữ liệu của Khách truy cập bên ngoài EU/EEA có thể diễn ra, miễn là có các biện pháp bảo
          vệ thích hợp và các hành động chỉ được thực hiện dựa trên cơ sở pháp lý.
        </p>
        <p>
          Theo yêu cầu, Khách truy cập có thể nhận thêm thông tin chi tiết về việc truyền dữ liệu của Khách truy cập đến
          các quốc gia bên ngoài EU/EEA.
        </p>
        <h2
          className="bic-gutenberg-heading wp-heading wp-block-heading"
          id="h-14-thay-dổi-tuyen-bố-về-quyền-rieng-tư-nay"
        >
          14.Thay đổi tuyên bố về quyền riêng tư này
        </h2>
        <p>
          Công ty có quyền đơn phương sửa đổi hoặc bổ sung Tuyên bố về quyền riêng tư này mà không cần thông báo và vào
          bất kỳ thời điểm nào theo quy định này.
        </p>
        <p>
          Nếu có bất kỳ thay đổi nào đối với tuyên bố về quyền riêng tư này, Công ty sẽ xuất bản Chính sách quyền riêng
          tư được cập nhật trên Cổng thông tin. Ngày sửa đổi hiển thị ở cuối trang này cũng sẽ được sửa đổi. Tuy nhiên,
          Công ty khuyến khích Khách truy cập thỉnh thoảng xem lại chính sách quyền riêng tư này để luôn được thông báo
          về cách Công ty xử lý và bảo vệ thông tin cá nhân của Khách truy cập.
        </p>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-15-cookies">
          15. Cookies
        </h2>
        <p>
          Trang web của Công ty sử dụng các tệp nhỏ được gọi là cookie để tăng cường chức năng và cải thiện trải nghiệm
          tổng thể của Khách truy cập.
        </p>
        <p>
          Cookie là một tệp văn bản nhỏ được lưu trữ trên máy tính của Khách truy cập nhằm mục đích lưu giữ hồ sơ. Công
          ty sử dụng cookie trên (các) cổng thông tin. BeInCrypto liên kết thông tin mà nó lưu trữ trong cookie với bất
          kỳ thông tin nhận dạng cá nhân nào mà Khách truy cập gửi khi ở trên cổng thông tin. BeInCrypto sử dụng cả
          cookie ID phiên và cookie liên tục. Cookie ID phiên không hết hạn khi Khách truy cập đóng trình duyệt. Một
          cookie liên tục vẫn còn trên ổ cứng của Khách truy cập trong một khoảng thời gian dài. Khách truy cập có thể
          xóa cookie liên tục bằng cách làm theo hướng dẫn được cung cấp trong tệp “trợ giúp” của trình duyệt Internet
          của Khách truy cập.
        </p>
        <p>
          Công ty đặt cookie liên tục cho mục đích thống kê. Cookie liên tục cũng cho phép Công ty theo dõi và nhắm mục
          tiêu vị trí cũng như sở thích của Khách truy cập và nâng cao trải nghiệm các dịch vụ của Công ty trên cổng
          thông tin.
        </p>
        <p>Nếu Khách truy cập từ chối cookie, Khách truy cập vẫn có thể sử dụng cổng thông tin.</p>
        <p>
          Một số đối tác kinh doanh của Công ty sử dụng cookie trên cổng thông tin. Công ty không có quyền truy cập hoặc
          kiểm soát các cookie này.
        </p>
        <h2 className="bic-gutenberg-heading wp-heading wp-block-heading" id="h-16-giam-sat-va-ra-soat">
          16. Giám sát và rà soát
        </h2>
        <p>
          Công ty sẽ thường xuyên theo dõi hiệu quả của Chính sách này và đặc biệt là chất lượng thực hiện các thủ tục
          được giải thích trong Chính sách và, khi thích hợp, Công ty có quyền sửa chữa mọi thiếu sót.
        </p>
        <p>
          Công ty sẽ thường xuyên theo dõi hiệu quả của Chính sách này và đặc biệt là chất lượng thực hiện các thủ tục
          được giải thích trong Chính sách và, khi thích hợp, Công ty có quyền sửa chữa mọi thiếu sót.
        </p>
      </div>
    </section>
  );
};
