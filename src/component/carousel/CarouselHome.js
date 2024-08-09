import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './CarouselHome.css'
import cakes from './cakes.webp'
import ingredient from './ingredient.jpg'
const items = [
  {
    src: 'https://st2.depositphotos.com/11700927/44959/i/450/depositphotos_449595794-stock-photo-flour-wheat-eggs-rolling-pin.jpg',
    altText: 'Slide 1',
    caption: 'Flour and Raw Ingredients',
    key: 1,
  },
  {
    src: 'https://www.shutterstock.com/image-photo/various-sweets-desserts-set-collection-600nw-2343752481.jpg',
    altText: 'Slide 2',
    caption: 'Various type of Bakeries and Sweets',
    key: 2,
  },
  {
    src: 'https://www.shutterstock.com/image-illustration/set-baking-tools-kitchen-utensils-600nw-2245159591.jpg',
    altText: '',
    caption: 'Baking and Kitchen Tools',
    key: 3,
  },
];

function CarouselHome(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-image d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption
          
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselHome;