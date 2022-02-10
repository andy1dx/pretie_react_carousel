import React, { useState, useEffect } from "react";
import './Carousel.css';
import { Dots } from "./Dots";
import { CarouselPropsInterface } from './CarouselInterface' 
import { useSwipeable } from 'react-swipeable'

const Carousel = React.memo<CarouselPropsInterface>(
  ({ banners, children, hideControl, hideDots }) => {
    const [paused, setPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)
    const isControlsVisible = banners.length > 0 && !hideControl;

    const isBotsVisible = banners.length > 0&& !hideDots;

    const isHaveData = banners.length > 0;

    const updateIndex = (newIndex: number) => {
      if (newIndex < 0) {
        newIndex = banners.length - 1
      } else if (newIndex >= banners.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex)
    }
    const onNextClick = () => {
      updateIndex(activeIndex + 1);
    };

    const onPrevClick = () => {
      updateIndex(activeIndex - 1);
    };

    useEffect(()=> {
      const interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1);
        }
      }, 3000)

      return () => {
        if(interval) {
          clearInterval(interval);
        }
      }
    })
    const handlerSwipe = useSwipeable({
      onSwipedLeft: () => updateIndex(activeIndex + 1),
      onSwipedRight: () => updateIndex(activeIndex - 1)
    })
    return (
      <div
        {...handlerSwipe}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        <div 
          className="pretie-carousel">
          {isControlsVisible && (
            <div onClick={onPrevClick} className="pretie-carousel_prev_button">
            </div>
          )}
          {isHaveData && (
            <div className="pretie-carousel_inner" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
              {banners.map((slide: any) =>
                children ? children(slide) : null
              )}
            </div>
          )}
          {isControlsVisible && (
            <div onClick={onNextClick} className="pretie-carousel_next_button">
            </div>
          )}
        </div>
        {isBotsVisible && (
          <div className="carousel_dots_control">
            <Dots
              items={banners.length}
              active={activeIndex}
              onClick={(active: number) => updateIndex(active)}
            />
          </div>
        )}
      </div>
    );
  }
);

export default Carousel;
