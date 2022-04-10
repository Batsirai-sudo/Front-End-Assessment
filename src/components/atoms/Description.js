import React from "react";
 
const Description = (props) => {
  const {children,className} = props;

  return (
    <p className={className}>
      {children} 
    </p>
  );
};  

export default Description; 