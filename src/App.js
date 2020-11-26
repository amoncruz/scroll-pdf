import React, { useEffect, useRef, useState } from 'react';
import banner from './GT_Banners.pdf'

function MyApp() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scroll, setScroll] = useState({type:""});
  const spaceScroll = 200;
  const ref = useRef();

  useEffect(()=>{
    document.addEventListener("keydown", onKeyPress);
  },[])

  useEffect(() => {

    switch(scroll.type){
      case "bottom":
        ref.current.scrollTo(currentScroll,currentScroll + spaceScroll);
        return currentScroll + spaceScroll < 500 && setCurrentScroll(currentScroll + spaceScroll);    

      case "top":
        ref.current.scrollTo(currentScroll,currentScroll - spaceScroll);
        return currentScroll - spaceScroll >= 0 && setCurrentScroll(currentScroll - spaceScroll);    }

  },[scroll])

  const onKeyPress =  (e) => {
    if(e.keyCode === 40){
        setScroll({type:"bottom"});
    }

    if(e.keyCode === 38){
      setScroll({type:"top"});
    }
  }

  return (
    <div class="container-iframe" ref={ref}> 
      <iframe class="responsive-iframe" src={banner}></iframe>
    </div>
  );
}

export default MyApp;