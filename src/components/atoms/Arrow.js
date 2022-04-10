import React from "react";
import Chevron from './Chevron';

const Arrow = (props) => {
    const {className} = props;
    
  return ( 
    <div onClick={props.onClick} className={className}>    
        <Chevron/>
    </div>  
  );
};  

export default Arrow;  