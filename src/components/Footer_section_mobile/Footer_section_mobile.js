import React from 'react';
import './Footer_section_mobile.scss';

const Footer_section_mobile = ({Footer_logo_items_mobile, Footer_links}) => {

  const Footer_partner_pictures_mobile = Footer_logo_items_mobile.map((footer_logo_mobile,i) => <img key={i} src={footer_logo_mobile} 
                                 alt={'it is a partner logo'}
                                 className="Footer_section_mobile-partners-item"
                                 />);
  const Footer_section_navigation_links = Footer_links.map((footer_link,i) =>
                                          <a href={footer_link.href}
                                          key={i}
                                          className={'Footer_section_mobile-navigation-link'}>
                                          {footer_link.title}
                                          </a>
                                        )


  return (
    <footer className="Footer_section_mobile">
    <div className="Headblock_container_mobile">
      <div className="Footer_section_mobile-partners">
      {Footer_partner_pictures_mobile}
      </div>
      
      <div className = "Footer_section_mobile-text-wrap">
      <div className="Footer_section_mobile-navigation">
       {Footer_section_navigation_links}
      </div>
      
      <p className="Footer_section_mobile-navigation-text">
      Сайт был разработан <span className = "Footer_section_mobile-yellow_text"> Владимиром Добровольским </span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="Footer_section_mobile-yellow_text">Валерией Бубырь</span>.
      </p>
      
      </div>
      <p className="Footer_section_mobile-lower_text">
        2020, Все права защищены
      </p>
      <p className="Footer_section_mobile-lower_text">
      Согласие на обработку персональных данных <br/>
      Политика конфиденциальности
      </p>
      </div>
    </footer>
  );
};

export default Footer_section_mobile;