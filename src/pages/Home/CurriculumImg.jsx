import React, { Component } from "react";
import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import Swiper from "swiper";

import "swiper/css/swiper.css";

import system1 from "../../assets/system1.png";
import system2 from "../../assets/system2.png";
import system3 from "../../assets/system3.png";
import system4 from "../../assets/system4.png";
import system5 from "../../assets/system5.png";
import system6 from "../../assets/system6.png";

class CurriculumImg extends Component {
  componentDidMount() {
    this.instanceSwiper();
  }
  instanceSwiper() {
    this.swiperObj = new Swiper(".swiper-container", {
      slidesPerView: 1,
      slidesPerView: 4, //一行显示3个
      spaceBetween: 10, //间隔30
      autoplay: {
        // 自动滑动

        delay: 5000, //5秒切换一次

        stopOnLastSlide: false,

        disableOnInteraction: false, //
      },
      pagination: {
        //分页器
        el: ".swiper-pagination",
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper    重要

      observeParents: true, //修改swiper的父元素时，自动初始化swiper  重要
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  render() {
    return (
      <Box padding="80px" position="relative" w="1160px" m="0 auto">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide ">
              <Image src={system1} />
            </div>
            <div className="swiper-slide ">
              <Image src={system2} />
            </div>
            <div className="swiper-slide ">
              <Image src={system3} />
            </div>
            <div className="swiper-slide ">
              <Image src={system4} />
            </div>
            <div className="swiper-slide ">
              <Image src={system5} />
            </div>
            <div className="swiper-slide ">
              <Image src={system6} />
            </div>
          </div>

          <div className="swiper-pagination"></div>

          {/* <div className="swiper-scrollbar"></div> */}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Box>
    );
  }
}

export default CurriculumImg;
