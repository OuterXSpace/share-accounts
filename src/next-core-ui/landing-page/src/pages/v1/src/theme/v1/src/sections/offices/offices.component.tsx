import Link from 'next/link';
import { IOfficesSectionProps } from './offices.type';

export const OfficesSection: React.FC<IOfficesSectionProps> = (props) => {
  const { data, className } = props;

  return (
    <div className="cmpt__large_services" data-js-hook="large-services">
      <div className="large-services-container">
        <div className="services-list">
          <div
            className="service-image activeService"
            data-service="A"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/chicago.jpg?cx=0.26&cy=0.38&cw=1600&ch=1600&hash=0ABDD9F0810872F574DDF23E906849A0)',
            }}
          />
          <div
            className="service-image"
            data-service="B"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/dallas.jpg?cx=0.75&cy=0.68&cw=1600&ch=1600&hash=055BCD16759CF6619C4B9CAA4581699A)',
            }}
          />
          <div
            className="service-image"
            data-service="C"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/losangeles.jpg?cx=0.34&cy=0.61&cw=1600&ch=1600&hash=AFD87C588DE130C45BF95B2D78242B6F)',
            }}
          />
          <div
            className="service-image"
            data-service="D"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/minneapolis.jpg?cx=0.24&cy=0.55&cw=1600&ch=1600&hash=3F542B9E2EBE37543416D0FBB483D9C8)',
            }}
          />
          <div
            className="service-image"
            data-service="E"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/newyork.jpg?cx=0.5&cy=0.5&cw=1600&ch=1600&hash=12FFDDB828617E92E1E6CCA9D70CA72B)',
            }}
          />
          <div
            className="service-image"
            data-service="F"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/sanfrancisco.jpg?cx=0.71&cy=0.59&cw=1600&ch=1600&hash=D123E803E68BA80E218484BB3AD4EE04)',
            }}
          />
          <div
            className="service-image"
            data-service="G"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/seattle.jpg?cx=0.78&cy=0.63&cw=1600&ch=1600&hash=DF95DFE1EC258AA4A9AD8D3650690120)',
            }}
          />
          <div
            className="service-image"
            data-service="H"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/projectpassportoffice_2504x1440.jpg?cx=0.17&cy=0.52&cw=1600&ch=1600&hash=2730078B29BF8F7285DBBF2A55D5412D)',
            }}
          />
          <div
            className="service-image"
            data-service="I"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/offices/london_2504x1440.jpg?cx=0.5&cy=0.5&cw=1600&ch=1600&hash=3E848DFF2EE7A7E00ACD5F8CF8F86F96)',
            }}
          />
          <div
            className="service-image"
            data-service="J"
            style={{
              backgroundImage:
                'url(https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/offices/costarica_hero.jpg?cx=0.5&cy=0.5&cw=1600&ch=1600&hash=8317B1F6AB42A255295E4EE4C3405108)',
            }}
          />
          <ul className="services-items">
            <li className="service-item activeService">
              <h2 className="headline3 text-white service-title">Chicago</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">Chicago</h3>
                <div className="cmpt__rich-text services-description">
                  <p>Our Chicago office, conveniently located in the Loop, is our HQ and where it all began.</p>
                  <p>
                    <Link href="https://goo.gl/maps/5VUZ3BaDDo3ELGQbA" target="_blank">
                      311 W Monroe St
                      <br />
                      14th Floor
                      <br />
                      Chicago, IL 60606
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:312-602-4000">312-602-4000</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/chicago" className="cta cta-text-only" target="">
                      Learn more about our Chicago office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">Dallas</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">Dallas</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    Located at One Arts Plaza in the Dallas Arts District, this office is home base for our operations
                    in the Texas, Oklahoma, Louisiana, and Arkansas area.
                  </p>
                  <p>
                    <Link
                      href="https://www.google.com/maps/place/West+Monroe+Partners/@32.7919949,-96.7973461,17z/data=!3m1!4b1!4m5!3m4!1s0x864e9f1203d981df:0x7e596bef215cb080!8m2!3d32.7919904!4d-96.7951574"
                      target="_blank"
                    >
                      1722 Routh Street
                      <br />
                      Suite 850
                      <br />
                      Dallas, TX 75201
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:469-804-0050">469-804-0050</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/dallas" className="cta cta-text-only" target="">
                      Learn more about our Dallas office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">Los Angeles</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">Los Angeles</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    Located in the rapidly revitalizing downtown business district, our Los Angeles office is the hub of
                    our Southern California operations.
                  </p>
                  <p>
                    <Link
                      href="https://www.google.com/maps/place/West+Monroe+Partners/@34.0504684,-118.2634779,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c7b1018539ef:0x602c51712107f34f!8m2!3d34.0504684!4d-118.2612892?q=West+Monroe+Partners+1000+Wilshire+Blvd+%231140,+Los+Angeles,+CA+90017&rlz=1C1GCEA_enUS846US846&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiBvpKao5niAhWPoJ4KHXiIAuYQ_AUIDigB&shorturl=1"
                      target="_blank"
                    >
                      1000 Wilshire Boulevard
                      <br />
                      Suite 1100
                      <br />
                      Los Angeles, CA 90017
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:213-631-4800">213-631-4800</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/los-angeles" className="cta cta-text-only" target="">
                      Learn more about our Los Angeles office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">Minneapolis</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">Minneapolis</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    Our Minneapolis office is located in the North Loop’s Nordic building and includes the firm’s
                    digital product studio, which serves clients nationally.
                  </p>
                  <p>
                    <Link href="https://goo.gl/maps/XiduWKKokk5cpAsY6" target="_blank">
                      729 N. Washington Avenue
                      <br />
                      Suite 200
                      <br />
                      Minneapolis, MN 55401
                    </Link>
                    <Link
                      href="https://www.google.com/maps/place/West+Monroe+Partners/@44.982697,-93.2748552,17z/data=!3m1!4b1!4m5!3m4!1s0x52b3328f933ee793:0x6b23bd9006ded22e!8m2!3d44.982697!4d-93.2726665?shorturl=1"
                      target="_blank"
                    >
                      <br />
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:612-594-8000">612-594-8000</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/minneapolis" className="cta cta-text-only" target="">
                      Learn more about our Minneapolis office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">New York</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">New York</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    Our New York office is conveniently located in Midtown Manhattan to serve clients up in the
                    Tri-state area and up and down the East Coast.&nbsp;
                  </p>
                  <p>
                    <Link
                      href="https://www.google.com/maps/place/825+8th+Ave+17th+Floor,+New+York,+NY+10019,+USA/@40.7619614,-73.9872574,14z/data=!4m13!1m7!3m6!1s0x89c25856eeea7d8d:0xb7885ecb6d1b7e1f!2s825+8th+Ave+17th+Floor,+New+York,+NY+10019,+USA!3b1!8m2!3d40.7621024!4d-73.9869111!3m4!1s0x89c25856eeea7d8d:0xb7885ecb6d1b7e1f!8m2!3d40.7621024!4d-73.9869111"
                      target="_blank"
                    >
                      825 8th Ave
                      <br />
                      17th Floor
                      <br />
                      New York, NY 10019
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:646-448-9955">646-448-9955</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/new-york" className="cta cta-text-only" target="">
                      Learn more about our New York office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">San Francisco</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">San Francisco</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    Located in SoMa, the epicenter of San Francisco’s tech community, this office serves clients in the
                    Bay Area and across Northern California.
                  </p>
                  <p>
                    <Link href="https://maps.app.goo.gl/MpYwJnHsuQa7wakv9" target="_blank">
                      45 Fremont Street
                      <br />
                      Suite 3200
                      <br />
                      San Francisco, CA 94105
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:415-653-1450">415-653-1450</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/san-francisco" className="cta cta-text-only" target="">
                      Learn more about our San Francisco office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">Seattle</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">Seattle</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    The heart of our Pacific Northwest operations, the Seattle office is located in the center of the
                    city’s business district.
                  </p>
                  <p>
                    <Link href="https://goo.gl/maps/Eh4Zp5BK8KGryD7i9" target="_blank">
                      801 5th Ave
                      <br />
                      Suite 2300
                      <br />
                      Seattle, WA 98104
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:206-905-0200">206-905-0200</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/seattle" className="cta cta-text-only" target="">
                      Learn more about our Seattle office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">Washington, D.C.</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">Washington, D.C.</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    Located in Tysons Corner, our D.C. office is home to our IT Strategy and Business Process
                    Outsourcing practice.&nbsp;
                  </p>
                  <p>
                    <Link href="https://goo.gl/maps/KbkTjqPWwpXzZfqt9" target="_blank">
                      1650 Tysons Blvd
                      <br />
                      <span>Suite 200</span>
                      <br />
                      McLean, VA 22102
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:202-672-1461">202-672-1461</Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/washington-dc" className="cta cta-text-only" target="">
                      Learn more about our Washington D.C. office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">London</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">London</h3>
                <div className="cmpt__rich-text services-description">
                  <p>
                    <Link href="https://goo.gl/maps/pKvFMvqPoCyUK4p1A" target="_blank">
                      Berkeley Square House, 2nd Floor
                      <br />
                      Berkeley Square
                      <br />
                      London, W1J 6BD
                      <br />
                      United Kingdom
                    </Link>
                  </p>
                </div>
                <ul className="ctas">
                  <li>
                    <Link href="/offices/london" className="cta cta-text-only" target="">
                      Learn More about our London office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="service-item">
              <h2 className="headline3 text-white service-title">Costa Rica</h2>
              <div className="service-info">
                <h3 className="headline3 service-card-title">Costa Rica</h3>
                <div className="cmpt__rich-text services-description" />
                <ul className="ctas">
                  <li>
                    <Link href="/offices/costa-rica" className="cta cta-text-only" target="">
                      Learn more about our Costa Rica office
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="services-info">
          <div className="service-info activeService" data-service="A">
            <h3 className="headline3 service-card-title">Chicago</h3>
            <div className="cmpt__rich-text services-description">
              <p>Our Chicago office, conveniently located in the Loop, is our HQ and where it all began.</p>
              <p>
                <Link href="https://goo.gl/maps/5VUZ3BaDDo3ELGQbA" target="_blank">
                  311 W Monroe St
                  <br />
                  14th Floor
                  <br />
                  Chicago, IL 60606
                </Link>
              </p>
              <p>
                <Link href="tel:312-602-4000">312-602-4000</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/chicago" className="cta cta-text-only" target="">
                  Learn more about our Chicago office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="B">
            <h3 className="headline3 service-card-title">Dallas</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                Located at One Arts Plaza in the Dallas Arts District, this office is home base for our operations in
                the Texas, Oklahoma, Louisiana, and Arkansas area.
              </p>
              <p>
                <Link
                  href="https://www.google.com/maps/place/West+Monroe+Partners/@32.7919949,-96.7973461,17z/data=!3m1!4b1!4m5!3m4!1s0x864e9f1203d981df:0x7e596bef215cb080!8m2!3d32.7919904!4d-96.7951574"
                  target="_blank"
                >
                  1722 Routh Street
                  <br />
                  Suite 850
                  <br />
                  Dallas, TX 75201
                </Link>
              </p>
              <p>
                <Link href="tel:469-804-0050">469-804-0050</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/dallas" className="cta cta-text-only" target="">
                  Learn more about our Dallas office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="C">
            <h3 className="headline3 service-card-title">Los Angeles</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                Located in the rapidly revitalizing downtown business district, our Los Angeles office is the hub of our
                Southern California operations.
              </p>
              <p>
                <Link
                  href="https://www.google.com/maps/place/West+Monroe+Partners/@34.0504684,-118.2634779,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c7b1018539ef:0x602c51712107f34f!8m2!3d34.0504684!4d-118.2612892?q=West+Monroe+Partners+1000+Wilshire+Blvd+%231140,+Los+Angeles,+CA+90017&rlz=1C1GCEA_enUS846US846&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiBvpKao5niAhWPoJ4KHXiIAuYQ_AUIDigB&shorturl=1"
                  target="_blank"
                >
                  1000 Wilshire Boulevard
                  <br />
                  Suite 1100
                  <br />
                  Los Angeles, CA 90017
                </Link>
              </p>
              <p>
                <Link href="tel:213-631-4800">213-631-4800</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/los-angeles" className="cta cta-text-only">
                  Learn more about our Los Angeles office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="D">
            <h3 className="headline3 service-card-title">Minneapolis</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                Our Minneapolis office is located in the North Loop’s Nordic building and includes the firm’s digital
                product studio, which serves clients nationally.
              </p>
              <p>
                <Link href="https://goo.gl/maps/XiduWKKokk5cpAsY6" target="_blank">
                  729 N. Washington Avenue
                  <br />
                  Suite 200
                  <br />
                  Minneapolis, MN 55401
                </Link>
                <Link
                  href="https://www.google.com/maps/place/West+Monroe+Partners/@44.982697,-93.2748552,17z/data=!3m1!4b1!4m5!3m4!1s0x52b3328f933ee793:0x6b23bd9006ded22e!8m2!3d44.982697!4d-93.2726665?shorturl=1"
                  target="_blank"
                >
                  <br />
                </Link>
              </p>
              <p>
                <Link href="tel:612-594-8000">612-594-8000</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/minneapolis" className="cta cta-text-only" target="">
                  Learn more about our Minneapolis office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="E">
            <h3 className="headline3 service-card-title">New York</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                Our New York office is conveniently located in Midtown Manhattan to serve clients up in the Tri-state
                area and up and down the East Coast.&nbsp;
              </p>
              <p>
                <Link
                  href="https://www.google.com/maps/place/825+8th+Ave+17th+Floor,+New+York,+NY+10019,+USA/@40.7619614,-73.9872574,14z/data=!4m13!1m7!3m6!1s0x89c25856eeea7d8d:0xb7885ecb6d1b7e1f!2s825+8th+Ave+17th+Floor,+New+York,+NY+10019,+USA!3b1!8m2!3d40.7621024!4d-73.9869111!3m4!1s0x89c25856eeea7d8d:0xb7885ecb6d1b7e1f!8m2!3d40.7621024!4d-73.9869111"
                  target="_blank"
                >
                  825 8th Ave
                  <br />
                  17th Floor
                  <br />
                  New York, NY 10019
                </Link>
              </p>
              <p>
                <Link href="tel:646-448-9955">646-448-9955</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/new-york" className="cta cta-text-only" target="">
                  Learn more about our New York office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="F">
            <h3 className="headline3 service-card-title">San Francisco</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                Located in SoMa, the epicenter of San Francisco’s tech community, this office serves clients in the Bay
                Area and across Northern California.
              </p>
              <p>
                <Link href="https://maps.app.goo.gl/MpYwJnHsuQa7wakv9" target="_blank">
                  45 Fremont Street
                  <br />
                  Suite 3200
                  <br />
                  San Francisco, CA 94105
                </Link>
              </p>
              <p>
                <Link href="tel:415-653-1450">415-653-1450</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/san-francisco" className="cta cta-text-only" target="">
                  Learn more about our San Francisco office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="G">
            <h3 className="headline3 service-card-title">Seattle</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                The heart of our Pacific Northwest operations, the Seattle office is located in the center of the city’s
                business district.
              </p>
              <p>
                <Link href="https://goo.gl/maps/Eh4Zp5BK8KGryD7i9" target="_blank">
                  801 5th Ave
                  <br />
                  Suite 2300
                  <br />
                  Seattle, WA 98104
                </Link>
              </p>
              <p>
                <Link href="tel:206-905-0200">206-905-0200</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/seattle" className="cta cta-text-only" target="">
                  Learn more about our Seattle office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="H">
            <h3 className="headline3 service-card-title">Washington, D.C.</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                Located in Tysons Corner, our D.C. office is home to our IT Strategy and Business Process Outsourcing
                practice.&nbsp;
              </p>
              <p>
                <Link href="https://goo.gl/maps/KbkTjqPWwpXzZfqt9" target="_blank">
                  1650 Tysons Blvd
                  <br />
                  <span>Suite 200</span>
                  <br />
                  McLean, VA 22102
                </Link>
              </p>
              <p>
                <Link href="tel:202-672-1461">202-672-1461</Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/washington-dc" className="cta cta-text-only" target="">
                  Learn more about our Washington D.C. office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="I">
            <h3 className="headline3 service-card-title">London</h3>
            <div className="cmpt__rich-text services-description">
              <p>
                <Link href="https://goo.gl/maps/pKvFMvqPoCyUK4p1A" target="_blank">
                  Berkeley Square House, 2nd Floor
                  <br />
                  Berkeley Square
                  <br />
                  London, W1J 6BD
                  <br />
                  United Kingdom
                </Link>
              </p>
            </div>
            <ul className="ctas">
              <li>
                <Link href="/offices/london" className="cta cta-text-only" target="">
                  Learn More about our London office
                </Link>
              </li>
            </ul>
          </div>
          <div className="service-info" data-service="J">
            <h3 className="headline3 service-card-title">Costa Rica</h3>
            <div className="cmpt__rich-text services-description" />
            <ul className="ctas">
              <li>
                <Link href="/offices/costa-rica" className="cta cta-text-only" target="">
                  Learn more about our Costa Rica office
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
