import React, { Component } from "react";
import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import Swiper from "swiper";

import "swiper/css/swiper.css";

import school1 from "../../assets/bannerHome1.jpg";
import school2 from "../../assets/bannerHome2.jpg";
import school3 from "../../assets/bannerHome3.jpg";

class CurriculumImg extends Component {
  componentDidMount() {
    this.instanceSwiper();
  }
  instanceSwiper() {
    this.swiperObj = new Swiper(".swiper-container1", {
      spaceBetween: 0, //间隔30
      autoplay: {
        // 自动滑动
        delay: 4000, //5秒切换一次

        stopOnLastSlide: false,

        disableOnInteraction: false, //
      },
      pagination: {
        //分页器
        el: ".swiper-pagination",
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper    重要

      observeParents: true, //修改swiper的父元素时，自动初始化swiper  重要
    });
  }

  render() {
    return (
      <Box padding="" position="relative" overflow="hidden">
        <div className="swiper-container1">
          <div className="swiper-wrapper">
            <div className="swiper-slide ">
              <Image src={school1} m="0 auto" />
            </div>
            <div className="swiper-slide ">
              <Image src={school2} />
            </div>
            <div className="swiper-slide ">
              <Image src={school3} />
            </div>
            {/* <div className="swiper-slide ">
              <Image src={school4} />
            </div>
            <div className="swiper-slide ">
              <Image src={school5} />
            </div> */}
          </div>

          <div className="swiper-pagination"></div>

          {/* <div className="swiper-scrollbar"></div> */}
        </div>
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
      </Box>
    );
  }
}

export default CurriculumImg;
