import React from 'react';
import './Value.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';
import { useState } from 'react';
{/* import AccordionItemButtonWrapper from 'react-accessible-accordion/dist/types/components/AccordionItemButton'; */}

const Value = () => {
    return (
        <sectiom className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                {/* left side */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Nuestro valor</span>
                    <span className='primaryText'>Valor que te damos</span>
                    <span className='secondaryText'>Siempre estamos listos para ayudarlo brindándole los mejores servicios.
                    <br/> 
                    Creemos que un buen lugar para vivir puede mejorar su vida</span>

                    <Accordion className="-" 
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >   
                        {
                            data.map((item, i)=>{
                                
                                const [className , setClassName] = useState(null)

                                return(
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                
                                            <AccordionItemState>
                                                {({expanded})=> expanded ? setClassName("expanded"): setClassName("collapsed")}
                                            </AccordionItemState>    
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <samp className="primaryText">
                                                    {item.heading}
                                                </samp>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}>

                                                    </MdOutlineArrowDropDown>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="seondaryText">
                                                {item.detail}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </sectiom>
    )
}

export default Value