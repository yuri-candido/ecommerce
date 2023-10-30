import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

import './Hero.css'

const Hero = () => {
    return (
        <div className ='hero'> 
            <div className='hero-left'>
                <h2>New Arrivals Only</h2>
                <div>

                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>


                    <p>Collections</p>
                    <p>for everyone</p>
                </div>

                <div className='hero-latest-btn'>
                    <div>
                        Latest Collection
                        <img src={arrow} alt="" />
                    </div>                    

                </div>

            </div>

            <div className='hero-right'>
            <img src={hero_image} alt="" />
            </div>





        </div>
    )
}

export default Hero