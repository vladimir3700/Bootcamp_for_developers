import React from 'react';
import Second_block_item from "./Second_block_item";
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import './Second_block_base_facts.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Second_block_base_facts.scss';

SwiperCore.use ([Navigation, Pagination]);


const Second_block_base_facts = ({Second_block_base_facts_title,Second_block_base_facts_slides}) => {
  const Second_block_base_facts_mas = Second_block_base_facts_slides.map((second_block_slide) =>
  <SwiperSlide key={second_block_slide.id}>
  <Second_block_item item ={second_block_slide}/>
  </SwiperSlide>);

  return (
    


    
    <section className = "Second_block_base_facts_style Headblock_container">
      <h2 className = "Second_block_base_facts_style-title">{Second_block_base_facts_title}</h2>
    <div className = "swiper-button-prev"/>
    <Swiper navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
             }} 
             pagination={{
              el: '.Second_block_base_facts_style-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="Second_block_base_facts_style-pagination-radiobutton ${className}"></span>`;
              },
            }}
             slidesPerView={3} spaceBetween={41}  
             slidesPerGroup={3} 
            //centeredSlides={true} 
             //loop ={true}
             //loopFillGroupWithBlank={true}
             >
        {Second_block_base_facts_mas}
    </Swiper>
    <div className = "swiper-button-next"/>
    <div className = "Second_block_base_facts_style-pagination"/>
    </section>
  );
}

export default Second_block_base_facts;