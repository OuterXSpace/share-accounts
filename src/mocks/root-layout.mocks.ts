export const rootLayoutConfig = {
  rootLayout: {
    THEME_01: {
      id: 'THEME_01',
      title: 'Theme 01',
      contentTheme: {
        HOME: {
          id: 'home',
          name: 'Home',
          contentPage: {
            header: {
              type: 'HEADER_THEME_01',
              content: [],
              className: 'w-full md:w-5/12',
            },
            body: {
              type: 'BODY_THEME_01',
              breadcrumb: false,
              content: [
                {
                  id: 'header_section',
                  type: 'GROUP',
                  content: [
                    {
                      id: 'new_block1',
                      type: 'NEWS_V1',
                      position: 'left',
                    },
                    {
                      id: 'SLIDER_V1',
                      type: 'SLIDER_V1',
                      position: 'right',
                    },
                  ],
                },
                {
                  id: 'new_section',
                  type: 'GROUP',
                  content: [
                    {
                      id: 'new_block1',
                      type: 'NEWS_V2',
                      position: 'left',
                    },
                    {
                      id: 'new_block2',
                      type: 'NEWS_V2',
                      position: 'right',
                    },
                  ],
                },
                {
                  id: 'partner_section',
                  type: 'PARTNER_SECTION_V1',
                  position: 'full',
                },
              ],
            },
            footer: {
              type: 'FOOTER_THEME_01',
              position: 'full',
            },
          },
        },
        PROFILE: {
          id: 'profile',
          name: 'profile',
          contentPage: {
            header: {
              type: 'HEADER_THEME_01',
            },
            body: {
              type: 'BODY_THEME_01',
            },
            footer: {
              type: 'FOOTER_THEME_01',
            },
          },
        },
        CART: {
          id: 'cart',
          name: 'cart',
          contentPage: {
            header: {
              type: 'HEADER_THEME_01',
            },
            body: {
              type: 'BODY_THEME_01',
            },
            footer: {
              type: 'FOOTER_THEME_01',
            },
          },
        },
        PROMOTION: {
          id: 'promotion',
          name: 'promotion',
          contentPage: {
            header: {
              type: 'HEADER_THEME_01',
            },
            body: {
              type: 'BODY_THEME_01',
            },
            footer: {
              type: 'FOOTER_THEME_01',
            },
          },
        },
        LOGIN: {
          id: 'login',
          name: 'login',
          contentPage: {
            header: {
              type: 'HEADER_THEME_01',
            },
            body: {
              type: 'BODY_THEME_01',
            },
            footer: {
              type: 'FOOTER_THEME_01',
            },
          },
        },
        REGISTER: {
          id: 'register',
          name: 'register',
          contentPage: {
            header: {
              type: 'HEADER_THEME_01',
            },
            body: {
              type: 'BODY_THEME_01',
            },
            footer: {
              type: 'FOOTER_THEME_01',
            },
          },
        },
        LOBBY: {
          id: 'lobby',
          name: 'lobby',
          contentPage: {
            header: {
              type: 'HEADER_THEME_01',
            },
            body: {
              type: 'BODY_THEME_01',
            },
            footer: {
              type: 'FOOTER_THEME_01',
            },
          },
        },
      },
    },
  },
};
