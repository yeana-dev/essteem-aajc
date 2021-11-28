import React from 'react';

function SliderContent2({activeIndex, imageSlider}) {
    return (
        <section>
            {imageSlider.map((slide,index) => (
        <div key = {index} className = {index === activeIndex ? "slides active" : "inactive"}>
            <img className = "slide-image" src ={slide.urls} />
        </div>
            )
            )}
            
        </section>
    );
}

export default SliderContent2;