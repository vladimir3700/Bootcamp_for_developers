import React from 'react';
import Second_block_item_mobile from "./Second_block_item_mobile";
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Second_block_base_facts_mobile.scss';

SwiperCore.use ([Navigation, Pagination]);


const Second_block_base_facts_mobile = ({Second_block_base_facts_title_mobile,Second_block_base_facts_slides_mobile}) => {
  const Second_block_base_facts_mas_mobile = Second_block_base_facts_slides_mobile.map((second_block_slide_mobile) =>
  <SwiperSlide key={second_block_slide_mobile.id}>
  <Second_block_item_mobile item ={second_block_slide_mobile}/>
  </SwiperSlide>);

  return (
    
    
    <section className = "Second_block_base_facts_style_mobile Headblock_container_mobile">
      <h2 className = "Second_block_base_facts_style_mobile-title">{Second_block_base_facts_title_mobile}</h2>
    <div className = "swiper-button-prev"/>
    <Swiper navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
             }} 
             pagination={{
              el: '.Second_block_base_facts_style_mobile-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="Second_block_base_facts_style_mobile-pagination-radiobutton ${className}"></span>`;
              },
            }}
             slidesPerView={1} spaceBetween={41}  
             slidesPerGroup={1} 
            //centeredSlides={true} 
             //loop ={true}
             //loopFillGroupWithBlank={true}
             >
        {Second_block_base_facts_mas_mobile}
    </Swiper>
    <div className = "swiper-button-next"/>
    <div className = "Second_block_base_facts_style_mobile-pagination"/>
    </section>
  );
}

export default Second_block_base_facts_mobile;