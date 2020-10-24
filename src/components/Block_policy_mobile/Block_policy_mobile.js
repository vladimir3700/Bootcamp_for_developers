import React from 'react';
import './Block_policy_mobile.scss';
import Block_policy_item_mobile from './Block_policy_item_mobile';

const Block_policy_mobile = ({Block_policy_head_title_mobile,Block_policy_title_mobile,Block_policy_pictures_mobile}) => {
const Block_policy_pictures_massive_mobile = Block_policy_pictures_mobile.map((sector_pictures_mobile,i) => 
      <Block_policy_item_mobile sector_pictures_mobile = {sector_pictures_mobile} number={i+1} key ={i}/>) 

//<p className = "Block_policy_style_mobile-title">{Block_policy_title_mobile}</p>
  return (
    <section className = "Block_policy_style_mobile Headblock_container">
    <h2 className = "Block_policy_style_mobile-headtitle">{Block_policy_head_title_mobile}</h2>
  
    
     <div className = "Block_policy_style_mobile-pictures">
       {Block_policy_pictures_massive_mobile}
      </div>
    
      
    </section>
  );
};

export default Block_policy_mobile;