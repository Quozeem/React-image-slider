import React from "react";
//import Typed from 'react-typed';
//import "react-alice-carousel/lib/alice-carousel.css";
import Typewriter from "typewriter-effect";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {Fade,Slide,Flip,Hinge,JackInTheBox,Rotate,Zoom,
    Roll,Bounce} from 'react-awesome-reveal'
import Bitmap from "../image/Bitmap.png";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Retangle16 from "../image/Rectangle16.png";
import Retangle18 from "../image/Rectangle18.png";
import ImageSlider from '../components/ImageSlider'
import { getWidth } from "react-slick/lib/utils/innerSliderUtils";
import { auto } from "@popperjs/core";
const Contact=()=>
{
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        autoplayspeed:500,
        slidesToShow:3,
        slidesToScroll:3
    }
    const slides=[
        { url:`${Retangle18}` },
        { url:`${Retangle16}` },
        { url:`${Retangle18}` },
    ]
    const containerStyle={
        height:'280px',
        width:'500px',
        margin:'0 auto',
    }
    return (
        <>
        {/* first method 
        without library */}
         <div>Hello Lesson</div>
         <div style={containerStyle}>
<ImageSlider slides={slides}/>
         </div>

        {
            // second method
        /* use react library Slick
        npm i --save-dev @types/react-slick  */}
<Slider {...settings}>
    <div>
    <h3>1</h3>
    </div>
    <div>
<h3>2</h3>
</div>
<div>
<h3>3</h3>
</div>
<div>
<h3>4</h3>
</div>
<div>
<h3>5</h3>
</div>
</Slider>




















          <div className="texter">
      
      <AliceCarousel 
    autoPlay autoPlayInterval="3000"> 
         
                <div className="text">
                <img src={Retangle16} />
     </div>
     <div className="text">
     <img src={Retangle18}/>
     </div>
     <div className="text">
                <img src={Retangle16} />
     </div>
     <div  className="text" >
     <img src={Retangle16}/>
     </div>
     <div  className="text">
     <img src={Retangle18} />
     </div>
     <div className="text">
                <img src={Retangle16} />
     </div>
     <div  className="text">
     <img src={Retangle18} />
     </div>
     
              
        
        </AliceCarousel>
        </div>
         {/* <AliceCarousel  dots={true}  
        slidesToShow={2}  
        slidesToScroll={2}  
        arrow={false} 
    autoPlay autoPlayInterval="3000"> 
     */}
        {/* <img src={Retangle16} width="100%"/>
        <img src={Retangle18} width="100%"/>
        </AliceCarousel> */}
        </>

    )
    
}
export default Contact
