import React, {useState} from 'react';
import { SliderData } from './SilderData';

import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';


const ImageSilder = (slides) => {
const [current, setCurrent] = useState(0)
const length = slides.length;




const nextSlide = () =>
{
    setCurrent(current === length -1 ? 0 : current +1);

}

if(slides.length <=0 )
{
    return null;
}

    return (
			<section className='slider'>
				<VscChevronLeft className='left-arrow' />
				<VscChevronRight className='left-arrow' onClick={nextSlide} />
				{SliderData.map((slide, index) => {
					return <img src={slide.image} alt='travel image' className='image' />;
				})}
			</section>
		);
};

export default ImageSilder
