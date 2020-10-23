import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Headblock from './components/Headblock/Headblock';
import North from './assets/Headblock/headblock_North.svg';
import ITN from './assets/Headblock/headblock_ITN.svg';
import Global from './assets/Headblock/headblock_Global.svg';
import North_mobile from './assets/Headblock_mobile/North_mobile.svg';
import ITN_mobile from './assets/Headblock_mobile/ITN_mobile.svg';
import Global_mobile from './assets/Headblock_mobile/Global_mobile.svg';
import Second_block_base_facts from './components/Second_block_base_facts/Second_block_base_facts';
import Block_policy from './components/Block_policy/Block_policy';
//import headblock_background_image from './assets/Headblock/headblock_background_image.jpg';
import UseScreenSize from './screen_utils/screen_size';
import Footer_section from './components/Footer_section/Footer_section';
import Section_map from './components/Section_map/Section_map';
import Media from 'react-media';
import Headblock_mobile from './components/Headblock_mobile/Headblock_mobile';

function App() {
  const size_Object = UseScreenSize();
  console.log(size_Object);
  const headblock_logo_partners_images = [
  North,
  ITN,
  Global
  ]

  const headblock_logo_partners_images_mobile = [
    North_mobile,
    ITN_mobile,
    Global_mobile
    ]

  const headblock_nav_menu_links = [
   {
    title: "Основные факты",
    href: "#Headblock_base_facts_link"
   },
   {
     title:"Индекс качества воздуха",
     href: "#Headblock_index_quality_link"
   },
   {
    title: "Политика по уменьшению загрязнений",
    href: "#Headblock_dirt_low_link"
   }
  ]

  const Second_block_base_facts_slides_mas = [
    
    {
      id: '0001',
      Second_block_slide_url: require("./assets/Second_block_base_facts/women_children.jpg"),
      Second_block_description: "Женщины и дети – главные жертвы загрязнения воздуха"
    },

    {
      id: '0002',
      Second_block_slide_url: require("./assets/Second_block_base_facts/m_1.jpg"),
      Second_block_description: "Защитники окружающей среды подвергаются преследованиям"
    },
    
    {
      id: '0003',
      Second_block_slide_url: require("./assets/Second_block_base_facts/m_2.jpg"),
      Second_block_description: "Загрязнение воздуха – нарушение прав человека"
    },

    {
      id: '0004',
      Second_block_slide_url: require("./assets/Second_block_base_facts/flower.jpg"),
      Second_block_description: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
    },

    {
      id: '0005',
      Second_block_slide_url: require("./assets/Second_block_base_facts/calculator.jpg"),
      Second_block_description: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
    }

  ]

  const Block_policy_pictures_with_description = [
  {
    block_policy_name : "Промышленность",
    block_policy_description : "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)",
    block_policy_pic_itemurl : require('./assets/Block_policy/Block_policy_Industry.jpg')
  },
  {
    block_policy_name : "Транспорт",
    block_policy_description : "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы",
    block_policy_pic_itemurl : require('./assets/Block_policy/Block_policy_Transport.jpg')
  },
  {
    block_policy_name : "Городское планирование",
    block_policy_description : "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов",
    block_policy_pic_itemurl : require('./assets/Block_policy/Block_policy_Urban_planning.jpg') 
  },
  {
    block_policy_name : "Энергия",
    block_policy_description : "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения",
    block_policy_pic_itemurl : require('./assets/Block_policy/Block_policy_Energy.jpg')
  },
  {
    block_policy_name : "Энергетика",
    block_policy_description : "Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)",
    block_policy_pic_itemurl : require('./assets/Block_policy/Block_policy_Energetics.jpg')
  },
  {
    block_policy_name : "Утилизация отходов",
    block_policy_description : "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов",
    block_policy_pic_itemurl : require('./assets/Block_policy/Block_policy_Recycling.jpg')
  }
]


  return (
    <>
    <Media queries={{ small: { maxWidth: 414 } }}>
          {matches =>
            matches.small ? (
              //<p>The document is less than 600px wide.</p>
              <Headblock_mobile
              Headblock_partners_logo_mobile = {headblock_logo_partners_images_mobile}
              Headblock_title_mobile = "Качество атмосферного воздуха и здоровье"
              Headblock_links_mobile = {headblock_nav_menu_links}
              />
               
            ) : (
              //<p>The document is at least 600px wide.</p>
              <Headblock Headblock_partners_logo = {headblock_logo_partners_images}
               Headblock_title = "Качество атмосферного воздуха и здоровье"
              //Headblock_background_image = {headblock_background_image}
               Headblock_links = {headblock_nav_menu_links}
               /> 
            )
          }
    </Media>

    <Media queries={{ small: { maxWidth: 414 } }}>
          {matches =>
            matches.small ? (
              
              <Second_block_base_facts
              Second_block_base_facts_title = "Основные факты" 
              Second_block_base_facts_slides = {Second_block_base_facts_slides_mas}
             />
               
            ) : (
              <Second_block_base_facts
              Second_block_base_facts_title = "Основные факты" 
              Second_block_base_facts_slides = {Second_block_base_facts_slides_mas}
             />
            )
          }
    </Media>


              <Section_map/>

              <Block_policy 
               Block_policy_head_title = "Политика по уменьшению загрязнений"
               Block_policy_title = "Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
               Block_policy_pictures = {Block_policy_pictures_with_description} 
              />

              <Footer_section Footer_logo_items={headblock_logo_partners_images} 
                    Footer_links={headblock_nav_menu_links}
                    />
    </>
  );
}

export default App;
