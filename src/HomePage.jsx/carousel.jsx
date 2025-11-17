import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarouselFunction() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="h-[100vh] w-full relative -top-[1vh]">
      <Carousel
        slide
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        pause={false}
        className="w-full h-full"
      >
        <Carousel.Item className="h-full">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/truck-loading-containers-rain-night_23-2151989562.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="https://www.movexaintl.com/wp-content/uploads/2025/08/Untitled-design-1-min.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="https://www.movexaintl.com/wp-content/uploads/2025/08/Untitled-design-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>


    // <div className="h-full hidden md:block mt-30 md:mt-20 lg:mt-0 w-[80%] bg-black z-9">
    //   <Carousel
    //     slide
    //     activeIndex={index}
    //     onSelect={handleSelect}
    //     interval={2500}
    //     pause={true}
    //     className="w-full h-full"
    //   >
    //     <Carousel.Item className="h-full">
    //       <img
    //         className="w-full h-full object-cover"
    //         src="https://postex.pk/assets/images/home/home-AED-to-PKR.png"
    //         alt="Second slide"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item className="h-full">
    //       <img
    //         className="w-full h-full object-cover"
    //         src="https://postex.pk/assets/images/home/home-AED-to-PKR.png"
    //         alt="First slide"
    //       />
    //     </Carousel.Item>

    //     <Carousel.Item className="h-full">
    //       <img
    //         className="w-full h-full object-cover"
    //         src="https://postex.pk/assets/images/home/home-AED-to-PKR.png"
    //         alt="Second slide"
    //       />
    //     </Carousel.Item>

    //     <Carousel.Item className="h-full">
    //       <img
    //         className="w-full h-full object-cover"
    //         src="https://postex.pk/assets/images/home/home-AED-to-PKR.png"
    //         alt="Second slide"
    //       />
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
  );
}
