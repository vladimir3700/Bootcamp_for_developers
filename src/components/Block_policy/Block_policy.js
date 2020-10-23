import React from 'react';
import './Block_policy.scss';
import Block_policy_item from './Block_policy_item';

const Block_policy = ({Block_policy_head_title,Block_policy_title,Block_policy_pictures}) => {
const Block_policy_pictures_massive = Block_policy_pictures.map((sector_pictures,i) => 
      <Block_policy_item sector_pictures = {sector_pictures} number={i+1} key ={i}/>) 

//<div key = {i} className = "Block_policy_style-pictures-items" 
//style = {{ background: `url(${sector_pictures.block_policy_pic_itemurl}) center no-repeat`,
           //backgroundSize: 'cover'
//}}> 
//<p className = "Block_policy_style-name">{sector_pictures.block_policy_name}</p>

//<p className = "Block_policy_style-tooltip">{sector_pictures.block_policy_description}</p>

//</div>)

  return (
    <section className = "Block_policy_style Headblock_container">
    <h2 className = "Block_policy_style-headtitle">{Block_policy_head_title}</h2>
  <p className = "Block_policy_style-title">{Block_policy_title}</p>
    
     <div className = "Block_policy_style-pictures">
       {Block_policy_pictures_massive}
      </div>
    
      
    </section>
  );
};

export default Block_policy;