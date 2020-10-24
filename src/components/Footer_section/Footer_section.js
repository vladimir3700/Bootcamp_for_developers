import React from 'react';
import './Footer_section.scss';

const Footer_section = ({Footer_logo_items, Footer_links}) => {
  const Footer_partner_pictures = Footer_logo_items.map((footer_logo,i) => <img key={i} src={footer_logo} 
                                 alt={'it is a partner logo'}
                                 className="Footer_section-partners-item"
                                 />);
  const Footer_section_navigation_links = Footer_links.map((footer_link,i) =>
                                          <a href={footer_link.href}
                                          key={i}
                                          className={'Footer_section-navigation-link'}>
                                          {footer_link.title}
                                          </a>
                                        )
  //console.log(Footer_logo_items);
  //console.log(Footer_links);
  return (
    <footer className="Footer_section">
     
      <div className="Headblock_container">
      <div className="Footer_section-partners">
      {Footer_partner_pictures}
      </div>
      
      <div className = "Footer_section-text-wrap">
      <div className="Footer_section-navigation">
       {Footer_section_navigation_links}
      </div>
      <p className="Footer_section-navigation-text">
      Сайт был разработан <span className = "Footer_section-yellow_text"> Владимиром Добровольским </span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="Footer_section-yellow_text">Валерией Бубырь</span>.
      </p>
      </div>
      <p className="Footer_section-lower_text">
        2020, Все права защищены
      </p>
      <p className="Footer_section-lower_text">
      Согласие на обработку персональных данных <br/>
      Политика конфиденциальности
      </p>
      </div>
    </footer>
  );
};

export default Footer_section;