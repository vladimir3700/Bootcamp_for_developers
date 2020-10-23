import React, { useState,useEffect } from 'react';
const UseScreenSize = () => {
const [size, setSize] = useState({...window.screen})

useEffect(() => {
  const handleResize = () =>
  setSize({...window.screen})
  window.addEventListener('resize',handleResize);
  return window.removeEventListener('resize',handleResize)
},[])
return size;
}
export default UseScreenSize;