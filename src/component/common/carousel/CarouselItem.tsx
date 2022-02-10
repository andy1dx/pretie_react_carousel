import React from "react";
import './CarouselItem.css';
import { CarouselItemPropsInterface } from './CarouselItemInterface' 

const CarouselItem = React.memo<CarouselItemPropsInterface>(
  ({ img, url, title, id }) => {
    
    const uniqueKey = 'carousel-item-' + id 

    return (
      <div className="pretie-carousel_item">
        <a href={url} target="_blank" rel="noreferrer">      
          <img
            key={uniqueKey}
            src={img}
            alt="nature landscape"
            className="image"
          />
          <div className="pretie-carousel_text">
            <div className="pretie-carousel_text-title">
              {title}
            </div>
          </div>
        </a>
      </div>
    );
  }
);

export default CarouselItem;
