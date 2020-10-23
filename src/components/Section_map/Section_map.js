import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Section_map.scss';


mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZGRvYm92IiwiYSI6ImNrZ2t4MnlzYzBudXgydG5haW5mMXFodXUifQ.zqFkmGtDCsDEAjO2_dwM9A';
const Section_map = () => {
  const mapContainer = useRef(null);
  const [Section_map_info, Section_map_info_set] = useState({
   lat: 48.383022, 
   lng: 31.1828699,
   zoom: 5
  });

  useEffect (()=>{
    console.log(mapContainer)
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      //style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [Section_map_info.lng, Section_map_info.lat],
      zoom: Section_map_info.zoom
  }
  );
}, [])

  return (
    <section className = {'Section_map_class Headblock_container'}>
      <h2 className="Section_map_class-head_title">
      Индекс качества воздуха в режиме реального времени
       </h2>  
      
    <div className = "Section_map_class-map" ref={mapContainer}></div>
     <p className="Section_map_class-text">
     Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.
     </p>
    </section>
  );
};

export default Section_map;