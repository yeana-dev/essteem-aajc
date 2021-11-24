import React, {useState} from 'react';
import { SliderData } from './SilderData';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const ImageSilder = (slides) => {
const [current, setCurrent] = useState(0)
const length = slides.length



    return (
			<section className='slider'>
				<FaArrowAltCircleLeft className='left-arrow' />
				<FaArrowAltCircleRight className='left-arrow' />
				{SliderData.map((slide, index) => {
					return <img src={slide.image} alt='travel image' />;
				})}
			</section>
		);
};

export default ImageSilder
