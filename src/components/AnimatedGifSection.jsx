import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

function AnimatedGifSection() {
  const swiperElement = useRef(null);

  useEffect(() => {
    register();
    const swiperParams = {
      pagination: {
        clickable: true,
      },
      slidesPerView: "1",
      speed: "500",
      loop: "true",
    };
    Object.assign(swiperElement.current, swiperParams);
    swiperElement.current.initialize();
    // console.log("useEffect called");
  }, []);

  return (
    <>
      <section
        id="animated-gif-section"
        className="flex h-fit w-screen flex-col items-center justify-between bg-gray-900"
      >
        <div
          id="animated-gif-section__title"
          className="mb-36 flex flex-col items-center justify-center gap-10 px-10 pt-14 sm:mb-28 sm:p-20"
        >
          <h1 className="text-center text-2xl font-bold leading-tight text-slate-100 sm:text-5xl">
            We&rsquo;re NexusTech, <br />
            The App of Change
          </h1>
          <button className="rounded-full bg-[#00880D] px-4 py-2 text-base font-bold text-slate-100 transition-colors hover:bg-[#0c6e15] sm:px-6 sm:py-3 sm:text-lg">
            Explore Careers
          </button>
        </div>
        <div
          id="animated-gif-section__screen-large"
          className="hidden h-1/2 w-full grid-cols-2 grid-rows-2 justify-between gap-x-20 gap-y-20 rounded-t-[100px] bg-slate-100 px-20 sm:grid lg:h-72 lg:grid-cols-4 lg:grid-rows-1"
        >
          <div className="relative bottom-20 text-center">
            <div className="flex flex-col items-center justify-between gap-y-7">
              <img className="h-40" src="./images/undraw_outer_space.svg" />
              <div className="flex flex-col items-center justify-start gap-y-2">
                <span className="text-2xl font-bold">Leading Technology</span>
                <span>High-end and bleeding edge technology.</span>
              </div>
            </div>
          </div>
          <div className="relative bottom-20 text-center">
            <div className="flex flex-col items-center justify-between gap-y-7">
              <img className="h-40" src="./images/undraw_launching.svg" />
              <div className="flex flex-col items-center justify-start gap-y-2">
                <span className="text-2xl font-bold">Reach for the Stars</span>
                <span>
                  No dream is too big for us. No star is too far to reach.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="relative bottom-20 text-center">
            <div className="flex flex-col items-center justify-between gap-y-7">
              <img className="h-40" src="./images/undraw_fast_loading.svg" />
              <div className="flex flex-col items-center justify-start gap-y-2">
                <span className="text-2xl font-bold">Ultra Fast Service</span>
                <span>
                  Southeast Asia&rsquo;s best app in term of service speed.
                </span>
              </div>
            </div>
          </div>
          <div className="relative bottom-20 text-center">
            <div className="flex flex-col items-center justify-between gap-y-7">
              <img className="h-40" src="./images/undraw_friends.svg" />
              <div className="flex flex-col items-center justify-start gap-y-2">
                <span className="text-2xl font-bold">Eco Friendly</span>
                <span>55% carbon footprint reduction by the end of 2023.</span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="animated-gif-section__screen-small"
          className="inline h-72 w-full grid-cols-1 grid-rows-1 justify-between gap-x-20 rounded-t-[100px] bg-slate-100 px-20 sm:hidden"
        >
          <div className="relative bottom-20 text-center">
            <swiper-container init="false" ref={swiperElement}>
              <swiper-slide>
                <div className="flex flex-col items-center justify-between gap-y-7 pb-10 text-center">
                  <img className="h-40" src="./images/undraw_outer_space.svg" />
                  <div className="flex flex-col items-center justify-start gap-y-2">
                    <span className="text-2xl font-bold">
                      Leading Technology
                    </span>
                    <span>High-end and bleeding edge technology.</span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="flex flex-col items-center justify-between gap-y-7 pb-10 text-center">
                  <img className="h-40" src="./images/undraw_launching.svg" />
                  <div className="flex flex-col items-center justify-start gap-y-2">
                    <span className="text-2xl font-bold">
                      Reach for the Stars
                    </span>
                    <span>
                      No dream is too big for us. No star is too far to reach.{" "}
                    </span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="flex flex-col items-center justify-between gap-y-7 pb-10 text-center">
                  <img
                    className="h-40"
                    src="./images/undraw_fast_loading.svg"
                  />
                  <div className="flex flex-col items-center justify-start gap-y-2">
                    <span className="text-2xl font-bold">
                      Ultra Fast Service
                    </span>
                    <span>
                      Southeast Asia&rsquo;s best app in term of service speed.
                    </span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="flex flex-col items-center justify-between gap-y-7 pb-10 text-center">
                  <img className="h-40" src="./images/undraw_friends.svg" />
                  <div className="flex flex-col items-center justify-start gap-y-2">
                    <span className="text-2xl font-bold">Eco Friendly</span>
                    <span>
                      55% carbon footprint reduction by the end of 2023.
                    </span>
                  </div>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>
    </>
  );
}

export default AnimatedGifSection;
