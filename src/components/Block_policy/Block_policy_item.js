import React, { useState } from 'react';

const Block_policy_item = ({sector_pictures, number}) => {
const [Block_policy_tooltip_showing, Block_policy_tooltip_set_showing] = useState (false);
const [Block_policy_direction_switch, Block_policy_set_direction_switch] = useState(true)
const Block_policy_tooltip_toogle = (newValue) =>{

  if (number%3 == 0){
  Block_policy_set_direction_switch(true)
  }
  else {
  Block_policy_set_direction_switch(false)
  }
  Block_policy_tooltip_set_showing(newValue);
}
//const Block_policy_tooltip_func = () => {
//Block_policy_tooltip_set_showing(
  //!Block_policy_tooltip_showing
//)
//}
  return (
    <div className = "Block_policy_style-pictures-items"
           onMouseEnter={() => Block_policy_tooltip_toogle(true)}
           onMouseLeave={() => Block_policy_tooltip_toogle(false)} 
           style = {{ background: `url(${sector_pictures.block_policy_pic_itemurl}) center no-repeat`,
           backgroundSize: 'cover'
         }}> 
        <p className = "Block_policy_style-name">{sector_pictures.block_policy_name}</p>
        {
        Block_policy_tooltip_showing && <p className = {`Block_policy_style-tooltip
                                        ${ Block_policy_direction_switch
                                        ? "Block_policy_style-tooltip-switched"
                                        : ""
                                        }`}>
                                        {sector_pictures.block_policy_description}
                                        </p>
        }
     </div>
  );
};

export default Block_policy_item;