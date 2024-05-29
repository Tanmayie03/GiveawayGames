import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel({ items }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex m-4 text-white bg-gray-700 rounded-lg shadow-md bg-opacity-60">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-1/2 rounded "
            />
            <div className="w-1/2 p-4">
              <div className="text-xl font-bold">{item.title}</div>
              <div className="">{item.worth}</div>
              <div className="">{item.description}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
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
