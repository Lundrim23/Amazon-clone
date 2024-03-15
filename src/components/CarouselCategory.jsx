import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function CarousalCategory() {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={'../images/category_0.jpg'} alt="Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_1.jpg'} alt="Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_2.jpg'} alt="Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_3.jpg'} alt="Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_4.jpg'} alt="Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_5.jpg'} alt="Category" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarousalCategory;
