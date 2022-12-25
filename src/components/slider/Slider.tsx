import React from 'react';
import { Carousel } from 'antd';
import './slider.css' 



const Slider: React.FC = () => (
<div><Carousel autoplay>
    <div>
      <img src="./images/12299139_753986188036729_9085708763895987867_n.jpg" alt="pic" className="sliderimg"/>
    </div>
    <div>
      <img src="./images/10583783_569680176467332_794025937150639091_n.jpg" className="sliderimg"/>
    </div>
    <div>
      <img src="./images/10001118_492817487486935_1701119312_o.jpg" className="sliderimg" />
    </div>
    <div>
      <img src="./images/12049157_726187634149918_5602355249078498443_n.jpg" className="sliderimg"/>
    </div>
  </Carousel></div>

  
);

export default Slider;