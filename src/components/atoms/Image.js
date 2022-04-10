import React from "react";
import {images_path} from '../../config/path';

function Image(props) {
    const {image,className} = props;

  return ( 
      <img src={images_path(image)} className={className} />
  ); 
}

export default Image;
