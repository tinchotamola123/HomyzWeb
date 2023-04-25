import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <sectiom className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/*left side*/}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120}/>
                    <span className='secondatyText'>Nuestra visión es hacer que todas las personas encuentren el mejor lugar para vivir.</span>
                </div>
                {/*rigth side*/}
                <div className="flexColStart f-rigth">
                    <span className='primaryText'> 
                        Información
                    </span>
                    <span className=''>
                        KM 0, Mendoza, Argentina
                    </span>
                    <div className="flexCenter f-menu">
                        <span>Propiedades</span>
                        <span>Servicios</span>
                        <span>Productos</span>
                        <span>Sobre Nosotros</span>
                    </div>
                </div>
            </div>
        </sectiom>
    )
}

export default Footer