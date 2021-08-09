import React, { Component } from 'react';
import Swiper from "swiper";
// import Swiper from "swiper/dist/js/swiper.js";
import "swiper/swiper-bundle.css";
class CurriculumImg extends Component {


    componentDidMount() {
        new Swiper(".swiper-container", {
            slidesPerView: 6,
            // centeredSlides: false,
            loop: true,
            
            // observeParents:true,
            // observer:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
              }, scrollbar: {
                el: '.swiper-scrollbar',
              },

        });


    }
    // prev =(e)=>{
    //     this.$refs.swiperTop.$swiper.slidePrev();
    // }


    render() {
        return (
            <div>
            <div class="swiper-container"           style={{
                width: "1200px",
                height: "100px",
              }}>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev">11111111111111111111</div>
                <div class="swiper-button-next">22222222222222222</div>

                <div class="swiper-scrollbar"></div>
            </div>

            </div>
        );
    }
}

export default CurriculumImg;
