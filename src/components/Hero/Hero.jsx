import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWithd flexCenter hero-container">
                {/*left side*/}
                <div className="flexColStart hero-left">
                    <div className="hero-tittle">
                        <div className="orange-circle"/>
                        <motion.h1 className='titulo' 
                            initial={{y: "2rem", opacity:0 }}
                            animate={{y: 0 , opacity: 1}}
                            transition={
                                {
                                    duration: 2,
                                    type: "spring"
                                }
                            }
                        >
                        Descubra <br/>
                        la propiedad <br/>
                        más adecuada
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                    <span className="secondaryText">
                        Encuentre una variedad de propiedades que se adapten a usted con mucha facilidad
                    </span>
                    <span className="secondaryText">
                        Olvídese de todas las dificultades para encontrar una residencia para usted
                    </span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type='text' />
                        <button className='button'>Buscar</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Productos premium
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Clientes felices
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Ganador de premios
                            </span>
                        </div>
                    </div>
                </div>
                {/*right side*/}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero