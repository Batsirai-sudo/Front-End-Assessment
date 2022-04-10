import React from "react";
import Title from '../atoms/Title';
import Description from '../atoms/Description';
import Image from '../atoms/Image';
import Card from '../atoms/Card';
import Link from '../atoms/Link';

const SliderItem = (props) => {
    const {data} = props;

  return (
    <Card className="slider__item">  
       <div className="slider__image-container">
         <Image image={data.image} className="slider__image"/>
       </div> 
        <div className="slider__text-container">
          <Title className>{data.title}</Title> 
          <Description className="slider__description">{data.description}</Description>
          <Link className="slider__link  slider--pointer">Read more</Link>
        </div>  
    </Card>
  ); 
}

export default SliderItem;
