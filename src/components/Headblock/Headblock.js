import React from 'react';
import './Headblock.scss';

const Headblock = ({Headblock_background_image, Headblock_title, Headblock_links, Headblock_partners_logo}) => {
  const Headblock_svg_logos = Headblock_partners_logo.map((headblock_svg_onelogo, i) => <img src = {headblock_svg_onelogo} alt = "It is a partner logo" className = "Headblock_style_logos_svg" key={i}/>);
  const Headblock_nav_links = Headblock_links.map((headblock_get_onelink, i) => <a href = {headblock_get_onelink.href} className = "Headblock_style_nav_links" key={i}>{headblock_get_onelink.title}</a>); 
  //const Headblock_background_image_css = {
   //background: `url(${Headblock_background_image}`
  //}
  // style = {Headblock_background_image_css}

  return (
    <section className = "Headblock_Page_container"> 
      <div className = "Headblock_container">
      <div className = "Headblock_header_partners_logo">
      {Headblock_svg_logos}
      </div>
      <nav className = "Headblock_navigation_menu_links">
      {Headblock_nav_links}
      </nav>
      <h1 className = "Headblock_head_title">{Headblock_title}</h1>
      <a href = "#" className = "Headblock_button">Отследить</a> 
    </div>
    </section>
  );
};

export default Headblock;