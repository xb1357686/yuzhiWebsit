import React, { Component } from 'react';
import { Image, Box, Text, Button, Link } from "@chakra-ui/react";
import Swiper from 'swiper';

import 'swiper/css/swiper.css';

import school3 from "../../assets/school3.png";
import school4 from "../../assets/school4.png";
import school5 from "../../assets/school5.png";

class CurriculumImg extends Component {

  componentDidMount() {

    this.instanceSwiper()

  }
  instanceSwiper() {

    this.swiperObj = new Swiper('.swiper-container1', {

      spaceBetween: 10,  //间隔30
      autoplay: {// 自动滑动

        delay: 5000, //5秒切换一次

        stopOnLastSlide: false,

        disableOnInteraction: false,//

      },
      pagination: {  //分页器
        el: '.swiper-pagination'
      },
      observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要

      observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要

    })

  }

  render() {
    return (
      <Box padding="10px" position="relative" overflow="hidden">


        <div className="swiper-container1">
          <div className="swiper-wrapper">
            <div className="swiper-slide ">
              <Image src={school3} />
            </div>
            <div className="swiper-slide ">
              <Image src={school4} />
            </div>
            <div className="swiper-slide ">
              <Image src={school5} />
            </div>

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
