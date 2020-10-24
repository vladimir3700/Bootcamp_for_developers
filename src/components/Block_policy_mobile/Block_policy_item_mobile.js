import React, { useState } from 'react';

const Block_policy_item_mobile = ({sector_pictures_mobile, number}) => {
const [Block_policy_tooltip_showing_mobile, Block_policy_tooltip_set_showing_mobile] = useState (false);
const [Block_policy_direction_switch_mobile, Block_policy_set_direction_switch_mobile] = useState(true)
const Block_policy_tooltip_toogle_mobile = (newValue) =>{

  if (number%3 == 0){
  Block_policy_set_direction_switch_mobile(true)
  }
  else {
  Block_policy_set_direction_switch_mobile(false)
  }
  Block_policy_tooltip_set_showing_mobile(newValue);
}

  return (
    <div className = "Block_policy_style_mobile-pictures-items"
           onMouseEnter={() => Block_policy_tooltip_toogle_mobile(true)}
           onMouseLeave={() => Block_policy_tooltip_toogle_mobile(false)} 
           style = {{ background: `url(${sector_pictures_mobile.block_policy_pic_itemurl_mobile}) center no-repeat`,
           backgroundSize: 'cover'
         }}> 
        <p className = "Block_policy_style_mobile-name">{sector_pictures_mobile.block_policy_name_mobile}</p>
        {
        Block_policy_tooltip_showing_mobile && <p className = {`Block_policy_style_mobile-tooltip
                                        ${ Block_policy_direction_switch_mobile
                                        ? "Block_policy_style_mobile-tooltip-switched"
                                        : ""
                                        }`}>
                                        {sector_pictures_mobile.block_policy_description_mobile}
                                        </p>
        }
     </div>
  );
};

export default Block_policy_item_mobile;