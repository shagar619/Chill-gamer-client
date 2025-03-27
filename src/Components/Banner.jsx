import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img6 from './../assets/banner-img/img5.jpg'



const Banner = () => {
    return (
        <div>

            <Carousel>

                <div>
                    <img src={img6} />
                </div>


            </Carousel>
            
        </div>
    );
};

export default Banner;