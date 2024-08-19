import { IUiConfigServerSide } from '../../models';
import { IRootSystemConfig } from '../../models/system-config/root-system-config';

export const cbtSystemConfigPageApi: IRootSystemConfig = {
  systemConfig: {
    '/': {
      array: [
        {
          id: 'DEEP_VIDEO_BANNER_SECTION',
          section: 'DEEP_VIDEO_BANNER_SECTION',
          className: ' pt-[250px] pb-[150px]',
          theme: 'V1',
        },
        { id: 'THREE_PANEL_FEATURE_SECTION', section: 'THREE_PANEL_FEATURE_SECTION', className: '', theme: 'V1' },
        { id: 'NEW_CART_TEXT_SECTION', section: 'NEW_CART_TEXT_SECTION', className: '', theme: 'V1' },
        {
          id: 'NEW_CART_TEXT_AND_IMAGE_SECTION',
          section: 'NEW_CART_TEXT_AND_IMAGE_SECTION',
          className: '',
          theme: 'V1',
        },
        { id: 'PERSPECTIVES_GRID_SECTION', section: 'PERSPECTIVES_GRID_SECTION', className: '', theme: 'V1' },
        { id: 'SUBSCRIBER_INTERRUPTER_SECTION', section: 'SUBSCRIBER_INTERRUPTER_SECTION', className: '', theme: 'V1' },
        { id: 'GET_IN_TOUCH_SECTION', section: 'GET_IN_TOUCH_SECTION', className: '', theme: 'V1' },
      ],
      theme: 'V1',
      className: '',
      '[id]': {
        array: [
          {
            id: 'DETAIL_SECTION',
            section: 'DETAIL_SECTION',
            className: '',
            theme: 'TECHNOLOGY',
            array: [
              {
                id: 'HERO_LANDING_SECTION',
                section: 'HERO_LANDING_SECTION',
                className: '',
                theme: 'DEFAULT',
                style: 'V2',
              },
              { id: 'RICH_TEXT_SECTION', section: 'RICH_TEXT_SECTION', className: ' ', theme: 'DEFAULT' },
            ],
          },
        ],
        theme: 'V1',
        className: '',
      },
    },
    '/news': {
      array: [
        {
          id: 'DETAIL_SECTION',
          section: 'DETAIL_SECTION',
          className: '',
          theme: 'NEWS',
          array: [
            {
              id: 'HERO_LANDING_SECTION',
              section: 'HERO_LANDING_SECTION',
              className: '',
              theme: 'DEFAULT',
              style: 'V1',
            },
          ],
        },
      ],
      theme: 'V1',
      className: '',
      '[id]': {
        array: [
          {
            id: 'DETAIL_SECTION',
            section: 'DETAIL_SECTION',
            className: '',
            theme: 'NEW_DETAIL',
            array: [
              { id: 'PERSPECTIVES_ARTICLE_HERO', section: 'PERSPECTIVES_ARTICLE_HERO', className: '', theme: 'V1' },
              { id: 'RICH_TEXT_SECTION', section: 'RICH_TEXT_SECTION', className: ' ', theme: 'DEFAULT' },
              { id: 'RELATED_SECTION', section: 'RELATED_SECTION', className: ' ', theme: 'DEFAULT' },
            ],
          },
        ],
        theme: 'V1',
        className: '',
      },
    },
    '/legal': {
      array: [
        {
          id: 'DETAIL_SECTION',
          section: 'DETAIL_SECTION',
          className: '',
          theme: 'LEGAL',
          array: [
            {
              id: 'HERO_LANDING_SECTION',
              section: 'HERO_LANDING_SECTION',
              className: '',
              theme: 'DEFAULT',
              style: 'V1',
            },
          ],
        },
      ],
      theme: 'V1',
      className: '',
      '[id]': {
        array: [
          {
            id: 'DETAIL_SECTION',
            section: 'DETAIL_SECTION',
            className: '',
            theme: 'LEGAL_DETAIL',
            array: [{ id: 'STATIC_PAGE_SECTION', section: 'STATIC_PAGE_SECTION', className: ' ', theme: 'DEFAULT' }],
          },
        ],
        theme: 'V1',
        className: '',
      },
    },
    '/contact': {
      array: [
        { id: 'HERO_LANDING_SECTION', section: 'HERO_LANDING_SECTION', className: ' ', theme: 'CONTACT' },
        { id: 'FORM_CONTACT_SECTION', section: 'FORM_CONTACT_SECTION', className: ' ', theme: 'V1' },
        { id: 'PRE_FOOTER_SECTION', section: 'PRE_FOOTER_SECTION', className: ' ', theme: 'V1' },
      ],
      theme: 'V1',
      className: '',
    },
    '/offices': {
      array: [
        { id: 'HERO_LANDING_SECTION', section: 'HERO_LANDING_SECTION', className: ' ', theme: 'OFFICES' },
        { id: 'RICH_TEXT_SECTION', section: 'RICH_TEXT_SECTION', className: ' ', theme: 'OFFICES' },
        { id: 'OFFICES_SECTION', section: 'OFFICES_SECTION', className: ' ', theme: 'V1' },
        { id: 'PRE_FOOTER_SECTION', section: 'PRE_FOOTER_SECTION', className: ' ', theme: 'V1' },
      ],
      theme: 'V1',
      className: '',
    },
    '/services': {
      array: [
        { id: 'HERO_LANDING_SECTION', section: 'HERO_LANDING_SECTION', className: ' ', theme: 'SERVICES' },
        { id: 'RICH_TEXT_SECTION', section: 'RICH_TEXT_SECTION', className: ' ', theme: 'SERVICES' },
        { id: 'OFFICES_SECTION', section: 'OFFICES_SECTION', className: ' ', theme: 'V1' },
      ],
      theme: 'V1',
      className: '',
    },
  },
  dataConfig: {
    V1: {
      MENU_SECTION: {
        V1: {
          object: {
            logo: {
              logoLight: 'https://i.ibb.co/tCyP3D0/logo-text-white.png',
              logoDark: 'https://i.ibb.co/wp3R9hR/logo-text-black.png',
            },
            desktop: {
              button: {
                label: 'Contact us',
                link: '/contact',
              },
              hiddenBySlug: ['/login', '/register'],
              menuHeader: [
                { id: 'NEWS-EVENTS', label: 'News & Events', link: '/news' },
                { id: 'OFFICES', label: 'Offices', link: '/offices' },
                { id: 'CONTACT', label: 'Contact', link: '/contact' },
              ],
              array: [
                { id: 'SERVICES', label: 'What We Do', link: '/services' },
                { id: 'INDUSTRIES', label: 'Industries', link: '/industries' },
                { id: 'CLIENT_STORIES', label: 'Client Stories', link: '/client-stories' },
                { id: 'PERSPECTIVES', label: 'Perspectives', link: '/perspectives' },
                { id: 'ABOUT', label: 'About', link: '/about-us' },
                { id: 'CONTACT', label: 'Contact', link: '/contact' },
                { id: 'CAREERS', label: 'Careers', link: '/careers' },
              ],
            },
            mobile: {
              hiddenBySlug: ['/login', '/register'],
              array: [
                { id: 'SERVICES', label: 'What We Do', link: '/services' },
                { id: 'INDUSTRIES', label: 'Industries', link: '/industries' },
                { id: 'CLIENT_STORIES', label: 'Client Stories', link: '/client-stories' },
                { id: 'PERSPECTIVES', label: 'Perspectives', link: '/perspectives' },
                { id: 'ABOUT', label: 'About', link: '/about-us' },
                { id: 'CONTACT', label: 'Contact', link: '/contact' },
                { id: 'CAREERS', label: 'Careers', link: '/careers' },
              ],
            },
          },
        },
      },
      FOOTER_SECTION: {
        V1: {
          object: {
            logoText: 'https://i.ibb.co/wp3R9hR/logo-text-black.png',
            text: '© 2024 West Monroe. All Rights Reserved',
            static: [
              { id: 'CONTACT', label: 'Contact', link: '/contact' },
              { id: 'OFFICES', label: 'Offices', link: '/offices' },
              { id: 'COOKIE-POLICY', label: 'Cookie Policy', link: '/legal/cookie-policy' },
              { id: 'PRIVACY-POLICY', label: 'Privacy Policy', link: '/legal/privacy-policy' },
              { id: 'TERMS-OF-USE', label: 'Terms of Use', link: '/legal/terms-of-use' },
              { id: 'SITEMAP', label: 'Site Map', link: '/legal/sitemap' },
            ],
          },
        },
      },
      DEEP_VIDEO_BANNER_SECTION: {
        V1: {
          object: {
            video:
              'https://player.vimeo.com/progressive_redirect/playback/855211636/rendition/1080p/file.mp4?loc=external&signature=92dd156f8cd52b52bf022f65bd5edde13114e394290532b5e15dae49a4f988b1',
            altVideo:
              'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/homepageimagestatic.jpg',
            text: 'Bring the possible into the present',
            description: 'Where forward thinking meets practical application',
            button: { label: 'Learn more', link: '/service' },
          },
        },
      },
      NEW_CART_TEXT_SECTION: {
        V1: {
          object: {
            id: 'about-us',
            title: 'We bring the right people into the room, right from the start.',
            description:
              'Changing the way you do business at the pace of changing customer expectations requires all hands on deck: functional, technical, industry &amp; product experts who work collaboratively to create solutions that blend the physical and digital worlds.',
            button: { label: 'Contact Us', link: '/contact' },
          },
        },
      },
      NEW_CART_TEXT_AND_IMAGE_SECTION: {
        V1: {
          object: {
            imageUrl: '/cdn/my-image.png',
            array: [
              {
                id: '1',
                title: 'KINH NGHIỆM',
                description:
                  'Tôi là một video editor với gần 2 năm kinh nghiệm trong lĩnh vực quay và chỉnh sửa video. Trong thời gian này, tôi đã làm việc với nhiều dự án đa dạng, từ các video quảng cáo, phim ngắn, đến các video sự kiện và âm nhạc. Kinh nghiệm này giúp tôi phát triển một phong cách làm việc chuyên nghiệp, chú trọng đến từng chi tiết để đảm bảo sản phẩm cuối cùng luôn đạt chất lượng cao nhất.',
              },
              {
                id: '2',
                title: 'CHỈNH SỬA VIDEO',
                description:
                  'Tôi thành thạo trong việc chỉnh sửa màu sắc và kết hợp các hiệu ứng âm thanh để video trở nên hài hòa, sinh động, và thú vị. Tôi luôn đảm bảo rằng mỗi video không chỉ đẹp về mặt hình ảnh mà còn truyền tải được cảm xúc và thông điệp mà khách hàng muốn gửi gắm. Tôi có khả năng sử dụng các phần mềm chỉnh sửa video chuyên nghiệp từ Davinci resolve cho đến Adobe Premiere Pro, Affter Effect và Capcut PC, giúp tạo ra những video ấn tượng và thu hút lượng người xem.',
              },
              {
                id: '3',
                title: 'QUAY VIDEO',
                description:
                  'Trong lĩnh vực quay video, tôi am hiểu sâu sắc về kỹ thuật đánh đèn và sắp xếp bố cục background sao cho phù hợp với bối cảnh và nội dung của mỗi thước phim. Tôi có kỹ năng sử dụng các thiết bị quay phim hiện đại, từ máy quay SONY A7III, SONY 6400, 6300 cho đến các máy quay chuyên nghiệp. Tôi cũng có kinh nghiệm làm việc trong nhiều môi trường khác nhau, từ studio đến ngoại cảnh, luôn đảm bảo chất lượng hình ảnh tốt nhất trong mọi điều kiện ánh sáng và không gian.',
              },
            ],
          },
        },
      },
      HERO_LANDING_SECTION: {
        OFFICES: {
          object: {
            background: 'https://cdn.westmonroe.com/-/media/west-monroe-images/misc/our-offices.png',
            title: 'Our Offices',
            description:
              'Emerald City. Second City. The Big Apple. Find your nearest West Monroe team, coast to coast.',
            button: { link: 'contact', label: 'Contact Us' },
          },
        },
        CONTACT: {
          object: {
            background: 'https://cdn.westmonroe.com/-/media/west-monroe-images/misc/our-offices.png',
            title: 'Contact Us',
            description:
              'Looking for digital consulting that will drive results, or just curious about what we do? You’re in the right place. Email. Phone. Social media. Connect with the right',
          },
        },
        SERVICES: {
          object: {
            background: 'https://cdn.westmonroe.com/-/media/west-monroe-images/misc/our-offices.png',
            title: 'Strategic Visioning',
            description: 'From innovative strategies to aligned action​',
            button: { link: '/contact', label: 'Let’s Get to Work' },
          },
        },
      },
      RICH_TEXT_SECTION: {
        OFFICES: {
          object: {
            content:
              "<p>West Monroe's multidisciplinary teams work collaboratively across the firm to serve you in your local market. All locations embody our award-winning culture &ndash; but each office reflects something distinct to its region as well. That&rsquo;s because we&rsquo;re committed to the needs of our local employees, clients, and communities. Explore our locations below.</p>",
          },
        },
        SERVICES: {
          object: {
            content:
              '<!DOCTYPE html> <html> <head> <title>Codebeautify.org Text to HTML Converter</title> </head> <body> <p>The job of strategy—overarching decisions about priorities and resource allocations­—is to translate vision into action. Developing a well-defined digital vision—the larger picture of where an organization is heading and what it aspires to accomplish in the future—is critical to strategic success. Vision guides decision-making, around which all strategic initiatives are organized. Those without a solid vision struggle to provide context for their mission, goals, strategies, and implementation plans. This can hamper short-term performance and long-term organizational health. For an enterprise to be propelled forward in an aligned, meaningful and differentiated matter, the company’s vision must always come first. At West Monroe, we believe that a clear vision and a digital mindset are critical for a company to survive, thrive and win– not just compete. A clear strategic vision, defined at the outset, keeps our clients and their businesses: Defined All levels understand how and why digital efforts are critical for business success. Aligned Our vision guides and informs all strategic decisions and objectives. Energized Leaders motivate and incentivize employees at every level to rally around our organization’s vision We believe that exercising a strong strategic vision, in tandem with a truly digital mindset, lets you drive growth priorities by improving customer experience, enhancing data capabilities, and increasing scalability through process development. We help companies achieve their vision via our proprietary Digital Agility Model, which is designed to enable companies to compete and win in the digital world by benchmarking where you are today and how to get to where you want to be. The goal isn’t just great technology and a seamless customer experience—it’s agility. This means the acceptance that you can’t prepare for every outcome, but that you can be nimble enough to respond strategically to any challenge or opportunity, large or small. It’s time to rally together! As the guiding force for any business, Vision holds place at the top of the Digital Agility Model. This is because a shared vision for how to compete and win in a digital world informs everything an organization does. With a tight strategic vision in place, organizations have a meaningful foundation from which to capture the full potential of digital technologies in a powerful and well-coordinated way, while simultaneously inspiring, motivating, and generating meaningful commitment in an ever-evolving digital landscape. </p> </body> </html>',
          },
        },
      },
      CONTACT_SECTION: {
        V1: {
          object: {
            apiGoogleSheetUrl:
              'https://script.google.com/macros/s/AKfycbwn-tjHK1-uAQNo69Q7oC4imiA9QiXCRIU1o90vHEEJlAGD7W6H7847EBAXvSBzEO5jMw/exec',
            title: 'When optimal solutions are needed',
            description:
              'Always provide reliable solutions and advice compared to companies in the same industry. Cybertech is always the choice of companies in need.',
            phone: '+84 91 684 9891',
            email: 'Sales@cybertech.com.vn',
            location: '356a Vo Nguyen Giap Street, Ward 3, District 9, Ho Chi Minh City',
            form: {
              input: {
                FULL_NAME: { label: 'Full Name', error: 'This field is required' },
                EMAIL: { label: 'Email', error: 'This field is required' },
                PHONE: { label: 'Phone number', error: 'This field is required' },
                MESSAGE: { label: 'Message', error: 'This field is required' },
              },
              button: { label: 'Submit' },
            },
          },
        },
      },
      PRE_FOOTER_SECTION: {
        V1: { object: { title: 'Get to know us', button: { label: 'meet our team', link: '/our-team' } } },
      },
      DETAIL_SECTION: {
        TECHNOLOGY: {
          object: {
            title: 'New technology',
            array: [
              {
                id: '1',
                link: '/rugs-usa-exceeds-m-and-a-synergy-targets?id=1',
                title: 'Rugs USA exceeds M&A synergy targets by 60%',
                imgUrl:
                  'https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/rugsusaexceedsmahero2504x1440.jpg',
                object: {
                  HERO_LANDING_SECTION: {
                    DEFAULT: {
                      object: {
                        background: 'https://cdn.westmonroe.com/-/media/west-monroe-images/misc/our-offices.png',
                        title: 'Rugs USA | 2-minute read',
                        description: 'Rugs USA exceeds M&A synergy targets by 60%',
                      },
                    },
                  },
                  RICH_TEXT_SECTION: {
                    DEFAULT: {
                      object: {
                        content:
                          "<p>West Monroe's multidisciplinary teams work collaboratively across the firm to serve you in your local market. All locations embody our award-winning culture &ndash; but each office reflects something distinct to its region as well. That&rsquo;s because we&rsquo;re committed to the needs of our local employees, clients, and communities. Explore our locations below.</p>",
                      },
                    },
                  },
                },
              },
              {
                id: '2',
                link: '/ted-conferences?id=2',
                title: 'TED Conferences Uncovers AI As a Way to Spread Ideas 30% Faster',
                imgUrl:
                  'https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/unlocking-ted-conferences_2504_1440_hero_logo.jpg?cx=0.5&cy=0.5&cw=768&ch=432&hash=AC5A74A190BD1CBA9EF7B9EC35CB9717',
                object: {
                  HERO_LANDING_SECTION: {
                    DEFAULT: {
                      object: {
                        background: 'https://cdn.westmonroe.com/-/media/west-monroe-images/misc/our-offices.png',
                        title: 'TED Conferences, LLC | 3-minute read',
                        description: 'TED Conferences Uncovers AI As a Way to Spread Ideas 30% Faster',
                      },
                    },
                  },
                  RICH_TEXT_SECTION: {
                    DEFAULT: {
                      object: {
                        content:
                          "<div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <h2>The Challenge</h2> <p>TED has significantly expanded the channels through which it distributes content. In addition to hundreds of TED Talks curated from the organization&rsquo;s annual conferences and published on TED.com, the organization also produces original podcasts, short video series, animated TED-ED lessons, and TV programs that are translated in more than 100 languages and distributed via partnerships around the world.&nbsp;&nbsp;<br /><br />That growth led to multiple processes and technologies used to curate, produce, and promote content&mdash;ultimately straining the organization&rsquo;s resources.&nbsp;&nbsp;<br /><br />TED wanted to gain a better understanding of the work required to plan, design, and execute various event formats so that it could eliminate resource bottlenecks and establish more efficiency and consistency in its processes. By doing that, it would unlock new capacity to realize growth goals.</p> </div> </div> </div> </div> <div class='cmpt__project-timeline'> <div class='container'> <h2 class='project-timeline-heading headline2'>Project Timeline</h2> <div class='grid-x grid-margin-x align-center'> <div class='cell small-12 medium-6 large-3'> <div class='project-timeline-item'> <div class='project-timeline-item-number text-regal-blue'>1</div> <div class='project-timeline-item-text text-regal-blue'>week</div> <div class='project-timeline-item-description'>Mobilized West Monroe and TED teams to develop a project vision and timeline</div> </div> </div> <div class='cell small-12 medium-6 large-3'> <div class='project-timeline-item'> <div class='project-timeline-item-number text-regal-blue'>3</div> <div class='project-timeline-item-text text-regal-blue'>weeks</div> <div class='project-timeline-item-description'>Conducted interviews and functional workshops to assess current processes and capabilities</div> </div> </div> <div class='cell small-12 medium-6 large-3'> <div class='project-timeline-item'> <div class='project-timeline-item-number text-regal-blue'>2</div> <div class='project-timeline-item-text text-regal-blue'>weeks</div> <div class='project-timeline-item-description'>Developed high-level strategy maps to align TED teams around future operations</div> </div> </div> <div class='cell small-12 medium-6 large-3'> <div class='project-timeline-item'> <div class='project-timeline-item-number text-regal-blue'>2</div> <div class='project-timeline-item-text text-regal-blue'>Weeks</div> <div class='project-timeline-item-description'>Presented recommended changes and a roadmap for delivering them</div> </div> </div> </div> </div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <h2>An Undeniably Different Approach</h2> <p>TED wanted to make sure growth doesn&rsquo;t change the magic that makes its events special. We understood that&mdash;and made it central to our approach. TED leaders found our &ldquo;quality over growth&rdquo; core value aligned with their goal of making every event an experience. They also valued our collaborative style&mdash;making sure TED teams were involved at every step of the way.&nbsp;<br /><br />Our multidisciplinary perspective enabled us to look for opportunities across TED&rsquo;s operations. We dug deep to truly understand how the organization solicits, curates, produces, and ultimately markets different types of events that require different levels of resources and effort. By measuring processes, tools, and effort for hosting across various mediums, we could model capacity&mdash;showing TED how many events it can reasonably take on in a given year with current resources. With that as a baseline, we could begin finding ways to increase capacity.&nbsp;<br /><br />We know that digital businesses perform better. So we introduced new digital capabilities to achieve goals&mdash;using data to make resource planning decisions, artificial intelligence to work more efficiently, and process mapping to break down internal silos and promote greater collaboration.</p> </div> </div> </div> </div> <div class='cmpt__embed-container cmpt__image-container'> <div class='image-wrapper standard-image '> <div class='container'> <div class='grid-x'> <div class='cell'><img class='standard-image' src='https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/ted-graphic---internal---page-1.png' alt='ted west monroe client story' /></div> </div> </div> </div> <div class='container'>&nbsp;</div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>We then translated all of our recommendations into a practical plan of action that addresses TED&rsquo;s goals, with a balance of quick wins and longer-term transformational changes&mdash;all designed to help TED deliver more high-quality and special content.&nbsp;</p> </div> </div> </div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <h2>Real Results</h2> <p>In just eight weeks, TED gained valuable insights to transform event planning and delivery&mdash;and increase its capacity to spread ideas.&nbsp;<br /><br />By restructuring initial event definition and design processes, we estimate that TED&rsquo;s teams can begin event preparation up to 30% earlier in the event timeline&mdash;giving them more time to focus on success. Introducing artificial intelligence into processes such as speaker management could reduce the time required to complete tasks by up to 50 percent. Other process changes can create more time to send requests for bids, helping TED reduce vendor costs by up to 20 percent. And by reducing time spent on existing events, we estimate that TED can offer three to five additional new events per year with current resources.&nbsp;<br /><br />Our recommendations are also empowering a new commitment to collaboration across TED teams and functions&mdash;and that means both a better event experience for audiences and content creators as well as a more satisfying work experience for employees.</p> </div> </div> </div> </div> <div class='cmpt__client-testimonial background-white' data-js-hook='testimonial-carousel'> <div class='container'>&nbsp;</div> <div id='slick_a8f8b9' class='testimonial-slides carousel slick-initialized slick-slider'> <div class='slick-list draggable'> <div class='slick-track'> <div class='slick-slide slick-current slick-active' data-slick-index='0'> <div> <div class='client-testimonial-item'> <blockquote class='client-testimonial-content callout'> <div class='client-testimonial-text pullquote-2 callout'>West Monroe was able to effectively get to the heart of areas of inefficiency and/or frustration within our processes through thoughtful engagement with our team. They then suggested clear, actionable steps to better serve our employees and audiences.</div> <p class='client-testimonial-footer'><span class='client-testimonial-name'>Ladan Wise&nbsp;</span><span class='client-testimonial-info text-nevada'>Head of Strategic Operations, TED Conferences, LLC</span></p> </blockquote> </div> </div> </div> </div> </div> </div> </div> <div class='cmpt__imgtxt-feature '>&nbsp;</div>",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
        NEWS: {
          object: {
            title: 'News & Events',
            array: [
              {
                id: 'news',
                link: '/news',
                title: 'News & Events',
                imgUrl: '',
                object: {
                  HERO_LANDING_SECTION: {
                    DEFAULT: {
                      object: {
                        background:
                          'https://cdn.westmonroe.com/-/media/west-monroe-images/news/newsevents_landingpage-2504x1440.jpg',
                        title: 'News & Events',
                        description:
                          'We make moves in the market. The latest press releases, coverage of our data and opinions, and events. Need an expert? Media and speaker contacts, too.',
                      },
                    },
                  },
                  RICH_TEXT_SECTION: {
                    DEFAULT: {
                      object: {
                        content:
                          "<p>West Monroe's multidisciplinary teams work collaboratively across the firm to serve you in your local market. All locations embody our award-winning culture &ndash; but each office reflects something distinct to its region as well. That&rsquo;s because we&rsquo;re committed to the needs of our local employees, clients, and communities. Explore our locations below.</p>",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
        NEW_DETAIL: {
          object: {
            title: 'News Detail',
            loadDataResourceKey: 'newsEventsData',
            categoryId: 'category1',
            array: [],
            categofy: [],
          },
        },
        LEGAL_DETAIL: {
          object: { title: 'Legal Detail', loadDataResourceKey: 'legal', array: [] },
        },
      },
    },
  },
  untilConfig: {
    V1: {
      REVERSE_NAV_CLASS: {
        object: {
          array: ['/cookie-policy', '/privacy-policy', '/terms-of-use', '/sitemap', '/legal/:id', '/news/:id'],
        },
      },
    },
  },
  seoData: {
    HOME: { title: 'Trang chủ', ogTitle: 'Trang chủ', ogImage: '/cdn/logo.png', ogUrl: 'https://cybertech.com.vn/' },
    'ABOUT-US': {
      title: 'Về tôi',
      ogTitle: 'Về tôi',
      ogImage: '/cdn/logo.png',
      ogUrl: 'https://cybertech.com.vn/about-us',
    },
    SERVICES: {
      title: 'Dịch vụ',
      ogTitle: 'Dịch vụ',
      ogImage: '/cdn/logo.png',
      ogUrl: 'https://cybertech.com.vn/service',
    },
    PORTFOLIO: {
      title: 'Portfolio',
      ogTitle: 'Portfolio',
      ogImage: '/cdn/logo.png',
      ogUrl: 'https://cybertech.com.vn/portfolio',
    },
    CONTACT: {
      title: 'Liên hệ',
      ogTitle: 'Liên hệ',
      ogImage: '/cdn/logo.png',
      ogUrl: 'https://cybertech.com.vn/contact',
    },
  },
  dataList: {
    newsEventsData: {
      category: [
        { id: 'category1', name: 'News' },
        { id: 'category2', name: 'Story' },
      ],
      array: [
        {
          id: '1',
          categoryId: 'category1',
          link: '/news/west-monroe-appoints-chuck-kirchner-to-lead-chicago-office?id=1',
          title: 'West Monroe Appoints Chuck Kirchner to Lead Chicago Office',
          information: 'June 26, 2024 | Press Release | 2-minute read',
          imgUrl:
            'https://cdn.westmonroe.com/-/media/west-monroe-images/news/awards/chicago_tribune_2023.jpg?cx=0.5&cy=0.5&cw=768&ch=432&hash=728B23FB49A788D37936C157A29454E5',
          object: {
            PERSPECTIVES_ARTICLE_HERO: {
              DEFAULT: {
                object: {
                  background:
                    'https://cdn.westmonroe.com/-/media/west-monroe-images/news/newsevents_landingpage-2504x1440.jpg',
                  title: 'West Monroe Appoints Chuck Kirchner to Lead Chicago Office',
                  information: 'June 26, 2024 | Press Release | 2-minute read',
                },
              },
            },
            RICH_TEXT_SECTION: {
              DEFAULT: {
                object: {
                  content:
                    '<> Kirchner brings three decades of technology consulting experience to lead West Monroe’s largest office CHICAGO, June 26, 2024 – West Monroe, a global business and technology consulting firm, today announced Chuck Kirchner as its new Chicago office leader, effective July 1. Kirchner, currently a Senior Partner in the firm’s Technology &amp; Experience practice, has been with West Monroe since 2016. Kirchner brings over 30 years of strategic technology consulting experience to his new role—a background that is pivotal when serving companies that need to create value through technology. He will steer the firm’s client and talent development efforts in Chicago, community involvement, and market presence, while also fostering a collaborative office culture that is built on innovating with clients, mentorship, and fun. Kirchner has been instrumental in leading highly effective IT transformational initiatives, from strategy through execution, for both mid-market and Fortune 1000 clients during his tenure at West Monroe. As such, he will maintain a deep connection to the firm’s Technology &amp; Experience practice, leveraging his advisory and implementation expertise for both clients and employees across all industries that the firm serves. “Chuck has demonstrated exceptional leadership with our clients and people. His commitment to excellence and engagement with the broader civic community—both trademarks of a West Monroe leader—make him the ideal person to lead the Chicago market. We are excited about the energy and vision he will bring to this role as we continue to grow our presence and importance in Chicago,” said Gil Mermelstein, President at West Monroe. Kirchner will take the reins of West Monroe’s award-winning headquarters and the firm’s largest office in terms of real estate and employee headcount. Founded here in 2002, West Monroe is consistently recognized as one of the best workplaces in Chicago by Fortune and Great Place to Work, the Chicago Tribune and Built In. “I am honored to lead West Monroe in Chicago, a city I’ve called home for my entire professional career, and one that has strong technology roots and opportunities,” Kirchner said. I firmly believe that West Monroe has a unique place in Chicago’s economy with our roots in tech, our mission to build the next generation of leaders, and our proven ability to drive value for companies in traditional and highly regulated industries. With people as our biggest asset and investing in our distinctive culture, our team and client base is sure to grow in Chicago. ” Prior to joining West Monroe, Kirchner played various leadership roles at two other long-tenured jobs in Chicago including Forsythe Technology, leaving as Vice President of Consulting, Accenture, and a local start-up. He is currently the Vice Chair of the Technology Council for the Chicagoland Chamber of Commerce and an active supporter of various Chicagoland nonprofit organizations. He is also a University of Iowa alum. Kirchner assumes the Chicago market leader role from Jodi Bednar. About West Monroe West Monroe is a global business and technology consulting firm that partners with clients to accelerate value through technology. We stand out by not just working for, but with our clients—engaging in the journey of co-creation and aligning our goals with theirs. Our expertise spans industry, strategy, people, process, and technology, ensuring rapid and impactful outcomes. Our employee ownership structure and mindset drive this mutual success. We are consistently celebrated as a top workplace by Fortune and USA Today, and as a leading consultancy by Forbes and Forrester. Learn how we can help accelerate your business at WestMonroe.com. Media Inquiries Christina Galoozis Director, Communications &amp; Public Relations cgaloozis@westmonroe.com 847-302-1762 Shira Cohen Manager, Public Relations scohen@westmonroe.com 443-841-6879 </>',
                },
              },
            },
            RELATED_SECTION: {
              DEFAULT: {
                object: { title: 'Related News', loadDataResourceKey: 'newsEventsData', categoryId: 'category1' },
              },
            },
          },
        },
        {
          id: '2',
          categoryId: 'category1',
          link: '/news/chicago-tribune-names-west-monroe-a-winner-of-the-chicagoland-top-workplaces-2023-award?id=2',
          title: 'West Monroe ranks No. 6 on the Chicago Tribune’s Top Workplaces list',
          information: 'November 2023 | Award | 1-minute read',
          imgUrl:
            'https://cdn.westmonroe.com/-/media/west-monroe-images/news/awards/chicago_tribune_2023.jpg?cx=0.5&cy=0.5&cw=768&ch=432&hash=728B23FB49A788D37936C157A29454E5',
          object: {
            PERSPECTIVES_ARTICLE_HERO: {
              DEFAULT: {
                object: {
                  background:
                    'https://cdn.westmonroe.com/-/media/west-monroe-images/news/newsevents_landingpage-2504x1440.jpg',
                  title: 'West Monroe ranks No. 6 on the Chicago Tribune’s Top Workplaces list',
                  information: 'November 2023 | Award | 1-minute read',
                },
              },
            },
            RICH_TEXT_SECTION: {
              DEFAULT: {
                object: {
                  content:
                    "<div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text'>&nbsp;</div> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>West Monroe has been awarded a&nbsp;<a href='https://www.chicagotribune.com/paid-posts/chicago-tribune-top-workplaces-2023/?prx_t=SpAIAH-NgAeOgPA&amp;ntv_ui=3b6e7e9c-3273-45ad-9c67-ba6bb3e432d5&amp;ntv_ht=MEHaZAA' target='_blank' rel='noopener noreferrer'>Top Workplaces 2023 honor by the Chicago Tribune</a>&nbsp;in the large company category, ranking No. 6. This is West Monroe&rsquo;s 14th consecutive year being named to this prestigious list.</p> </div> </div> </div> </div> <div class='cmpt__embed-container cmpt__image-container'> <div class='image-wrapper standard-image '> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'><img class='standard-image' src='https://cdn.westmonroe.com/-/media/west-monroe-images/news/awards/chicago_tribune_2023_logo.jpg' alt='Chicago Tribune names West Monroe a winner of the Chicagoland Top Workplaces 2023 award' /></div> </div> </div> </div> <div class='container'>&nbsp;</div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>West Monroe was recognized in this annual workplace report, a combined effort between the Chicago Tribune and its partner, Energage. The list is based solely on employee feedback. The confidential survey uniquely measures 15 culture drivers that are critical to the success of any organization: including alignment, execution, and connection, just to name a few.</p> <p>'For the 14th year running, West Monroe is honored to be recognized as a top workplace by the Chicago Tribune,' said&nbsp;<a href='https://www.westmonroe.com/our-team/jodi-bednar'>Jodi Bednar</a>&nbsp;, West Monroe&rsquo;s Chicago office leader.</p> </div> </div> </div> </div> <div class='cmpt__quote cmpt__rich-text'> <div class='container quote-inner quote-inner-borders'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <blockquote class='pullquote-2 callout'> <p>Our unwavering dedication to our culture has been the cornerstone of our success and this award is a testament to the collective efforts of our people. As our headquarters and largest office, it reinforces our commitment to providing meaningful growth opportunities, all while building the next generation of leaders to continue delivering excellent client service and serving the Chicago community.</p> &nbsp;&rdquo;</blockquote> </div> </div> </div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>Founded in 2002 and headquartered in&nbsp;<a href='https://www.westmonroe.com/offices/chicago'>Chicago</a>, West Monroe has grown to more than 2,000 employees worldwide, with 960 employees in the Chicago office. The Chicago office serves a multitude of clients in the financial services, private equity, consumer and industrial products, energy and utilities, retail, high-tech and software, and healthcare and life sciences industries.</p> <p>Like all West Monroe offices, the Chicago team is a highly participatory and collaborative culture marked by frequent events, transparent employee communications, a strong commitment to serving the local community through its corporate social responsibility program, a deep focus on inclusion and diversity through employee-led resource groups, and regular recognition awards.</p> <p>&ldquo;Earning a Top Workplaces award is a badge of honor for companies, especially because it comes authentically from their employees,&rdquo; said Eric Rubino, Energage CEO. &ldquo;That's something to be proud of. In today's market, leaders must ensure they&rsquo;re allowing employees to have a voice and be heard. That's paramount. Top Workplaces do this, and it pays dividends.&rdquo;</p> <p>The rankings were revealed at an awards ceremony on November 7.</p> </div> </div> </div> </div> <div class='cmpt__related-stories  background-white' data-js-hook=''>&nbsp;</div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class='cmpt__imgtxt-feature '>&nbsp;</div>",
                },
              },
            },
            RELATED_SECTION: {
              DEFAULT: {
                object: { title: 'Related News', loadDataResourceKey: 'newsEventsData', categoryId: 'category1' },
              },
            },
          },
        },
        {
          id: '3',
          categoryId: 'category1',
          link: '/news/chicago-tribune-names-west-monroe-a-winner-of-the-chicagoland-top-workplaces-2023-award?id=3',
          title: 'West Monroe ranks No. 6 on the Chicago Tribune’s Top Workplaces list',
          information: 'November 2023 | Award | 1-minute read',
          imgUrl:
            'https://cdn.westmonroe.com/-/media/west-monroe-images/news/awards/awardhero_2504x1440.jpg?cx=0.5&cy=0.5&cw=768&ch=432&hash=50CACA3A18E2AFB6FA12320B575B82D4',
          object: {
            PERSPECTIVES_ARTICLE_HERO: {
              DEFAULT: {
                object: {
                  background:
                    'https://cdn.westmonroe.com/-/media/west-monroe-images/news/newsevents_landingpage-2504x1440.jpg',
                  title: 'West Monroe ranks No. 6 on the Chicago Tribune’s Top Workplaces list',
                  information: 'November 2023 | Award | 1-minute read',
                },
              },
            },
            RICH_TEXT_SECTION: {
              DEFAULT: {
                object: {
                  content:
                    "<div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text'>&nbsp;</div> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>West Monroe has been awarded a&nbsp;<a href='https://www.chicagotribune.com/paid-posts/chicago-tribune-top-workplaces-2023/?prx_t=SpAIAH-NgAeOgPA&amp;ntv_ui=3b6e7e9c-3273-45ad-9c67-ba6bb3e432d5&amp;ntv_ht=MEHaZAA' target='_blank' rel='noopener noreferrer'>Top Workplaces 2023 honor by the Chicago Tribune</a>&nbsp;in the large company category, ranking No. 6. This is West Monroe&rsquo;s 14th consecutive year being named to this prestigious list.</p> </div> </div> </div> </div> <div class='cmpt__embed-container cmpt__image-container'> <div class='image-wrapper standard-image '> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'><img class='standard-image' src='https://cdn.westmonroe.com/-/media/west-monroe-images/news/awards/chicago_tribune_2023_logo.jpg' alt='Chicago Tribune names West Monroe a winner of the Chicagoland Top Workplaces 2023 award' /></div> </div> </div> </div> <div class='container'>&nbsp;</div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>West Monroe was recognized in this annual workplace report, a combined effort between the Chicago Tribune and its partner, Energage. The list is based solely on employee feedback. The confidential survey uniquely measures 15 culture drivers that are critical to the success of any organization: including alignment, execution, and connection, just to name a few.</p> <p>'For the 14th year running, West Monroe is honored to be recognized as a top workplace by the Chicago Tribune,' said&nbsp;<a href='https://www.westmonroe.com/our-team/jodi-bednar'>Jodi Bednar</a>&nbsp;, West Monroe&rsquo;s Chicago office leader.</p> </div> </div> </div> </div> <div class='cmpt__quote cmpt__rich-text'> <div class='container quote-inner quote-inner-borders'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <blockquote class='pullquote-2 callout'> <p>Our unwavering dedication to our culture has been the cornerstone of our success and this award is a testament to the collective efforts of our people. As our headquarters and largest office, it reinforces our commitment to providing meaningful growth opportunities, all while building the next generation of leaders to continue delivering excellent client service and serving the Chicago community.</p> &nbsp;&rdquo;</blockquote> </div> </div> </div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>Founded in 2002 and headquartered in&nbsp;<a href='https://www.westmonroe.com/offices/chicago'>Chicago</a>, West Monroe has grown to more than 2,000 employees worldwide, with 960 employees in the Chicago office. The Chicago office serves a multitude of clients in the financial services, private equity, consumer and industrial products, energy and utilities, retail, high-tech and software, and healthcare and life sciences industries.</p> <p>Like all West Monroe offices, the Chicago team is a highly participatory and collaborative culture marked by frequent events, transparent employee communications, a strong commitment to serving the local community through its corporate social responsibility program, a deep focus on inclusion and diversity through employee-led resource groups, and regular recognition awards.</p> <p>&ldquo;Earning a Top Workplaces award is a badge of honor for companies, especially because it comes authentically from their employees,&rdquo; said Eric Rubino, Energage CEO. &ldquo;That's something to be proud of. In today's market, leaders must ensure they&rsquo;re allowing employees to have a voice and be heard. That's paramount. Top Workplaces do this, and it pays dividends.&rdquo;</p> <p>The rankings were revealed at an awards ceremony on November 7.</p> </div> </div> </div> </div> <div class='cmpt__rich-text'>&nbsp;</div> <div class='cmpt__related-stories  background-white' data-js-hook=''>&nbsp;</div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class='cmpt__imgtxt-feature '>&nbsp;</div>",
                },
              },
            },
            RELATED_SECTION: {
              DEFAULT: {
                object: { title: 'Related News', loadDataResourceKey: 'newsEventsData', categoryId: 'category1' },
              },
            },
          },
        },
        {
          id: '4',
          categoryId: 'category1',
          link: '/news/west-monroes-madison-myers-named-2023-built-in-moxie-award-winner?id=4',
          title: 'West Monroe’s Madison Myers named a 2023 Built In Moxie award winner',
          information: 'May 2023 | Award | 1-minute read',
          imgUrl:
            'https://cdn.westmonroe.com/-/media/west-monroe-images/news/awards/2023moxieawards_socialimage_westmonroe_madisonmyersawardhero_2504x1440.jpg?cx=0.5&cy=0.5&cw=768&ch=432&hash=245C1659CB10FA2CF4239DA3A58CD201',
          object: {
            PERSPECTIVES_ARTICLE_HERO: {
              DEFAULT: {
                object: {
                  background:
                    'https://cdn.westmonroe.com/-/media/west-monroe-images/news/newsevents_landingpage-2504x1440.jpg',
                  title: 'West Monroe’s Madison Myers named a 2023 Built In Moxie award winner',
                  information: 'May 2023 | Award | 1-minute read',
                },
              },
            },
            RICH_TEXT_SECTION: {
              DEFAULT: {
                object: {
                  content:
                    "<div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text cmpt__plain-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>West Monroe is proud to announce that Madison Myers, a senior manager in the firm&rsquo;s&nbsp;<a href='https://www.westmonroe.com/services/data-and-technology'>Technology practice</a>, has been named a&nbsp;<a href='https://builtin.com/women-tech/moxie-award-winners' target='_blank' rel='noopener noreferrer'>2023 Built In Moxie award winner</a>. Built In&rsquo;s Moxie Awards honor rising women in tech for their outsized contributions &mdash; skills, leadership, and accomplishments &mdash; to their places of work, communities, and the industry as a whole.</p> </div> </div> </div> </div> <div class='cmpt__embed-container cmpt__image-container'> <div class='image-wrapper standard-image '> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'><img class='standard-image' src='https://cdn.westmonroe.com/-/media/west-monroe-images/news/awards/2023moxieawards_socialimage_westmonroe_madisonmyersawardhero_2504x1440_withlogo.jpg' alt='the moxie awards' /></div> </div> </div> </div> <div class='container'>&nbsp;</div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>&ldquo;It is no surprise that Madison has been named a 2023 Built in Moxie award winner,&rdquo; said&nbsp;<a href='https://www.westmonroe.com/our-team/cory-chaplin'>Cory Chaplin</a>, leader of West Monroe&rsquo;s technology practice.</p> </div> </div> </div> </div> <div class='cmpt__quote cmpt__rich-text'> <div class='container quote-inner quote-inner-borders'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <blockquote class='pullquote-2 callout'> <p>Madison exemplifies Moxie, not just in her know-how as a data and analytics expert helping our clients become digital by harnessing their data to become data-driven, but also through her outsized passion, energy, and courage to take on and solve difficult challenges, and her commitment and determination to uplifting other women. Thanks, Madison, for all you do and congratulations on this well-deserved recognition.</p> &nbsp;&rdquo;</blockquote> </div> </div> </div> </div> <div class='cmpt__rich-text'> <div class='container'> <div class='grid-x'> <div class='cell large-8 large-offset-2'> <p>As a senior manager in West Monroe&rsquo;s Technology practice, Madison specializes in Data Engineering &amp; Analytics. She has over nine years of experience working in the data analytics and visualization space and is passionate about using analytics to help her clients become more data driven. She has provided technical assistance to clients across a range of industries including healthcare and banking.&nbsp; If there&rsquo;s one thing that energizes Madison more than anything else, it is empowering the next generation of women leaders to find and use their voices to achieve their aspirations. As the&nbsp;<a href='https://www.westmonroe.com/careers/resources/resource/womens-leadership-network'>Chicago Women&rsquo;s Leadership Network (WLN)</a>&nbsp;Co-Lead and a WLN Career Champion Mentor, she deliberately spends her time formally and informally coaching colleagues across the firm. Madison is also passionate about supporting her women peers in the technology practice, ensuring project teams include diverse experiences, backgrounds, and ideas.</p> <p>The 2023 Moxie Awards celebrate women who are likely to ascend to the pinnacle of their careers in tech &mdash; and who are already on their way &mdash; rather than honoring C-suite or VP-level leaders. This may include people with titles like director, individual contributor, manager &mdash; or any role with room to rise. &ldquo;Moxie&rdquo; is defined as a combination of courage, determination, energy and know-how. When it comes to recognizing women in tech, we know that these are the qualities that drive them &mdash; and the qualities worth celebrating.</p> <p>Each nomination was reviewed by a panel of tech leaders whose identifying information is redacted to reduce bias. Built In chose to represent women rising in their careers who are creating change from the ground floor of tech. The result is an impressive line-up of visionaries who have broken barriers to shape a bright future of technical excellence and inclusivity for women and other demographics in this industry. One hundred women, including Madison, were selected as Moxie award winners out of nearly 800 nominations.&nbsp;</p> </div> </div> </div> </div> <div class='cmpt__related-stories  background-white' data-js-hook=''>&nbsp;</div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class='cmpt__imgtxt-feature '>&nbsp;</div>",
                },
              },
            },
            RELATED_SECTION: {
              DEFAULT: {
                object: { title: 'Related News', loadDataResourceKey: 'newsEventsData', categoryId: 'category1' },
              },
            },
          },
        },
      ],
    },
    social: {
      array: [
        {
          id: 'LinkedIn',
          label: 'LinkedIn',
          link: 'https://www.linkedin.com/company/westmonroe/',
          svgIcon:
            '<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><path d="M1.937 3.874C3.007 3.874 3.874 3.007 3.874 1.937C3.874 0.867 3.007 0 1.937 0C0.867 0 0 0.867 0 1.937C0 3.007 0.867 3.874 1.937 3.874ZM16.9009 9.9011L16.9009 15.8751C16.9009 16.0221 16.7809 16.1421 16.6339 16.1421L13.5499 16.1421C13.4019 16.1421 13.2819 16.0221 13.2819 15.8751L13.2819 10.3191C13.2819 8.85711 12.7599 7.85811 11.4499 7.85811C10.4499 7.85811 9.85688 8.53111 9.59388 9.18211C9.49888 9.41411 9.47388 9.73711 9.47388 10.0631L9.47388 15.8741C9.47388 16.0221 9.35488 16.1421 9.20688 16.1421L6.12388 16.1421C5.97588 16.1421 5.85588 16.0231 5.85688 15.8741C5.8572 15.7951 5.85759 15.6998 5.85805 15.5899C5.86611 13.6435 5.89312 7.12596 5.86188 5.52911C5.85988 5.37911 5.98088 5.25811 6.12988 5.25811L9.20688 5.25811C9.35488 5.25811 9.47488 5.37811 9.47488 5.5261L9.47488 6.80111C9.46688 6.81311 9.45688 6.82511 9.44988 6.83611L9.47488 6.83611L9.47488 6.80111C9.95488 6.06111 10.8129 5.00311 12.7349 5.00311C15.1159 5.00311 16.9009 6.55911 16.9009 9.9011ZM3.5869 16.1421L0.503901 16.1421C0.356901 16.1421 0.235901 16.0221 0.235901 15.8751L0.235901 5.5261C0.235901 5.3781 0.356901 5.2581 0.503901 5.2581L3.5869 5.2581C3.7339 5.2581 3.8549 5.3781 3.8549 5.5261L3.8549 15.8751C3.8549 16.0221 3.7339 16.1421 3.5869 16.1421Z" id="Fill-4" fillRule="evenodd" stroke="none"/></svg>',
        },
        {
          id: 'Facebook',
          label: 'Facebook',
          link: 'http://www.facebook.com/westmonroe',
          svgIcon:
            '<svg width="9px" height="20px" viewBox="0 0 9 20" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n  <desc>Created with Lunacy</desc>\n  <path d="M1.963 9.666L1.963 18.939C1.963 19.073 2.071 19.181 2.204 19.181L5.649 19.181C5.781 19.181 5.89 19.073 5.89 18.939L5.89 9.515L8.387 9.515C8.512 9.515 8.616 9.419 8.627 9.294L8.867 6.454C8.879 6.313 8.768 6.192 8.626 6.192L5.89 6.192L5.89 4.178C5.89 3.706 6.273 3.323 6.744 3.323L8.669 3.323C8.802 3.323 8.91 3.215 8.91 3.081L8.91 0.242C8.91 0.108 8.802 0 8.669 0L5.418 0C3.51 0 1.963 1.547 1.963 3.455L1.963 6.192L0.241 6.192C0.108 6.192 0 6.3 0 6.434L0 9.273C0 9.407 0.108 9.515 0.241 9.515L1.963 9.515L1.963 9.666Z" id="Fill-4" stroke="none"></path>\n</svg>',
        },
        {
          id: 'Twitter',
          label: 'Twitter',
          link: 'http://www.twitter.com/westmonroe',
          svgIcon:
            '<svg width="17" height="18" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">\n  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>\n</svg>',
        },
        {
          id: 'Instagram',
          label: 'Instagram',
          link: 'https://www.instagram.com/wearewestmonroe',
          svgIcon:
            '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <title>Instagram icon</title>\n  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>\n</svg>',
        },
        {
          id: 'Youtube',
          label: 'Youtube',
          link: 'https://www.youtube.com/user/wmpgowest',
          svgIcon:
            '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <title>YouTube icon</title>\n  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path>\n</svg>',
        },
        {
          id: 'Glassdoor',
          label: 'Glassdoor',
          link: 'https://www.glassdoor.com/Overview/Working-at-West-Monroe-Partners-EI_IE118343.11,31.htm',
          svgIcon:
            '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <title>Glassdoor icon</title>\n  <path d="M17.144 20.572H3.43C3.43 22.465 4.963 24 6.856 24h10.286c1.893 0 3.428-1.535 3.428-3.428V6.492c0-.07-.054-.125-.124-.125h-3.18c-.067 0-.123.056-.123.126v14.08zm0-20.572c1.892 0 3.427 1.535 3.427 3.43H6.858v14.078c0 .068-.056.125-.125.125H3.554c-.07 0-.125-.057-.125-.125V3.428C3.43 1.536 4.963 0 6.856 0h10.287"></path>\n</svg>',
        },
      ],
    },
    legal: {
      array: [
        {
          id: 'cookie-policy',
          link: '/cookie-policy',
          title: 'Cookie Policy',
          imgUrl: '',
          object: {
            STATIC_PAGE_SECTION: {
              DEFAULT: {
                object: {
                  title: 'Cookie Policy',
                  content:
                    "<p>Below is information about how West Monroe Partners LLC and its affiliates (&ldquo;we&rdquo;) use cookies and other similar technology on this website. By continuing to use this website you agree that we can place cookies and other similar technology on your device, including mobile device, per your agreement with our cookie consent manager. By continuing to use your mobile device to access this website, you agree that the following information may be collected: your unique device identifier, mobile device IP address, information about your device&rsquo;s operating system, mobile carrier and your location information (to the extent permissible under applicable law).</p> <p>What are cookies? Cookies are text files containing small amounts of information which are downloaded to your computer or mobile device when you visit a site and allow a site to recognize your device.</p> <p>Why do we use cookies and similar technologies? Cookies do a lot of different jobs, such as letting you navigate between pages efficiently, remembering your preferences and generally improving the user experience. They can also help to ensure that the advertisements you see online are more relevant to you and your interests.</p> <p>Does West Monroe use cookies for marketing and analytics? Yes, we may use information collected from our cookies to identify user behavior and to serve content and offers based on your profile, and for the other purposes described below, to the extent legally permissible in certain jurisdictions.</p> <p>Some of the cookies we use don't collect information that identifies a visitor. For example:</p> <p>Performance cookies (see below) Targeting cookies (see below) In other cases, we can associate cookie information (including information from cookies placed via our advertisements on third party sites) with an identifiable individual. For example:</p> <p>If we send you a targeted email which includes web beacons, cookies or similar technologies we will know whether you open, read, or delete the message. When you click a link in a marketing e-mail you receive from West Monroe, we will also use a cookie to log what pages you view and what content you download from our websites, even if you are not registered at or signed into our site. Combining and analyzing personal data: As described above, we may combine data from publicly available sources, and from our different e-mail, website, and personal interactions with you (this includes information collected across our different websites such as our careers and corporate sites and information collected when you sign-up or log on to our sites or connect to our sites using your social media credentials (such as LinkedIn and Facebook). We combine this data to better assess your experience with West Monroe and to perform the other activities described throughout our privacy policy. Do you use any cookies from third party companies? Some cookies we use are from third party companies, such as Google Analytics, Sitecore, Salesforce and LinkedIn Analytics to provide us with web analytics and intelligence about our sites. These companies use programming code to collect information about your interaction with our sites, such as the pages you visit, the links you click on and how long you are on our sites. This code is only active while you are on a West Monroe digital property. For more information on how these companies collect and use information on our behalf, please refer to their privacy policies:, Google at Google Privacy &amp; Terms, Sitecore at Sitecore Privacy Policy and Salesforce at Salesforce Privacy Policy, LinkedIn at LinkedIn Privacy Policy and Facebook at Facebook Privacy Policy.</p> <p>Does West Monroe use any non-cookie tracking technologies? We may also use web beacons (including conversion pixels) or other technologies for similar purposes as above and we may include these on our sites, in marketing e-mail messages or our newsletter, affiliated websites, to determine whether messages have been opened and links clicked on. Web beacons do not place information on your device, but they may work in conjunction with cookies to monitor website activity. The information provided below about cookies also applies to web beacons and similar technologies. Conversion pixels are small codes located on a particular web page which are triggered when someone visits a page resulting in an increase in the conversion count.</p> <p>What if I don&rsquo;t want cookies? By using our site, you agree that we can place cookies on your device as explained below. If you want to remove existing cookies from your device, you can do this using your browser options. If you want to block future cookies being placed on your device, you can change your browser settings to do this. For more information on managing cookies see How to Manage Cookies. Currently, &quot;Do Not Track&quot; initiatives are not recognized by our site.</p> <p>Please bear in mind that deleting and blocking cookies will have an impact on your user experience as parts of the site may no longer work. Unless you have adjusted your browser settings to block cookies, our system will issue cookies as soon as you visit our site or click on a link in a targeted email that we have sent you, even if you have previously deleted our cookies.</p> <p>What types of cookies are there and which ones does the site use? The cookies used on West Monroe sites have been categorized on the basis of the categories found on Cookiepedia. However, it is important to note that not all cookies may be used in all jurisdictions or websites. A list of all the cookies used on this site by category is set out below. Within these four categories below, cookies are classified as either session or persistent cookies.</p> <p>&ldquo;Session&rdquo; cookies are temporary and once you close the browser window, they are deleted from your device.</p> <p>&ldquo;Persistent&rdquo; cookies remain on your device for a longer period and are used by the website to recognize your device when you return. You can find more information about cookies at All About Cookies.</p> <p>West Monroe uses both session and persistent cookies.</p> <p>Category</p> <p>Examples</p> <p>Strictly Necessary cookies: These cookies are essential in order to enable you to move around the site and use its features, such as accessing secure areas of the site. Without these cookies, services you have asked for cannot be provided.</p> <p>We categorize the following as Strictly Necessary cookies:</p> <p>Registered Visitor cookie: A unique identifier given to each registered user, used to recognize them through their visit and when they return to the site. (See also Functionality cookies below.)</p> <p>Performance cookies: These cookies are generally third-party cookies from vendors we work with or who work on our behalf that collect information about your visit and use of the West Monroe website, for instance which pages you visit the most often, and if you get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is anonymous and is only used to improve how the website works. Third party vendors may have access to this data and may use it to improve their overall services and offerings.</p> <p>We categorize the following as Performance cookies:</p> <p>Referrer URL (internal page): Used to store the URL of the previous page visited. Allows us to track how visitors navigate throughout our site.</p> <p>Referrer URL (external page, including if you click on links on West Monroe social media pages): Used to store the URL which refers a visitor to our site so we may understand which URLs are referring visitors to our site.</p> <p>URL history: Used to store the pages visited by a user.</p> <p>Unregistered Visitor cookie: A unique identifier given to each visitor to allow analysis on how unregistered visitors use our site.</p> <p>Session Management cookies: These cookies allow us to follow the actions of a user on our sites during a browser session. A browser session starts when a user opens the browser window, visits our sites and finishes when they leave our sites and close their browser window. Our Session Management cookies are created temporarily. Once you close your browser, our Session Management cookies are deleted. Gathering analytics and intelligence cookies</p> <p>Functionality cookies: These cookies allow a site to remember choices you make and provide more enhanced, personal features. These cookies cannot track your browsing activity on other websites. They don&rsquo;t gather any information about you that could be used for advertising or remembering where you&rsquo;ve been on the Internet outside our site.</p> <p>We categorize the following as Functionality cookies:</p> <p>Registered Visitor cookie: A unique identifier given to each registered user to our site, used to serve them content and offers based on their profiles. Also used for analysis and marketing purposes. (See also Strictly Necessary cookies above.)</p> <p>Targeting Cookies: These cookies are used to (1) deliver advertisements more relevant to you and your interests; (2) limit the number of times you see an advertisement; (3) help measure the effectiveness of the advertising campaign; and (4) understand people&rsquo;s behavior after they view an advertisement. They are usually placed on behalf of advertising networks with the site operator&rsquo;s permission. They remember that you have visited a site and quite often they will be linked to site functionality provided by the other organization.</p> <p>We categorize the following as Targeting Cookies:</p> <p>Third Party cookies: The Targeting cookies may also be used on third party websites and third parties may use them on our websites as follows:</p> <p>Social media sites: Third-party social media sites may log information about you. This may include activities such as when you click an &quot;Add This&quot; or &quot;Like&quot; button for a social media site while on our site. We do not control such sites or their activities. You may be able to find information about social media sites on the sites themselves. We recommend you read the terms of use and privacy policy of such sites before using them.</p> <p>West Monroe advertisements on non-West Monroe sites: Cookies may be placed on non-West Monroe sites so that when you click on a West Monroe advertisement located on these sites, West Monroe is provided with this information to enable us to measure the effectiveness of our advertising.</p> <p>If you have any questions now or during your visit, please submit your request through our Contact Us form. In addition, to find the West Monroe office in your state, visit our Office Directory page.</p> <p>You can adjust your cookie settings at any time from our cookie consent manager.</p>",
                },
              },
            },
          },
        },
        {
          id: 'privacy-policy',
          link: '/privacy-policy',
          title: 'Privacy Policy',
          imgUrl: '',
          object: {
            STATIC_PAGE_SECTION: {
              DEFAULT: {
                object: {
                  title: 'Privacy Policy',
                  content:
                    "&lt;div class=&quot;cell large-8 large-offset-2&quot;&gt; &lt;h2&gt;Below is information about how West Monroe Partners LLC and its affiliates (&ldquo;we&rdquo;) use cookies and other similar technology on this website. &lt;/h2&gt; &lt;p&gt;By continuing to use this website you agree that we can place cookies and other similar technology on your device, including mobile device, per your agreement with our cookie consent manager. By continuing to use your mobile device to access this website, you agree that the following information may be collected: your unique device identifier, mobile device IP address, information about your device&rsquo;s operating system, mobile carrier and your location information (to the extent permissible under applicable law).&lt;/p&gt; &lt;h3&gt;What are cookies?&lt;/h3&gt; &lt;p&gt;Cookies are text files containing small amounts of information which are downloaded to your computer or mobile device when you visit a site and allow a site to recognize your device.&lt;/p&gt; &lt;h3&gt;Why do we use cookies and similar technologies?&lt;/h3&gt; &lt;p&gt;Cookies do a lot of different jobs, such as letting you navigate between pages efficiently, remembering your preferences and generally improving the user experience. They can also help to ensure that the advertisements you see online are more relevant to you and your interests.&lt;/p&gt; &lt;h3&gt;Does West Monroe use cookies for marketing and analytics?&lt;/h3&gt; &lt;p&gt;Yes, we may use information collected from our cookies to identify user behavior and to serve content and offers based on your profile, and for the other purposes described below, to the extent legally permissible in certain jurisdictions.&lt;/p&gt; &lt;p&gt;Some of the cookies we use don't collect information that identifies a visitor. For example:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Performance cookies (see below)&lt;/li&gt; &lt;li&gt;Targeting cookies (see below)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;In other cases, we can associate cookie information (including information from cookies placed via our advertisements on third party sites) with an identifiable individual. For example:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;If we send you a targeted email which includes web beacons, cookies or similar technologies we will know whether you open, read, or delete the message.&lt;/li&gt; &lt;li&gt;When you click a link in a marketing e-mail you receive from West Monroe, we will also use a cookie to log what pages you view and what content you download from our websites, even if you are not registered at or signed into our site.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Combining and analyzing personal data:&lt;/strong&gt; As described above, we may combine data from publicly available sources, and from our different e-mail, website, and personal interactions with you (this includes information collected across our different websites such as our careers and corporate sites and information collected when you sign-up or log on to our sites or connect to our sites using your social media credentials (such as LinkedIn and Facebook). We combine this data to better assess your experience with West Monroe and to perform the other activities described throughout our privacy policy.&lt;/li&gt; &lt;/ul&gt; &lt;h3&gt;Do you use any cookies from third party companies?&lt;/h3&gt; &lt;p&gt;Some cookies we use are from third party companies, such as Google Analytics, Sitecore, Salesforce and LinkedIn Analytics to provide us with web analytics and intelligence about our sites. These companies use programming code to collect information about your interaction with our sites, such as the pages you visit, the links you click on and how long you are on our sites. This code is only active while you are on a West Monroe digital property. For more information on how these companies collect and use information on our behalf, please refer to their privacy policies:, Google at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.google.com/intl/en/policies/&quot; target=&quot;_blank&quot;&gt;Google Privacy &amp;amp; Terms&lt;/a&gt;, Sitecore at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.sitecore.com/trust/privacy-policy&quot; target=&quot;_blank&quot;&gt;Sitecore Privacy Policy&lt;/a&gt;&amp;nbsp;and Salesforce at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.salesforce.com/company/privacy/&quot; target=&quot;_blank&quot;&gt;Salesforce Privacy Policy&lt;/a&gt;, LinkedIn at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.linkedin.com/legal/privacy-policy&quot; target=&quot;_blank&quot;&gt;LinkedIn Privacy Policy&lt;/a&gt; and Facebook at &lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.facebook.com/policy.php&quot; target=&quot;_blank&quot;&gt;Facebook Privacy Policy&lt;/a&gt;.&lt;/p&gt; &lt;h3&gt;Does West Monroe use any non-cookie tracking technologies?&lt;/h3&gt; &lt;p&gt;We may also use web beacons (including conversion pixels) or other technologies for similar purposes as above and we may include these on our sites, in marketing e-mail messages or our newsletter, affiliated websites, to determine whether messages have been opened and links clicked on. Web beacons do not place information on your device, but they may work in conjunction with cookies to monitor website activity. The information provided below about cookies also applies to web beacons and similar technologies. Conversion pixels are small codes located on a particular web page which are triggered when someone visits a page resulting in an increase in the conversion count.&lt;/p&gt; &lt;h3&gt;What if I don&rsquo;t want cookies?&lt;/h3&gt; &lt;p&gt;By using our site, you agree that we can place cookies on your device as explained below. If you want to remove existing cookies from your device, you can do this using your browser options. If you want to block future cookies being placed on your device, you can change your browser settings to do this. For more information on managing cookies see&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/how-to-manage-cookies&quot; target=&quot;_blank&quot;&gt;How to Manage Cookies&lt;/a&gt;. Currently, &quot;Do Not Track&quot; initiatives are not recognized by our site.&lt;/p&gt; &lt;p&gt;Please bear in mind that deleting and blocking cookies will have an impact on your user experience as parts of the site may no longer work. Unless you have adjusted your browser settings to block cookies, our system will issue cookies as soon as you visit our site or click on a link in a targeted email that we have sent you, even if you have previously deleted our cookies.&lt;/p&gt; &lt;h3&gt;What types of cookies are there and which ones does the site use?&lt;/h3&gt; &lt;p&gt;The cookies used on West Monroe sites have been categorized on the basis of the categories found on &lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/about-cookiepedia&quot; target=&quot;_blank&quot;&gt;Cookiepedia&lt;/a&gt;. However, it is important to note that not all cookies may be used in all jurisdictions or websites. A list of all the cookies used on this site by category is set out below. Within these four categories below, cookies are classified as either session or persistent cookies.&lt;/p&gt; &lt;p&gt;&ldquo;Session&rdquo; cookies are temporary and once you close the browser window, they are deleted from your device.&lt;/p&gt; &lt;p&gt;&ldquo;Persistent&rdquo; cookies remain on your device for a longer period and are used by the website to recognize your device when you return. You can find more information about cookies at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/all-about-cookies&quot; target=&quot;_blank&quot;&gt;All About Cookies&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;West Monroe uses both session and persistent cookies.&lt;/p&gt; &lt;table style=&quot;border: 1px solid #bfbfbf; width: 797.73px; height: 84px; border-collapse: collapse;&quot; cellpadding=&quot;2&quot;&gt; &lt;tbody&gt; &lt;tr&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Category&lt;/strong&gt;&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Examples&lt;/strong&gt;&lt;/p&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Strictly Necessary cookies: &lt;br&gt; &lt;/strong&gt;These cookies are essential in order to enable you to move around the site and use its features, such as accessing secure areas of the site. Without these cookies, services you have asked for cannot be provided.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Strictly Necessary&lt;/strong&gt;&amp;nbsp;cookies:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Registered Visitor cookie: A unique identifier given to each registered user, used to recognize them through their visit and when they return to the site. (See also Functionality cookies below.)&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Performance cookies:&lt;/strong&gt; &lt;br&gt; These cookies are generally third-party cookies from vendors we work with or who work on our behalf that collect information about your visit and use of the West Monroe website, for instance which pages you visit the most often, and if you get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is anonymous and is only used to improve how the website works. Third party vendors may have access to this data and may use it to improve their overall services and offerings.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Performance cookies&lt;/strong&gt;:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Referrer URL (internal page): Used to store the URL of the previous page visited. Allows us to track how visitors navigate throughout our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Referrer URL (external page, including if you click on links on West Monroe social media pages): Used to store the URL which refers a visitor to our site so we may understand which URLs are referring visitors to our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;URL history: Used to store the pages visited by a user.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Unregistered Visitor cookie: A unique identifier given to each visitor to allow analysis on how unregistered visitors use our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Session Management cookies: These cookies allow us to follow the actions of a user on our sites during a browser session. A browser session starts when a user opens the browser window, visits our sites and finishes when they leave our sites and close their browser window. Our Session Management cookies are created temporarily. Once you close your browser, our Session Management cookies are deleted. Gathering analytics and intelligence cookies&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Functionality cookies: &lt;/strong&gt;&lt;br&gt; These cookies allow a site to remember choices you make and provide more enhanced, personal features. These cookies cannot track your browsing activity on other websites. They don&rsquo;t gather any information about you that could be used for advertising or remembering where you&rsquo;ve been on the Internet outside our site.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Functionality&lt;/strong&gt;&amp;nbsp;cookies: &lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Registered Visitor cookie: A unique identifier given to each registered user to our site, used to serve them content and offers based on their profiles. Also used for analysis and marketing purposes. (See also Strictly Necessary cookies above.)&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Targeting Cookies: &lt;/strong&gt;&lt;br&gt; These cookies are used to (1) deliver advertisements more relevant to you and your interests; (2) limit the number of times you see an advertisement; (3) help measure the effectiveness of the advertising campaign; and (4) understand people&rsquo;s behavior after they view an advertisement. They are usually placed on behalf of advertising networks with the site operator&rsquo;s permission. They remember that you have visited a site and quite often they will be linked to site functionality provided by the other organization.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as &lt;strong&gt;Targeting&lt;/strong&gt; Cookies:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Third Party cookies: The Targeting cookies may also be used on third party websites and third parties may use them on our websites as follows: &lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Social media sites: Third-party social media sites may log information about you. This may include activities such as when you click an &quot;Add This&quot; or &quot;Like&quot; button for a social media site while on our site. We do not control such sites or their activities. You may be able to find information about social media sites on the sites themselves. We recommend you read the terms of use and privacy policy of such sites before using them.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;West Monroe advertisements on non-West Monroe sites: Cookies may be placed on non-West Monroe sites so that when you click on a West Monroe advertisement located on these sites, West Monroe is provided with this information to enable us to measure the effectiveness of our advertising.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;p&gt;If you have any questions now or during your visit, please submit your request through our&amp;nbsp;&lt;a href=&quot;/contact&quot;&gt;Contact Us&lt;/a&gt;&amp;nbsp;form. In addition, to find the West Monroe office in your state, visit our&amp;nbsp;&lt;a href=&quot;/offices&quot;&gt;Office Directory&lt;/a&gt;&amp;nbsp;page.&lt;/p&gt; &lt;p style=&quot;margin: 0in 0in 0.0001pt;&quot;&gt;You can adjust your cookie settings at any time from our &lt;a href=&quot;#&quot; id=&quot;one-trust-cookie-manager&quot;&gt;cookie consent manager&lt;/a&gt;.&lt;/p&gt; &lt;br&gt;            &lt;/div&gt;",
                },
              },
            },
          },
        },
        {
          id: 'terms-of-use',
          link: '/terms-of-use',
          title: 'Terms of use',
          imgUrl: '',
          object: {
            STATIC_PAGE_SECTION: {
              DEFAULT: {
                object: {
                  title: 'Terms of use',
                  content:
                    "&lt;div class=&quot;cell large-8 large-offset-2&quot;&gt; &lt;h2&gt;Below is information about how West Monroe Partners LLC and its affiliates (&ldquo;we&rdquo;) use cookies and other similar technology on this website. &lt;/h2&gt; &lt;p&gt;By continuing to use this website you agree that we can place cookies and other similar technology on your device, including mobile device, per your agreement with our cookie consent manager. By continuing to use your mobile device to access this website, you agree that the following information may be collected: your unique device identifier, mobile device IP address, information about your device&rsquo;s operating system, mobile carrier and your location information (to the extent permissible under applicable law).&lt;/p&gt; &lt;h3&gt;What are cookies?&lt;/h3&gt; &lt;p&gt;Cookies are text files containing small amounts of information which are downloaded to your computer or mobile device when you visit a site and allow a site to recognize your device.&lt;/p&gt; &lt;h3&gt;Why do we use cookies and similar technologies?&lt;/h3&gt; &lt;p&gt;Cookies do a lot of different jobs, such as letting you navigate between pages efficiently, remembering your preferences and generally improving the user experience. They can also help to ensure that the advertisements you see online are more relevant to you and your interests.&lt;/p&gt; &lt;h3&gt;Does West Monroe use cookies for marketing and analytics?&lt;/h3&gt; &lt;p&gt;Yes, we may use information collected from our cookies to identify user behavior and to serve content and offers based on your profile, and for the other purposes described below, to the extent legally permissible in certain jurisdictions.&lt;/p&gt; &lt;p&gt;Some of the cookies we use don't collect information that identifies a visitor. For example:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Performance cookies (see below)&lt;/li&gt; &lt;li&gt;Targeting cookies (see below)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;In other cases, we can associate cookie information (including information from cookies placed via our advertisements on third party sites) with an identifiable individual. For example:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;If we send you a targeted email which includes web beacons, cookies or similar technologies we will know whether you open, read, or delete the message.&lt;/li&gt; &lt;li&gt;When you click a link in a marketing e-mail you receive from West Monroe, we will also use a cookie to log what pages you view and what content you download from our websites, even if you are not registered at or signed into our site.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Combining and analyzing personal data:&lt;/strong&gt; As described above, we may combine data from publicly available sources, and from our different e-mail, website, and personal interactions with you (this includes information collected across our different websites such as our careers and corporate sites and information collected when you sign-up or log on to our sites or connect to our sites using your social media credentials (such as LinkedIn and Facebook). We combine this data to better assess your experience with West Monroe and to perform the other activities described throughout our privacy policy.&lt;/li&gt; &lt;/ul&gt; &lt;h3&gt;Do you use any cookies from third party companies?&lt;/h3&gt; &lt;p&gt;Some cookies we use are from third party companies, such as Google Analytics, Sitecore, Salesforce and LinkedIn Analytics to provide us with web analytics and intelligence about our sites. These companies use programming code to collect information about your interaction with our sites, such as the pages you visit, the links you click on and how long you are on our sites. This code is only active while you are on a West Monroe digital property. For more information on how these companies collect and use information on our behalf, please refer to their privacy policies:, Google at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.google.com/intl/en/policies/&quot; target=&quot;_blank&quot;&gt;Google Privacy &amp;amp; Terms&lt;/a&gt;, Sitecore at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.sitecore.com/trust/privacy-policy&quot; target=&quot;_blank&quot;&gt;Sitecore Privacy Policy&lt;/a&gt;&amp;nbsp;and Salesforce at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.salesforce.com/company/privacy/&quot; target=&quot;_blank&quot;&gt;Salesforce Privacy Policy&lt;/a&gt;, LinkedIn at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.linkedin.com/legal/privacy-policy&quot; target=&quot;_blank&quot;&gt;LinkedIn Privacy Policy&lt;/a&gt; and Facebook at &lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.facebook.com/policy.php&quot; target=&quot;_blank&quot;&gt;Facebook Privacy Policy&lt;/a&gt;.&lt;/p&gt; &lt;h3&gt;Does West Monroe use any non-cookie tracking technologies?&lt;/h3&gt; &lt;p&gt;We may also use web beacons (including conversion pixels) or other technologies for similar purposes as above and we may include these on our sites, in marketing e-mail messages or our newsletter, affiliated websites, to determine whether messages have been opened and links clicked on. Web beacons do not place information on your device, but they may work in conjunction with cookies to monitor website activity. The information provided below about cookies also applies to web beacons and similar technologies. Conversion pixels are small codes located on a particular web page which are triggered when someone visits a page resulting in an increase in the conversion count.&lt;/p&gt; &lt;h3&gt;What if I don&rsquo;t want cookies?&lt;/h3&gt; &lt;p&gt;By using our site, you agree that we can place cookies on your device as explained below. If you want to remove existing cookies from your device, you can do this using your browser options. If you want to block future cookies being placed on your device, you can change your browser settings to do this. For more information on managing cookies see&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/how-to-manage-cookies&quot; target=&quot;_blank&quot;&gt;How to Manage Cookies&lt;/a&gt;. Currently, &quot;Do Not Track&quot; initiatives are not recognized by our site.&lt;/p&gt; &lt;p&gt;Please bear in mind that deleting and blocking cookies will have an impact on your user experience as parts of the site may no longer work. Unless you have adjusted your browser settings to block cookies, our system will issue cookies as soon as you visit our site or click on a link in a targeted email that we have sent you, even if you have previously deleted our cookies.&lt;/p&gt; &lt;h3&gt;What types of cookies are there and which ones does the site use?&lt;/h3&gt; &lt;p&gt;The cookies used on West Monroe sites have been categorized on the basis of the categories found on &lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/about-cookiepedia&quot; target=&quot;_blank&quot;&gt;Cookiepedia&lt;/a&gt;. However, it is important to note that not all cookies may be used in all jurisdictions or websites. A list of all the cookies used on this site by category is set out below. Within these four categories below, cookies are classified as either session or persistent cookies.&lt;/p&gt; &lt;p&gt;&ldquo;Session&rdquo; cookies are temporary and once you close the browser window, they are deleted from your device.&lt;/p&gt; &lt;p&gt;&ldquo;Persistent&rdquo; cookies remain on your device for a longer period and are used by the website to recognize your device when you return. You can find more information about cookies at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/all-about-cookies&quot; target=&quot;_blank&quot;&gt;All About Cookies&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;West Monroe uses both session and persistent cookies.&lt;/p&gt; &lt;table style=&quot;border: 1px solid #bfbfbf; width: 797.73px; height: 84px; border-collapse: collapse;&quot; cellpadding=&quot;2&quot;&gt; &lt;tbody&gt; &lt;tr&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Category&lt;/strong&gt;&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Examples&lt;/strong&gt;&lt;/p&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Strictly Necessary cookies: &lt;br&gt; &lt;/strong&gt;These cookies are essential in order to enable you to move around the site and use its features, such as accessing secure areas of the site. Without these cookies, services you have asked for cannot be provided.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Strictly Necessary&lt;/strong&gt;&amp;nbsp;cookies:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Registered Visitor cookie: A unique identifier given to each registered user, used to recognize them through their visit and when they return to the site. (See also Functionality cookies below.)&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Performance cookies:&lt;/strong&gt; &lt;br&gt; These cookies are generally third-party cookies from vendors we work with or who work on our behalf that collect information about your visit and use of the West Monroe website, for instance which pages you visit the most often, and if you get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is anonymous and is only used to improve how the website works. Third party vendors may have access to this data and may use it to improve their overall services and offerings.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Performance cookies&lt;/strong&gt;:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Referrer URL (internal page): Used to store the URL of the previous page visited. Allows us to track how visitors navigate throughout our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Referrer URL (external page, including if you click on links on West Monroe social media pages): Used to store the URL which refers a visitor to our site so we may understand which URLs are referring visitors to our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;URL history: Used to store the pages visited by a user.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Unregistered Visitor cookie: A unique identifier given to each visitor to allow analysis on how unregistered visitors use our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Session Management cookies: These cookies allow us to follow the actions of a user on our sites during a browser session. A browser session starts when a user opens the browser window, visits our sites and finishes when they leave our sites and close their browser window. Our Session Management cookies are created temporarily. Once you close your browser, our Session Management cookies are deleted. Gathering analytics and intelligence cookies&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Functionality cookies: &lt;/strong&gt;&lt;br&gt; These cookies allow a site to remember choices you make and provide more enhanced, personal features. These cookies cannot track your browsing activity on other websites. They don&rsquo;t gather any information about you that could be used for advertising or remembering where you&rsquo;ve been on the Internet outside our site.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Functionality&lt;/strong&gt;&amp;nbsp;cookies: &lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Registered Visitor cookie: A unique identifier given to each registered user to our site, used to serve them content and offers based on their profiles. Also used for analysis and marketing purposes. (See also Strictly Necessary cookies above.)&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Targeting Cookies: &lt;/strong&gt;&lt;br&gt; These cookies are used to (1) deliver advertisements more relevant to you and your interests; (2) limit the number of times you see an advertisement; (3) help measure the effectiveness of the advertising campaign; and (4) understand people&rsquo;s behavior after they view an advertisement. They are usually placed on behalf of advertising networks with the site operator&rsquo;s permission. They remember that you have visited a site and quite often they will be linked to site functionality provided by the other organization.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as &lt;strong&gt;Targeting&lt;/strong&gt; Cookies:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Third Party cookies: The Targeting cookies may also be used on third party websites and third parties may use them on our websites as follows: &lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Social media sites: Third-party social media sites may log information about you. This may include activities such as when you click an &quot;Add This&quot; or &quot;Like&quot; button for a social media site while on our site. We do not control such sites or their activities. You may be able to find information about social media sites on the sites themselves. We recommend you read the terms of use and privacy policy of such sites before using them.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;West Monroe advertisements on non-West Monroe sites: Cookies may be placed on non-West Monroe sites so that when you click on a West Monroe advertisement located on these sites, West Monroe is provided with this information to enable us to measure the effectiveness of our advertising.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;p&gt;If you have any questions now or during your visit, please submit your request through our&amp;nbsp;&lt;a href=&quot;/contact&quot;&gt;Contact Us&lt;/a&gt;&amp;nbsp;form. In addition, to find the West Monroe office in your state, visit our&amp;nbsp;&lt;a href=&quot;/offices&quot;&gt;Office Directory&lt;/a&gt;&amp;nbsp;page.&lt;/p&gt; &lt;p style=&quot;margin: 0in 0in 0.0001pt;&quot;&gt;You can adjust your cookie settings at any time from our &lt;a href=&quot;#&quot; id=&quot;one-trust-cookie-manager&quot;&gt;cookie consent manager&lt;/a&gt;.&lt;/p&gt; &lt;br&gt;            &lt;/div&gt;",
                },
              },
            },
          },
        },
        {
          id: 'sitemap',
          link: '/sitemap',
          title: 'Sitemap',
          imgUrl: '',
          object: {
            STATIC_PAGE_SECTION: {
              DEFAULT: {
                object: {
                  title: 'Sitemap',
                  content:
                    "&lt;div class=&quot;cell large-8 large-offset-2&quot;&gt; &lt;h2&gt;Below is information about how West Monroe Partners LLC and its affiliates (&ldquo;we&rdquo;) use cookies and other similar technology on this website. &lt;/h2&gt; &lt;p&gt;By continuing to use this website you agree that we can place cookies and other similar technology on your device, including mobile device, per your agreement with our cookie consent manager. By continuing to use your mobile device to access this website, you agree that the following information may be collected: your unique device identifier, mobile device IP address, information about your device&rsquo;s operating system, mobile carrier and your location information (to the extent permissible under applicable law).&lt;/p&gt; &lt;h3&gt;What are cookies?&lt;/h3&gt; &lt;p&gt;Cookies are text files containing small amounts of information which are downloaded to your computer or mobile device when you visit a site and allow a site to recognize your device.&lt;/p&gt; &lt;h3&gt;Why do we use cookies and similar technologies?&lt;/h3&gt; &lt;p&gt;Cookies do a lot of different jobs, such as letting you navigate between pages efficiently, remembering your preferences and generally improving the user experience. They can also help to ensure that the advertisements you see online are more relevant to you and your interests.&lt;/p&gt; &lt;h3&gt;Does West Monroe use cookies for marketing and analytics?&lt;/h3&gt; &lt;p&gt;Yes, we may use information collected from our cookies to identify user behavior and to serve content and offers based on your profile, and for the other purposes described below, to the extent legally permissible in certain jurisdictions.&lt;/p&gt; &lt;p&gt;Some of the cookies we use don't collect information that identifies a visitor. For example:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Performance cookies (see below)&lt;/li&gt; &lt;li&gt;Targeting cookies (see below)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;In other cases, we can associate cookie information (including information from cookies placed via our advertisements on third party sites) with an identifiable individual. For example:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;If we send you a targeted email which includes web beacons, cookies or similar technologies we will know whether you open, read, or delete the message.&lt;/li&gt; &lt;li&gt;When you click a link in a marketing e-mail you receive from West Monroe, we will also use a cookie to log what pages you view and what content you download from our websites, even if you are not registered at or signed into our site.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Combining and analyzing personal data:&lt;/strong&gt; As described above, we may combine data from publicly available sources, and from our different e-mail, website, and personal interactions with you (this includes information collected across our different websites such as our careers and corporate sites and information collected when you sign-up or log on to our sites or connect to our sites using your social media credentials (such as LinkedIn and Facebook). We combine this data to better assess your experience with West Monroe and to perform the other activities described throughout our privacy policy.&lt;/li&gt; &lt;/ul&gt; &lt;h3&gt;Do you use any cookies from third party companies?&lt;/h3&gt; &lt;p&gt;Some cookies we use are from third party companies, such as Google Analytics, Sitecore, Salesforce and LinkedIn Analytics to provide us with web analytics and intelligence about our sites. These companies use programming code to collect information about your interaction with our sites, such as the pages you visit, the links you click on and how long you are on our sites. This code is only active while you are on a West Monroe digital property. For more information on how these companies collect and use information on our behalf, please refer to their privacy policies:, Google at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.google.com/intl/en/policies/&quot; target=&quot;_blank&quot;&gt;Google Privacy &amp;amp; Terms&lt;/a&gt;, Sitecore at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.sitecore.com/trust/privacy-policy&quot; target=&quot;_blank&quot;&gt;Sitecore Privacy Policy&lt;/a&gt;&amp;nbsp;and Salesforce at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.salesforce.com/company/privacy/&quot; target=&quot;_blank&quot;&gt;Salesforce Privacy Policy&lt;/a&gt;, LinkedIn at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.linkedin.com/legal/privacy-policy&quot; target=&quot;_blank&quot;&gt;LinkedIn Privacy Policy&lt;/a&gt; and Facebook at &lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.facebook.com/policy.php&quot; target=&quot;_blank&quot;&gt;Facebook Privacy Policy&lt;/a&gt;.&lt;/p&gt; &lt;h3&gt;Does West Monroe use any non-cookie tracking technologies?&lt;/h3&gt; &lt;p&gt;We may also use web beacons (including conversion pixels) or other technologies for similar purposes as above and we may include these on our sites, in marketing e-mail messages or our newsletter, affiliated websites, to determine whether messages have been opened and links clicked on. Web beacons do not place information on your device, but they may work in conjunction with cookies to monitor website activity. The information provided below about cookies also applies to web beacons and similar technologies. Conversion pixels are small codes located on a particular web page which are triggered when someone visits a page resulting in an increase in the conversion count.&lt;/p&gt; &lt;h3&gt;What if I don&rsquo;t want cookies?&lt;/h3&gt; &lt;p&gt;By using our site, you agree that we can place cookies on your device as explained below. If you want to remove existing cookies from your device, you can do this using your browser options. If you want to block future cookies being placed on your device, you can change your browser settings to do this. For more information on managing cookies see&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/how-to-manage-cookies&quot; target=&quot;_blank&quot;&gt;How to Manage Cookies&lt;/a&gt;. Currently, &quot;Do Not Track&quot; initiatives are not recognized by our site.&lt;/p&gt; &lt;p&gt;Please bear in mind that deleting and blocking cookies will have an impact on your user experience as parts of the site may no longer work. Unless you have adjusted your browser settings to block cookies, our system will issue cookies as soon as you visit our site or click on a link in a targeted email that we have sent you, even if you have previously deleted our cookies.&lt;/p&gt; &lt;h3&gt;What types of cookies are there and which ones does the site use?&lt;/h3&gt; &lt;p&gt;The cookies used on West Monroe sites have been categorized on the basis of the categories found on &lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/about-cookiepedia&quot; target=&quot;_blank&quot;&gt;Cookiepedia&lt;/a&gt;. However, it is important to note that not all cookies may be used in all jurisdictions or websites. A list of all the cookies used on this site by category is set out below. Within these four categories below, cookies are classified as either session or persistent cookies.&lt;/p&gt; &lt;p&gt;&ldquo;Session&rdquo; cookies are temporary and once you close the browser window, they are deleted from your device.&lt;/p&gt; &lt;p&gt;&ldquo;Persistent&rdquo; cookies remain on your device for a longer period and are used by the website to recognize your device when you return. You can find more information about cookies at&amp;nbsp;&lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://cookiepedia.co.uk/all-about-cookies&quot; target=&quot;_blank&quot;&gt;All About Cookies&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;West Monroe uses both session and persistent cookies.&lt;/p&gt; &lt;table style=&quot;border: 1px solid #bfbfbf; width: 797.73px; height: 84px; border-collapse: collapse;&quot; cellpadding=&quot;2&quot;&gt; &lt;tbody&gt; &lt;tr&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Category&lt;/strong&gt;&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Examples&lt;/strong&gt;&lt;/p&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Strictly Necessary cookies: &lt;br&gt; &lt;/strong&gt;These cookies are essential in order to enable you to move around the site and use its features, such as accessing secure areas of the site. Without these cookies, services you have asked for cannot be provided.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Strictly Necessary&lt;/strong&gt;&amp;nbsp;cookies:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Registered Visitor cookie: A unique identifier given to each registered user, used to recognize them through their visit and when they return to the site. (See also Functionality cookies below.)&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Performance cookies:&lt;/strong&gt; &lt;br&gt; These cookies are generally third-party cookies from vendors we work with or who work on our behalf that collect information about your visit and use of the West Monroe website, for instance which pages you visit the most often, and if you get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is anonymous and is only used to improve how the website works. Third party vendors may have access to this data and may use it to improve their overall services and offerings.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Performance cookies&lt;/strong&gt;:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Referrer URL (internal page): Used to store the URL of the previous page visited. Allows us to track how visitors navigate throughout our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Referrer URL (external page, including if you click on links on West Monroe social media pages): Used to store the URL which refers a visitor to our site so we may understand which URLs are referring visitors to our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;URL history: Used to store the pages visited by a user.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Unregistered Visitor cookie: A unique identifier given to each visitor to allow analysis on how unregistered visitors use our site.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-top: 0px; margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Session Management cookies: These cookies allow us to follow the actions of a user on our sites during a browser session. A browser session starts when a user opens the browser window, visits our sites and finishes when they leave our sites and close their browser window. Our Session Management cookies are created temporarily. Once you close your browser, our Session Management cookies are deleted. Gathering analytics and intelligence cookies&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Functionality cookies: &lt;/strong&gt;&lt;br&gt; These cookies allow a site to remember choices you make and provide more enhanced, personal features. These cookies cannot track your browsing activity on other websites. They don&rsquo;t gather any information about you that could be used for advertising or remembering where you&rsquo;ve been on the Internet outside our site.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;We categorize the following as&amp;nbsp;&lt;strong&gt;Functionality&lt;/strong&gt;&amp;nbsp;cookies: &lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Registered Visitor cookie: A unique identifier given to each registered user to our site, used to serve them content and offers based on their profiles. Also used for analysis and marketing purposes. (See also Strictly Necessary cookies above.)&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr valign=&quot;top&quot;&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p&gt;&lt;strong&gt;Targeting Cookies: &lt;/strong&gt;&lt;br&gt; These cookies are used to (1) deliver advertisements more relevant to you and your interests; (2) limit the number of times you see an advertisement; (3) help measure the effectiveness of the advertising campaign; and (4) understand people&rsquo;s behavior after they view an advertisement. They are usually placed on behalf of advertising networks with the site operator&rsquo;s permission. They remember that you have visited a site and quite often they will be linked to site functionality provided by the other organization.&lt;/p&gt; &lt;/td&gt; &lt;td style=&quot;border: 1px solid #bfbfbf; padding: 10px;&quot;&gt; &lt;p style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt;We categorize the following as &lt;strong&gt;Targeting&lt;/strong&gt; Cookies:&lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Third Party cookies: The Targeting cookies may also be used on third party websites and third parties may use them on our websites as follows: &lt;/p&gt; &lt;ul&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;Social media sites: Third-party social media sites may log information about you. This may include activities such as when you click an &quot;Add This&quot; or &quot;Like&quot; button for a social media site while on our site. We do not control such sites or their activities. You may be able to find information about social media sites on the sites themselves. We recommend you read the terms of use and privacy policy of such sites before using them.&lt;/p&gt; &lt;/li&gt; &lt;li style=&quot;margin-right: 0in; margin-left: 0in;&quot;&gt; &lt;p&gt;West Monroe advertisements on non-West Monroe sites: Cookies may be placed on non-West Monroe sites so that when you click on a West Monroe advertisement located on these sites, West Monroe is provided with this information to enable us to measure the effectiveness of our advertising.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;p&gt;If you have any questions now or during your visit, please submit your request through our&amp;nbsp;&lt;a href=&quot;/contact&quot;&gt;Contact Us&lt;/a&gt;&amp;nbsp;form. In addition, to find the West Monroe office in your state, visit our&amp;nbsp;&lt;a href=&quot;/offices&quot;&gt;Office Directory&lt;/a&gt;&amp;nbsp;page.&lt;/p&gt; &lt;p style=&quot;margin: 0in 0in 0.0001pt;&quot;&gt;You can adjust your cookie settings at any time from our &lt;a href=&quot;#&quot; id=&quot;one-trust-cookie-manager&quot;&gt;cookie consent manager&lt;/a&gt;.&lt;/p&gt; &lt;br&gt;            &lt;/div&gt;",
                },
              },
            },
          },
        },
      ],
    },
  },
};

export const cbtSystemConfigPageMock: IUiConfigServerSide = {
  ldpSystemConfigPage: cbtSystemConfigPageApi,
};
