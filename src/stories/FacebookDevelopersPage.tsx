import React, { FC } from "react";
import BuildWithFBCard from "../components/facebook/BuildWithFBCard";

const FacebookDevelopersPage: FC<unknown> = () => (
  <div>
    <header className="flex flex-row px-4 sm:px-12 py-8">
      <img
        className="w-8/12 sm:w-80"
        src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.2365-6/87790598_576958092900214_7460073234956812288_n.svg?_nc_cat=107&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=LYFKiq6Cj1MAX-eDqLQ&_nc_ht=scontent-ams4-1.xx&oh=b99aa0be504d9690837e769f1d74c378&oe=61350861"
        alt
      />
      <div className="flex-1" />
      <svg
        className="lg:hidden w-8 h-8 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <nav className="hidden lg:flex">
        <ul className="flex flex-row gap-12 text-gray-600">
          <li>Products</li>
          <li>Programs</li>
          <li>Docs</li>
          <li>More</li>
          <li>My Apps</li>
          <li>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
    <div className="bg-gray-400 bg-blend-multiply pt-4 sm:pt-28 w-full bg-cover bg-center promo-cover">
      <section className="h-full flex flex-col px-4 sm:px-20 w-full lg:w-1/2 gap-4 pb-14 text-white">
        <h2 className="text-5xl">Data Protection Assesment</h2>
        <p>
          Introducing our latest initiative to safeguard how people’s data is
          being managed and protected on our platforms
        </p>
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-full border-2 border-white p-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div>Sign up for updates</div>
        </div>
        <div className="flex-1" />
        <nav>
          <ul className="flex flex-row gap-2">
            <li className="rounded-full w-3 h-3 bg-gray-400" />
            <li className="rounded-full w-3 h-3 bg-white" />
            <li className="rounded-full w-3 h-3 bg-gray-400" />
            <li className="rounded-full w-3 h-3 bg-gray-400" />
          </ul>
        </nav>
      </section>
    </div>
    <section className="flex-wrap flex items-baseline flex-row justify-center gap-1 lg:gap-6 bg-purple-100 p-3 text-purple-800 font-bold text-center">
      <h4>
        Preparing our Partners for iOS 14: Learn more about Apple’s iOS 14
        requirements that will impact Facebook advertising.
      </h4>
      <a href="#" className="underline text-lg">
        Learn more
      </a>
    </section>
    <div className="flex flex-row justify-center bg-gray-100 py-16 px-12">
      <div className="flex flex-col gap-4 w-1200px">
        <h2 className="uppercase text-3xl">Build with facebook</h2>
        <h3 className="text-1xl mb-6">
          Connect with customers and improve efficiency with our featured
          platforms.
        </h3>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6">
          {/*- */}
          <BuildWithFBCard
            title="Messenger Platform"
            description="Generate leads, drive sales, or provide customer service through a
              personal and convenient user experience."
            iconImgURL="https://scontent-amt2-1.xx.fbcdn.net/v/t39.2365-6/226177888_798170684162453_8023468962600941236_n.svg?_nc_cat=106&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=wdNn9gMghdQAX_s9WYO&_nc_ht=scontent-amt2-1.xx&oh=4911bb5f967b8ea93c2d978bf9f11ca3&oe=61338173"
            CTALink="#"
            CTAText="Learn more"
          />

          <BuildWithFBCard
            title="Facebook Login"
            description="A convenient way for Facebook’s billions of global users to log
            into your app or website."
            iconImgURL="https://scontent-amt2-1.xx.fbcdn.net/v/t39.2365-6/226127869_351236176439268_592085626137346941_n.svg?_nc_cat=111&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=f4Wn3nAfZM4AX_1G2rw&_nc_oc=AQm27HJljUzFuEarm7p1Ggo7xEH4bz1a1EnkM0DOfvrS2Cxhz17SaKkwl-xa0O6AlKw&_nc_ht=scontent-amt2-1.xx&oh=e0372c49951a5b8f6d13aaf07dadaf48&oe=6133FCCF"
            CTALink="#"
            CTAText="Learn more"
          />

          <BuildWithFBCard
            title="Instagram Platform"
            description="Create tools for businesses, creators, and people to enhance the
            Instagram experience."
            iconImgURL="https://scontent-amt2-1.xx.fbcdn.net/v/t39.2365-6/227175283_808041863214240_3061448061232478945_n.svg?_nc_cat=109&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=4YejjZ81h9gAX8JQ3ox&_nc_ht=scontent-amt2-1.xx&oh=00e777ca0a59e046327495e0fef7c7ed&oe=613429D7"
            CTALink="#"
            CTAText="Learn more"
          />

          <BuildWithFBCard
            title="WhatsApp Business API"
            description="Chat with people on their preferred channel through a customized
            experience that’s quick to implement."
            iconImgURL="https://scontent-ams4-1.xx.fbcdn.net/v/t39.2365-6/226097564_886109315591449_8700415775853663268_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=eXlbOa-FKA4AX_zJi2g&_nc_ht=scontent-ams4-1.xx&oh=8b47abbc1a1238ad8ab409c9749d8b0d&oe=613471B7"
            CTALink="#"
            CTAText="Learn more"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-center bg-white py-16 px-12">
      <div className="flex flex-col gap-4 w-1200px">
        <h2 className="uppercase text-3xl">Developer Tools</h2>
        <h3 className="text-1xl mb-6">
          Take a closer look at the products we offer.
        </h3>
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2  grid-rows-2 gap-12">
          {/*- */}
          <div className="developer-tools-card">
            <div className="flex">
              <h3 className="developer-tools-title border-cyan-600 text-cyan-600 inline">
                Business Tools
              </h3>
            </div>
            <p>
              Build and scale your business across multiple interactive touch
              points.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="rounded-full border-2 border-black p-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>Learn more</div>
            </div>
          </div>
          {/*- */}
          {/*- */}
          <div className="developer-tools-card">
            <div className="flex">
              <h3 className="developer-tools-title border-green-600 text-green-600">
                Open Source
              </h3>
            </div>
            <p>
              Build and scale your business across multiple interactive touch
              points.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="rounded-full border-2 border-black p-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>Learn more</div>
            </div>
          </div>
          {/*- */}
          {/*- */}
          <div className="developer-tools-card">
            <div className="flex">
              <h3 className="developer-tools-title border-blue-700 text-blue-700">
                Gaming
              </h3>
            </div>
            <p>
              Build and scale your business across multiple interactive touch
              points.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="rounded-full border-2 border-black p-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>Learn more</div>
            </div>
          </div>
          {/*- */}
          {/*- */}
          <div className="developer-tools-card">
            <div className="flex">
              <h3 className="developer-tools-title border-red-500 text-red-500">
                Social Integrations
              </h3>
            </div>
            <p>
              Explore tools and resources to help you grow your audiences on
              Facebook, Instagram, and beyond.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="rounded-full border-2 border-black p-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>Learn more</div>
            </div>
          </div>
          {/*- */}
          {/*- */}
          <div className="developer-tools-card">
            <div className="flex">
              <h3 className="developer-tools-title border-red-700 text-red-700">
                Artificial Intelligence
              </h3>
            </div>
            <p>
              Advancing the field of machine learning to empower AI developers.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="rounded-full border-2 border-black p-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>Learn more</div>
            </div>
          </div>
          {/*- */}
          {/*- */}
          <div className="developer-tools-card">
            <div className="flex">
              <h3 className="developer-tools-title border-purple-800 text-purple-800">
                AR/VR
              </h3>
            </div>
            <p>
              Bring your imagination to life through cutting-edge, immersive
              experiences.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <div className="rounded-full border-2 border-black p-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>Learn more</div>
            </div>
          </div>
          {/*- */}
        </div>
        <div className="h-1px bg-gray-300 w-full mt-10" />
        <div className="flex flex-row justify-end mt-4">
          <div className="flex flex-row gap-3 items-center">
            <div className="rounded-full border-2 border-black p-1">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <div>Learn more</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-center bg-white px-12">
      <div className="flex flex-col gap-4 w-1200px">
        <h2 className="uppercase text-3xl">
          DISCOVER DEVELOPER AND STARTUP PROGRAMS
        </h2>
        <p>Learn about the programs educating and connecting innovators.</p>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2  grid-rows-1 gap-6 mt-4">
          <section>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt
              />
            </figure>
            <div className="flex flex-col gap-4 p-6 bg-yellow-100 text-yellow-600">
              <h6 className="text-md">Developers Circle</h6>
              <h5 className="text-2xl">
                Join a developer community, attend virtual meetups and
                collaborate online.
              </h5>
              <div className="flex flex-row gap-2 items-center">
                <div className="rounded-full border-2 border-black p-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <div>Learn more</div>
              </div>
            </div>
          </section>
          <section>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt
              />
            </figure>
            <div className="flex flex-col gap-4 p-6 bg-green-200 text-green-800">
              <h6 className="text-md">Startup Programs</h6>
              <h5 className="text-2xl">
                Build better products, scale faster and sustain growth for
                startups.
              </h5>
              <div className="flex flex-row gap-2 items-center">
                <div className="rounded-full border-2 border-black p-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <div>Learn more</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default FacebookDevelopersPage;
