import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Scrollbar } from "swiper/modules";
import banner1 from "../../assets/medicine-1.png";
import banner2 from "../../assets/medicine-2.png";
import banner3 from "../../assets/medicine-3.png";
import { GoPlus } from "react-icons/go";
import useSlider from "../../Hooks/useSlider";
const Banner = () => {
  const [slider] = useSlider();
  return (
    <div className="pt-6 h-[350px] bg-[#EEF7FC]">
      <Swiper
        navigation={true}
        className="mySwiper"
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Navigation]}
      >
        {slider.map((item) => (
          <SwiperSlide item={item} key={item._id}>
            <div className="flex lg:flex-row flex-col justify-between items-center h-[310px] px-8">
              <div className="lg:w-1/2 w-full px-6 space-y-2">
                <h4 className="lg:text-6xl text-3xl font-bold text-[#333333]">
                 {item.description} <br />
                  Medicine Order
                </h4>
                <p className="text-[#333333] font-semibold text-lg">
                  Get the Offer Quickly
                </p>
                <button className="px-4 py-2 bg-[#4E97FD] font-bold text-white rounded-full flex items-center gap-1">
                  Buy Now <GoPlus></GoPlus>
                </button>
              </div>
              <div className="lg:w-1/2 w-full">
                <img
                  className="w-3/4 m-auto place-items-center"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <style>
          {`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: #4E97FD;
          border-radius: 9999px;
          padding: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #F7F6F9; 
          color:#000;
          border:1px solid black
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem;
        }
        `}
        </style>
      </Swiper>
    </div>
  );
};

export default Banner;
