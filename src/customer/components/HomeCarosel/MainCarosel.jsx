import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { mainCaroselData } from './MainCaroselData';
import { Home } from '@mui/icons-material';



const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};



const MainCarosel = () => {
    const items = mainCaroselData.map((item) => (
        <img
          className="cursor-pointer rounded-md"
        //   onClick={() => navigate(item.path)}
          src={item.image}
          alt=""
         
          role="presentation"
        />
      ));

    return(
        <div>
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay={2000}
        disableButtonsControls
        controlsStrategy="alternate"
        infinite
    />
    </div>
);
}
export default MainCarosel;