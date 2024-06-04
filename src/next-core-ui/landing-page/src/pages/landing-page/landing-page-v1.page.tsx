import Head from 'next/head';
import { LandingPageProps } from './landing-page.type';

export const LandingPageV1: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Nguyễn Trọng Nhân" />
        <meta property="og:url" content="/" />
        <meta property="og:image" />
        <title>Nguyễn Trọng Nhân</title>
      </Head>
      <main className="">
        <div className="bg-black text-white font-sans">
          {/* Sidebar */}
          <nav className="fixed top-0 left-0 w-24 bg-gray-900 hidden md:block text-center">
            <img
              src="https://azureapis.blob.core.windows.net/nicholaf/assets/images/Img cua toi.png"
              className="w-full"
              alt="Avatar"
            />
            <a href="#" className="block py-4 bg-black text-white">
              <i className="fa fa-home text-2xl" />
              <p>HOME</p>
            </a>
            <a href="#about" className="block py-4 hover:bg-black">
              <i className="fa fa-user text-2xl" />
              <p>ABOUT</p>
            </a>
            <a href="#videos" className="block py-4 hover:bg-black">
              <i className="fa fa-play text-2xl" />
              <p>VIDEO</p>
            </a>
            <a href="#photos" className="block py-4 hover:bg-black">
              <i className="fa fa-eye text-2xl" />
              <p>PHOTOS</p>
            </a>
            <a href="#contact" className="block py-4 hover:bg-black">
              <i className="fa fa-envelope text-2xl" />
              <p>CONTACT</p>
            </a>
          </nav>

          {/* Navbar for small screens */}
          <div className="fixed top-0 left-0 w-full bg-black text-center text-sm md:hidden">
            <div className="flex">
              <a href="#" className="w-1/5 py-2">
                HOME
              </a>
              <a href="#about" className="w-1/5 py-2">
                ABOUT
              </a>
              <a href="#videos" className="w-1/5 py-2">
                VIDEO
              </a>
              <a href="#photos" className="w-1/5 py-2">
                PHOTOS
              </a>
              <a href="#contact" className="w-1/5 py-2">
                CONTACT
              </a>
            </div>
          </div>

          {/* Main content */}
          <div className="ml-0 md:ml-24 p-8">
            {/* Header */}
            <header className="text-center">
              <h1 className="text-5xl md:text-6xl">I'M TRONG NHAN.</h1>
              <p>Video editor and videographer.</p>
              <img
                src="https://azureapis.blob.core.windows.net/nicholaf/assets/images/Img cua toi.png"
                alt="Portrait"
                className="mx-auto"
              />
            </header>

            {/* About Section */}
            <section id="about" className="my-16">
              <h2 className="text-3xl">My Name</h2>
              <hr className="w-32 opacity-50 my-4" />
              <p className="text-gray-300">
                Hello, my name is Nguyễn Trọng Nhân. I am a dedicated video editor and videographer with one year of
                professional experience. My passion for capturing and creating compelling visual stories has driven me
                to develop a strong skill set in both video editing and videography. I am eager to bring my creative
                vision and technical expertise to new and exciting projects.
              </p>
              <h3 className="text-2xl my-4">My Skills</h3>
              <p className="uppercase">Video editor</p>
              <div className="bg-white h-1.5 w-11/12">
                <div className="bg-gray-800 h-full w-11/12" />
              </div>
              <p className="uppercase">Videographer</p>
              <div className="bg-white h-1.5 w-11/12">
                <div className="bg-gray-800 h-full w-4/5" />
              </div>
              <p className="uppercase">Premiere Pro - Davinci Resolve - Capcut</p>
              <div className="bg-white h-1.5 w-11/12">
                <div className="bg-gray-800 h-full w-11/12" />
              </div>
              <p className="uppercase">After Effects</p>
              <div className="bg-white h-1.5 w-11/12">
                <div className="bg-gray-800 h-full w-3/5" />
              </div>
              <p className="uppercase">Photoshop - Camera RAW</p>
              <div className="bg-white h-1.5 w-11/12">
                <div className="bg-gray-800 h-full w-4/5" />
              </div>
              <div className="flex justify-around text-center text-gray-300 mt-8 bg-gray-700 py-8">
                <div>
                  <span className="text-2xl">11+</span>
                  <p>Partners</p>
                </div>
                <div>
                  <span className="text-2xl">55+</span>
                  <p>Projects Done</p>
                </div>
                <div>
                  <span className="text-2xl">89+</span>
                  <p>Happy Clients</p>
                </div>
                <div>
                  <span className="text-2xl">150+</span>
                  <p>Meetings</p>
                </div>
              </div>
              <button className="bg-gray-400 text-black py-2 px-4 my-8">
                <i className="fa fa-download" /> Download Resume
              </button>

              {/* Pricing Tables */}
              <h3 className="text-2xl my-4">My Price</h3>
              <div className="md:flex -mx-4">
                <div className="md:w-1/2 px-4 mb-4 md:mb-0">
                  <ul className="bg-white text-center opacity-75 hover:opacity-100 text-dark-1">
                    <li className="bg-gray-800 text-xl py-8 text-white">Photo</li>
                    <li className="py-4">Photography</li>
                    <li className="py-4">Edit</li>
                    <li className="py-4">Edit as feedback</li>
                    <li className="py-4">
                      <h2>$3</h2>
                      <span className="opacity-75">per photo</span>
                    </li>
                    <li className="bg-gray-300 py-6">
                      <button className="bg-white py-2 px-4 hover:bg-black hover:text-white">Sign Up</button>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 px-4">
                  <ul className="bg-white text-center opacity-75 hover:opacity-100 text-dark-1">
                    <li className="bg-gray-800 text-xl py-8 text-white">Video</li>
                    <li className="py-4">Videographer</li>
                    <li className="py-4">Edit</li>
                    <li className="py-4">Edit as feedback</li>
                    <li className="py-4">
                      <h2>$15 - 350</h2>
                      <span className="opacity-75">per video (long-shots)</span>
                    </li>
                    <li className="bg-gray-300 py-6">
                      <button className="bg-white py-2 px-4 hover:bg-black hover:text-white">Sign Up</button>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Videos Section */}
            <section id="videos" className="my-16">
              <h2 className="text-3xl">My Video</h2>
              <hr className="w-32 opacity-50 my-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ZtjH22qJXSA?si=LqXVIwAjblWemD8n"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/W4oXEdZz3Z0?si=IN5tXgscRYpyC0g5"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/zHKRk4huTzg?si=nC4_XXN4INwW7lH5"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </section>

            {/* Photos Section */}
            <section id="photos" className="my-16">
              <h2 className="text-3xl">My Photo</h2>
              <hr className="w-32 opacity-50 my-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img src="https://azureapis.blob.core.windows.net/nicholaf/assets/images/photo1.png" alt="1" />
                <img src="https://azureapis.blob.core.windows.net/nicholaf/assets/images/photo2.png" alt="2" />
                <img src="https://azureapis.blob.core.windows.net/nicholaf/assets/images/photo3.png" alt="3" />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="my-16">
              <h2 className="text-3xl">Contact</h2>
              <hr className="w-32 opacity-50 my-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <i className="fa fa-map-marker mr-2" /> Address: Ha Noi, Viet Nam
                  </p>
                  <p>
                    <i className="fa fa-phone mr-2" /> Phone: +84 339 233 679
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-2" /> Email: trongnhan12082001@gmail.com
                  </p>
                </div>
                <form className="grid grid-cols-1 gap-4">
                  <input type="text" placeholder="Name" className="p-2 bg-gray-800 text-white" />
                  <input type="email" placeholder="Email" className="p-2 bg-gray-800 text-white" />
                  <textarea placeholder="Message" className="p-2 bg-gray-800 text-white" rows={4} />
                  <button type="submit" className="bg-gray-400 text-black py-2 px-4">
                    <i className="fa fa-paper-plane" /> Send
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
