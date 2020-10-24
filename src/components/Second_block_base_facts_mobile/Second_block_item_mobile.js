import React from 'react';

const Second_block_item_mobile = ({item}) => {
  return (
    <div className = "Second_block_base_facts_mobile-slide">
    <img src = {item.Second_block_slide_url_mobile} alt = "it is a slide image"/>
    <p className = "Second_block_base_facts_mobile-slide-title">
      {item.Second_block_description_mobile}
      </p>
  </div>
  );
};

export default Second_block_item_mobile;