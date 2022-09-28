import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";
import PostMockup from "../components/PostMockup";

function Presentation() {
  return (
    <div className="w-screen h-screen">
      <Splide
        options={{
          rewind: false,
          perPage: "1",
          width: "100%",
          WheelEvent: false,
          autoplay: true,
          interval: "3000",
          speed: "2000",
          releaseWheel: true,
          pagination: true,
          arrows: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Image src="/1.png" layout="fill" />
        </SplideSlide>
        <SplideSlide>
          <Image src="/2.png" layout="fill" />
        </SplideSlide>
        <SplideSlide>
          <PostMockup />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Presentation;
