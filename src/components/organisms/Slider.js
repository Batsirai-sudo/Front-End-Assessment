import React, { useState } from "react";
import SliderItem  from '../molecules/SliderItem'
import Arrow from '../atoms/Arrow';
import Data from '../../constants/data'

function Slider() {  
    
    const [scroll_points] = useState({mobile:320,desktop:1020})
    const [mobile_breakpoint] = useState(window.matchMedia("(max-width: 600px)"))

    const slideLeft =()=> { 
        var slider_element = document.querySelector('.slider__container');
        if (mobile_breakpoint.matches) {   
            return   slider_element.scrollLeft = slider_element.scrollLeft - scroll_points.mobile;              
           } 
        slider_element.scrollLeft = slider_element.scrollLeft - scroll_points.desktop;     
    }
    
    const slideRight =()=> {   

        var slider_element = document.querySelector('.slider__container');
        if (mobile_breakpoint.matches) {  
           return   slider_element.scrollLeft = slider_element.scrollLeft + scroll_points.mobile;              
          } 
        slider_element.scrollLeft = slider_element.scrollLeft + scroll_points.desktop;           
    }    

  return ( 
    <div className="slider">  
      <Arrow onClick={slideLeft} className="slider__arrow slider__arrow--left  slider--pointer" />   
        <div className="slider__container"> 
                {Data.slides.map((slide, index) =>{
                    return <SliderItem key={index} data={slide} />     
                })} 
        </div>
       <Arrow onClick={slideRight} className="slider__arrow slider__arrow--right slider--pointer"/>  
    </div>
  ); 
}

export default Slider;
