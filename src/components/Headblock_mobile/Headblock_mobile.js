import React from 'react';
import './Headblock_mobile.scss';
import Hamburger from 'hamburger-react';
import { slide as Menu } from 'react-burger-menu';
import Hamburger_menu from '../Hamburger_menu/Hamburger_menu';




    const Headblock_mobile = ({Headblock_background_image, Headblock_title_mobile, Headblock_links_mobile, Headblock_partners_logo_mobile}) => {
    const Headblock_svg_logos_mobile = Headblock_partners_logo_mobile.map((headblock_svg_onelogo_mobile, i) => <img src = {headblock_svg_onelogo_mobile} alt = "It is a partner logo_mobile" className = "Headblock_style_logos_svg_mobile" key={i}/>);
    const Headblock_nav_links_mobile = Headblock_links_mobile.map((headblock_get_onelink, i) => <a href = {headblock_get_onelink.href} className = "Headblock_style_nav_links_mobile" key={i}>{headblock_get_onelink.title}</a>); 


      //<section className = "Headblock_Page_container_mobile"> 
      //<div className = "Headblock_container_mobile">
      //<div className = "Headblock_header_partners_logo_mobile">
      //{Headblock_svg_logos_mobile}
      //</div>
      //<nav className = "Headblock_navigation_menu_links_mobile">
      //{Headblock_nav_links_mobile}
      //</nav>
      //<h1 className = "Headblock_head_title_mobile">{Headblock_title_mobile}</h1>
      //<a href = "#" className = "Headblock_button_mobile">Отследить</a> 
    //</div>
    //</section>
 
      //<Hamburger className = "Hamburber_mobile_menu" label="Show menu" 
      //color = "#FFF"
      //direction="right"
      //distance="lg"
      //duration={0.8}
      
      //onToggle={toggled => {
        //if (toggled) {
          
        //} else {
           
        //}
      //}}
     // >
      //</Hamburger>

      //<div id="App">
      //<Hamburger_menu pageWrapId={"page-wrap"} outerContainerId={"App"} />

      //<div id="page-wrap">
        
      //</div>
      //</div>

    function onClickMenu(){
      document.getElementById("menu").classList.toggle("change");
      document.getElementById("nav").classList.toggle("change");
      document.getElementById("menu-bg").classList.toggle("change-bg");
    }
 
    return (
    <section className = "Headblock_Page_container_mobile"> 
      <div className = "Headblock_container_mobile">
      
      <div className = "Headblock_header_partners_logo_mobile">
      {Headblock_svg_logos_mobile}

      <div id="menu-bar">
        <div id="menu" onClick={onClickMenu}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
         <ul className="nav" id="nav">
           <li><a href="#">Основные факты</a></li>
           <li><a href="#">Индекс качества воздуха</a></li>
           <li><a href="#">Политика по уменьшению загрязнений</a></li>
           <li><a href="#">2020, Все права защищены</a></li>
           <li><a href="#">Согласие на обработку персональных данных</a></li>
           <li><a href="#">Политика конфедициальности</a></li>
         </ul>
      </div>
      <div className="menu-bg" id="menu-bg"></div>

      </div>
     
      <h1 className = "Headblock_head_title_mobile">{Headblock_title_mobile}</h1>
      <a href = "#" className = "Headblock_button_mobile">Отследить</a> 
    </div>
    </section>
  );
};

export default Headblock_mobile;