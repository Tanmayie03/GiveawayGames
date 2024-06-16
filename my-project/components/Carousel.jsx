import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel({ items }) {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="">
              <div className="relative md:h-[340px] flex md:flex-row flex-col m-4 text-white rounded-lg shadow-md bg-stone-800 bg-opacity-80 ">
                <p className="absolute px-5 py-[2px] font-semibold text-white bg-red-500 rounded-full top-3 left-3">
                  Popular
                </p>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover rounded h-52 md:h-full md:w-2/3 "
                />
                <div className="px-8 py-6 md:w-1/2">
                  <div className="text-xl font-bold line-clamp-1">
                    {item.title}
                  </div>
                  <div className="flex justify-start my-2">
                    <div className="flex items-center px-2 text-sm text-green-500 border-2 border-green-500 rounded-full w-fit ">
                      <div className="w-2 h-2 mr-1 bg-green-500 rounded-full animate-pulse"></div>
                      {item.status}
                    </div>
                    <div className="px-4 mx-3 text-[15px] text-center rounded-full bg-slate-400 w-fit">
                      {item.type}
                    </div>
                  </div>
                  <div className="my-6 line-clamp-3">{item.description}</div>
                  <div className="flex ">
                    <div className="flex items-center px-4 py-1 rounded w-fit bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400">
                      <span className="line-through text- ">{item.worth}</span>
                      <p className="pl-2 rounded-sm w-fit">Free</p>
                    </div>
                    <div className="flex items-center px-4 py-1 ml-4 border-2 rounded w-fit border-cyan-400">
                      <a href={item.open_giveaway} target="_blank">
                        <p className="pl-2 rounded-sm w-fit ">Claim now</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center mt-12 text-gray-300 ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        height="26px"
                        viewBox="0 0 32 33"
                        className="w-5 mr-1 ">
                        <path
                          fill="currentColor"
                          d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.59 6.59 0 0 1 12 16.14"
                          className="clr-i-solid clr-i-solid-path-1"
                        />
                        <path
                          fill="currentColor"
                          d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a10.47 10.47 0 0 0-1.09.06a6.59 6.59 0 0 1-2 2.45a10.91 10.91 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z"
                          className="clr-i-solid clr-i-solid-path-2"
                        />
                        <path
                          fill="currentColor"
                          d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z"
                          className="clr-i-solid clr-i-solid-path-3"
                        />
                        <path
                          fill="currentColor"
                          d="M24.43 13.44a6.54 6.54 0 0 1 0 .69a4.09 4.09 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44"
                          className="clr-i-solid clr-i-solid-path-4"
                        />
                        <circle
                          cx="17.87"
                          cy="13.45"
                          r="4.47"
                          fill="currentColor"
                          className="clr-i-solid clr-i-solid-path-5"
                        />
                        <path
                          fill="currentColor"
                          d="M18.11 20.3A9.69 9.69 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7"
                          className="clr-i-solid clr-i-solid-path-6"
                        />
                        <path fill="none" d="M0 0h36v36H0z" />
                      </svg>
                    </span>
                    <div className="text-xs">{item.users}+ claimed </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      worth: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
