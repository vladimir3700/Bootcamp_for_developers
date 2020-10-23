import React from 'react';

const Second_block_item = ({item}) => {
  return (
    <div className = "Second_block_base_facts-slide">
      <img src = {item.Second_block_slide_url} alt = "it is a slide image"/>
      <p className = "Second_block_base_facts-slide-title">
        {item.Second_block_description}
        </p>
    </div>
  );
};

export default Second_block_item;