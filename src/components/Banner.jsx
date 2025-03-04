import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../assets/banner-images/banner-1.webp";
import bannerImage2 from "../assets/banner-images/banner-2.webp";
import bannerImage3 from "../assets/banner-images/banner-3.webp";

const Banner = () => {
  return (
    <Carousel
          showArrows={true}
          autoPlay={true}
          interval={2000}
          swipeable={true}
          infiniteLoop={true}
      // onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
    >
      <div>
        <img src={bannerImage1} className="w-full object-cover" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={bannerImage2} className="w-full object-cover" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={bannerImage3} className="w-1/2 object-cover" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Banner;
