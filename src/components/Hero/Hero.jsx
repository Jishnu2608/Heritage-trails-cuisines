import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Cuisines
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"Cuisines are culinary narratives, embodying the essence of regions and the 
                       legacies of generations, passed down through time, each dish an expression of cultural identity."</span>
                       <span className="secondaryText"><i>~ Julia Child</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-cuisines-hero-img.jpeg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero