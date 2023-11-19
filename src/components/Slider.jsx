import React, { useState } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import sliderItems from "../data";
import styled from "styled-components";


const Wrapper = styled.div`
     height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);

    function handleClick(direction) {
              
        if(direction === "left") {
           setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2) 
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <div className="slider-container">
        <div className="left-arrow" onClick={() =>handleClick("left")}>
            <ArrowLeftIcon />
        </div>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => {
            return (
                <div className="slide" key={index} style={{backgroundColor: `${item.bg}`}} >
        <div className="image-container">
         <img className="image" src={item.img} alt="lady-in-dress"/>
        </div>
        <div className="info-container">
        <h1 className="title">
          {item.title}
        </h1>
        <p className="desc">
         {item.desc}
        </p>
        <button className="button">
           SHOW NOW
        </button>

        </div>

        </div>  
            )    
        })}

        </Wrapper>
        <div className="right-arrow" onClick={() =>handleClick("right")}>
        <ArrowRightIcon />
        </div>

        </div>

    )
}


export default Slider;