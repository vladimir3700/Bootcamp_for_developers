import React, {useEffect, useRef, useState} from 'react';
import './Section_map_mobile.scss';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZGRvYm92IiwiYSI6ImNrZ25jaTJsYzB0a3Yycm8xMThjNGIzOW8ifQ.2it6kOl9PtfsNhrf-SgfeA';
const Section_map_mobile = () => {
  
  const mapContainer_mobile = useRef(null);
  const [Section_map_info_mobile, Section_map_info_set_mobile] = useState({
   lat: 48.383022, 
   lng: 31.1828699,
   zoom: 5
  });

  useEffect (()=>{
    console.log(mapContainer_mobile)
    const map = new mapboxgl.Map({
      container: mapContainer_mobile.current,
      
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [Section_map_info_mobile.lng, Section_map_info_mobile.lat],
      zoom: Section_map_info_mobile.zoom
  }
  );
  map.addControl(new mapboxgl.NavigationControl());
  map.scrollZoom.disable();
}, [])
  
  return (
    <section className = {'Section_map_class_mobile Headblock_container_mobile'}>
      <h2 className="Section_map_class_mobile-head_title">
      Индекс качества воздуха в режиме реального времени
       </h2>  
      
    <div className = "Section_map_class_mobile-map" ref={mapContainer_mobile}></div>
     <p className="Section_map_class_mobile-text">
     Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.
     </p>
    </section>
  );
};

export default Section_map_mobile;