import React,{useEffect,useState} from "react";
import Retangle18 from "../image/Rectangle18.png"
const ImageSlider = ({ slides }) => {
    const [currentIndex, setcurrentIndex]=useState(0)
   
   const sliderStyle={
    position:'relative',
    height:'100%'
   }
    const slideStyle={
    width:'100%',
    height:' 500px',
borderRadius:'10px',
backgroundPosition:'center',
backgroundSize:'cover',
    backgroundImage:`url(${slides[currentIndex].url})`, 
   }
   const leftArrowStyles={
    position:'absolute',
    trabnsform:'translate(0,-50%)',
    left:'34px',
    color:'#fff',
    zIndex:1,
    fontSize:'45px',
    cursor:'pointer',
    top:'50%',
   }
   const rightArrowStyles={
    position:'absolute',
    trabnsform:'translate(0,-50%)',
    right:'34px',
    fontSize:'45px',
    color:'#fff',
    zIndex:1,
    cursor:'pointer',
    top:'50%',
   }
   function goToorevious()
   {
    const isFirst=currentIndex === 0
    const newindex=isFirst ? slides.length - 1: currentIndex - 1
    setcurrentIndex(newindex)
   }
   function goToonext()
   {
  const lastslide=currentIndex === slides.length - 1
  const newindex=lastslide ? 0: currentIndex + 1
    setcurrentIndex(newindex)   
}
const dotContainerstyle={
    display:'flex',
  //  marginTop:'1089px',
    justifyContent:'center',
}
const dotstyle={
  margin:'0 3px',
  cursor:'pointer',
  fontSize:'20px'
}   
const gotoslide=slideIndex=>
{
    setcurrentIndex(slideIndex)
 }
  return (
    <div style={sliderStyle}>
        <div style={leftArrowStyles} 
        onClick={goToorevious}> ( </div>
        <div style={rightArrowStyles}
        onClick={goToonext}> ) </div>
        <div style={slideStyle}>
   <div style={dotContainerstyle}>
        {slides.map((slide,slideIndex)=>(
  <div style={dotstyle} key={slideIndex}
  onClick={()=>gotoslide(slideIndex)}>.</div>
        ))
        }</div>
    
            </div></div>
    )
};
export default ImageSlider;
