import React from 'react';
import './Residencies.css';
import { Swiper , SwiperSlide , useSwiper } from 'swiper/react';
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
    return (
        <sectiom className="r-wrapper">
            <div className="padding innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Las mejores opciones</span>
                    <span className='primaryText'>Residencias Populares</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home"/>
                                <span className='secondaryText r.price'>
                                    <span style={{color: "orange"}}>$</span><span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </sectiom>
    )
}

export default Residencies


const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className='r-buttons'>
            <button className='' onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button className='' onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}

