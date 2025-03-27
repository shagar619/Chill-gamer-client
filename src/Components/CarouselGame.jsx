import { Swiper, SwiperSlide } from "swiper/react";

import img1 from './../assets/Carousel/img1.jpg';
import img2 from './../assets/Carousel/img2.jpg';
import img3 from './../assets/Carousel/img3.jpg';
import img4 from './../assets/Carousel/img4.jpg';
import img5 from './../assets/Carousel/img5.jpg';
import img6 from './../assets/Carousel/img6.jpg';
import img7 from './../assets/Carousel/img7.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from "react";

import './../CSS/Carousel.css';

const CarouselGame = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
        <Swiper
            style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">

        <SwiperSlide>
            <img src={img6} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img7} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img3} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img4} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img5} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img1} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img2} />
        </SwiperSlide>


        </Swiper>

        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper">

        <SwiperSlide>
            <img src={img6} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img7} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img3} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img4} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img5} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img1} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img2} />
        </SwiperSlide>

        </Swiper>
    </>
);
};

export default CarouselGame;
