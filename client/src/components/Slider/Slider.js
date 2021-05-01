import React from 'react';
import './Slider.scss';

const Slider = ({ children }) => {
    return (
        <div className="Slider">
            <div className="Slider__Container">
                { children }
            </div>
        </div>
    )
}

export default Slider;
