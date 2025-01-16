import Title from "../../Components/Title/Title";
import DiscountCard from "../../Components/DiscountCard/DiscountCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import img1 from "../../assets/img1.webp";
const DiscountProducts = () => {
  return (
    <div>
      <Title title="Discount Products"></Title>

      <div className="py-12 w-11/12 mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <DiscountCard 
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>

          <SwiperSlide>
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </SwiperSlide>
          


        </Swiper>
      </div>
    </div>
  );
};

export default DiscountProducts;
