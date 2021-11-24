import React from 'react'
import { SliderData } from './SilderData';

const ImageSilder = () => {
    return (
        <>
           {SliderData.map((slide, index) =>{
               return <img src={slide.image} alt = "travel image" />;

               

           })}
        </>
    )
};

export default ImageSilder
