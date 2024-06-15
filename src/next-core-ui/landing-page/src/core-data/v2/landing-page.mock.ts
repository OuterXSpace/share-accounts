export const LANDING_PAGE_MOCK_V2: Record<string, any> = {
  systemConfig: {
    HOME: [
      {
        id: 'MENU',
        type: 'MENU',
        className: '',
        data: 'V1',
      },
      {
        id: 'INTRODUCTION',
        type: 'INTRODUCTION',
        className: '',
        data: 'V1',
      },
      {
        id: 'SERVICES_SLIDER',
        type: 'SERVICES_SLIDER',
        className: '',
        data: 'V1',
      },
      {
        id: 'FOOTER',
        type: 'FOOTER',
        className: '',
        data: 'V1',
      },
    ],
    TEST: [
      {
        id: 'TEST',
        type: 'TEST',
        className: '',
        data: 'V1',
      },
    ],
    SERVICES: [
      {
        id: 'MENU',
        type: 'MENU',
        className: '',
        data: 'V1',
      },
      {
        id: 'NEW_CART_TEXT_AND_IMAGE',
        type: 'NEW_CART_TEXT_AND_IMAGE',
        className: '',
        data: 'V1',
      },
      {
        id: 'PRODUCT_IMAGE_LIST',
        type: 'PRODUCT_IMAGE_LIST',
        className: 'mb-[50px]',
        data: 'V1',
      },
      {
        id: 'FOOTER',
        type: 'FOOTER',
        className: '',
        data: 'V1',
      },
    ],
    WORK: [
      {
        id: 'MENU',
        type: 'MENU',
        className: '',
        data: 'V1',
      },
      {
        id: 'NEW_CART_TEXT',
        type: 'NEW_CART_TEXT',
        className: '',
        data: 'V1',
      },
      {
        id: 'PRODUCT_VIDEO_LIST',
        type: 'PRODUCT_VIDEO_LIST',
        className: 'mb-[50px]',
        data: 'V1',
      },
      {
        id: 'FOOTER',
        type: 'FOOTER',
        className: '',
        data: 'V1',
      },
    ],
    CONTACT: [
      {
        id: 'MENU',
        type: 'MENU',
        className: '',
        data: 'V1',
      },
      {
        id: 'CONTACT',
        type: 'CONTACT',
        className: 'pt-[100px] lg:pt-[150px]',
        data: 'V1',
      },
      {
        id: 'FOOTER',
        type: 'FOOTER',
        className: '',
        data: 'V1',
      },
    ],
  },
  dataConfig: {
    MENU: {
      V1: {
        object: {
          logo: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Mark.svg',
          array: [
            {
              id: 'HOME',
              label: 'Trang chủ',
              link: '/',
            },
            {
              id: 'ABOUT-US',
              label: 'Về tôi',
              link: '/about-us',
            },
            {
              id: 'SERVICES',
              label: 'Dịch vụ',
              link: '/services',
            },
            {
              id: 'WORK',
              label: 'Công việc',
              link: '/work',
            },
            {
              id: 'CONTACT',
              label: 'Liên hệ',
              link: '/contact',
            },
          ],
        },
      },
    },
    FOOTER: {
      V1: {
        object: {
          text: 'Bản quyền © 2024 Video Editor | Được cung cấp bởi Video Editor',
          array: [
            {
              id: '1',
              icon: 'logo-facebook',
              link: '',
            },
            {
              id: '2',
              icon: 'logo-pinterest',
              link: '',
            },
            {
              id: '3',
              icon: 'logo-youtube',
              link: '',
            },
          ],
        },
      },
    },
    DEEP_VIDEO_BANNER: {
      V1: {
        object: {
          video:
            'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Pexels-Ron-Lach-8100336-compress.mp4',
          text: 'Biến video thành kiệt tác điện ảnh',
          button: {
            label: 'Liên hệ tôi',
            link: '/contact',
          },
        },
      },
    },
    NEW_CART_TEXT: {
      V1: {
        object: {
          title: 'Tôi là Mark, một biên tập viên video và nhà làm phim chuyên nghiệp',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
          button: {
            label: 'Liên hệ tôi',
            link: '/contact',
          },
        },
      },
    },
    NEW_CART_TEXT_AND_IMAGE: {
      V1: {
        object: {
          imageUrl: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/2-opt.png',
          array: [
            {
              id: '1',
              title: 'KINH NGHIỆM',
              description:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
            },
            {
              id: '2',
              title: 'KINH NGHIỆM',
              description:
                'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
            },
          ],
        },
      },
    },
    PRODUCT_IMAGE_LIST: {
      V1: {
        object: {
          title: 'Tôi có thể giúp bạn với',
          array: [
            {
              id: '1',
              imageUrl: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/3.png',
              title: 'Biên tập',
              description:
                'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
            },
            {
              id: '2',
              imageUrl: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/4.png',
              title: 'Chỉnh màu',
              description:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur',
            },
            {
              id: '3',
              imageUrl: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/5.png',
              title: 'Thiết kế âm thanh',
              description:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
            },
          ],
        },
      },
    },
    ALONE_VIDEO: {
      V1: {
        object: {
          video:
            'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Pexels-Cottonbro-8208008-compress.mp4',
        },
      },
    },
    PRODUCT_VIDEO_LIST: {
      V1: {
        object: {
          title: 'Công việc gần đây',
          button: {
            label: 'Xem tất cả',
            link: '/',
            hidden: false,
          },
          defaultFilter: 'VIDEO',
          filter: [
            {
              id: '1',
              label: 'Video',
              sort: 'VIDEO',
            },
            {
              id: '2',
              label: 'Shorts',
              sort: 'SHORTS',
            },
          ],
          object: {
            VIDEO: [
              {
                id: '1',
                video: 'https://www.youtube.com/embed/HJRzUQMhJMQ',
                title: 'Volkswagen - Quảng cáo 2023',
                link: '',
              },
              {
                id: '2',
                video: 'https://www.youtube.com/embed/HJRzUQMhJMQ',
                title: 'Neighborhood - 2022 Film',
                link: '',
              },
              {
                id: '3',
                video: 'https://www.youtube.com/embed/HJRzUQMhJMQ',
                title: 'MoveU - 2022 Ad',
                link: '',
              },
              {
                id: '4',
                video: 'https://www.youtube.com/embed/HJRzUQMhJMQ',
                title: 'Volkswagen - Quảng cáo 2023',
                link: '',
              },
              {
                id: '5',
                video: 'https://www.youtube.com/embed/HJRzUQMhJMQ',
                title: 'Neighborhood - 2022 Film',
                link: '',
              },
              {
                id: '6',
                video: 'https://www.youtube.com/embed/HJRzUQMhJMQ',
                title: 'MoveU - 2022 Ad',
                link: '',
              },
            ],
            SHORTS: [
              {
                id: '1',
                video: 'https://www.youtube.com/embed/7Wgyo8wV-dc',
                title: 'Volkswagen - Quảng cáo 2023',
                link: '',
              },
              {
                id: '2',
                video: 'https://www.youtube.com/embed/ktpUoQPPvyk',
                title: 'Neighborhood - 2022 Film',
                link: '',
              },
              {
                id: '3',
                video: 'https://www.youtube.com/embed/prj4YBNTqT8',
                title: 'Neighborhood - 2022 Film',
                link: '',
              },
              {
                id: '4',
                video: 'https://www.youtube.com/embed/cWtu9h_u29w',
                title: 'Neighborhood - 2022 Film',
                link: '',
              },
            ],
            TIKTOK: [
              {
                id: '1',
                video: 'https://www.tiktok.com/@scout2015/video/7335209680530148639',
                title: 'Volkswagen - Quảng cáo 2023',
                link: '',
              },
              {
                id: '2',
                video: 'https://www.tiktok.com/@scout2015/video/7335209680530148639',
                title: 'Neighborhood - 2022 Film',
                link: '',
              },
            ],
          },
        },
      },
    },
    CONTACT: {
      V1: {
        object: {
          title: 'Hãy làm việc cùng nhau',
          description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
          phone: '202-555-0176',
          email: 'Contact@info.com',
          location: 'Carmelita Ave, Beverly Hills, CA 90210, USA',
          form: {
            input: {
              FULL_NAME: {
                label: 'Họ và tên',
                error: '',
              },
              EMAIL: {
                label: 'Email',
                error: '',
              },
              MESSAGE: {
                label: 'Tin nhắn',
                error: '',
              },
            },
            button: {
              label: 'Gửi',
            },
          },
        },
      },
    },
  },
  seoData: {
    HOME: {
      title: 'Trang chủ',
      ogTitle: 'Trang chủ',
      ogImage: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Mark.svg',
      ogUrl: 'https://nguyentrongnhan.info/',
    },
    'ABOUT-US': {
      title: 'Về tôi',
      ogTitle: 'Về tôi',
      ogImage: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Mark.svg',
      ogUrl: 'https://nguyentrongnhan.info/about-us',
    },
    SERVICES: {
      title: 'Dịch vụ',
      ogTitle: 'Dịch vụ',
      ogImage: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Mark.svg',
      ogUrl: 'https://nguyentrongnhan.info/service',
    },
    WORK: {
      title: 'Công việc',
      ogTitle: 'Công việc',
      ogImage: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Mark.svg',
      ogUrl: 'https://nguyentrongnhan.info/work',
    },
    CONTACT: {
      title: 'Liên lạc',
      ogTitle: 'Liên lạc',
      ogImage: 'https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Mark.svg',
      ogUrl: 'https://nguyentrongnhan.info/contact',
    },
  },
  className: 'bg-[#000000]',
};
