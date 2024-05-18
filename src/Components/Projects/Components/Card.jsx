import React, { useState, useEffect } from 'react';

const Card = (props) => {
    // console.log(props);
  return (
    <div className='flex flex-col'>
      <div>
        <img  src={props.imageUrl} alt="No image available" />
      </div>
    </div>
  );
};

export default Card;
