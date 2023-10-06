import {React} from 'react'
import headerpic from '../assets/headerpic.jpg'
import './Home.css'
const Home = ()=>{
    return (
    <>
        <div className='home'>
            <div className='hcover'>
                <img className='hcoverpic' src ={headerpic} />
                <div className='hoverlay'>
                    <div className='hoverlaymini'>
                        <div className='hcontent'>
                            <h2>OPEN THE DOOR TO BETTER LIVING</h2>
                            <h1 className='htitle'>Higher Quality Water For You and Your Family</h1>
                            <p className='hatt'>Professional installation and repair of various water-treatment 
                            related systems, including water softener systems and water filtration systems.
                            </p>
                            <div className='hbtncontent'>
                                <div className='blbutton'>Free Water Test</div>
                                <div className='wtbutton'>Our Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mcover'>
            <div className='mcoveroverlay'>
                <div className='lm'>
                    <h1 className='lmtitle'> LIVE BETTER WITH </h1> 
                    <h1 className='lmtitle dbl'>HIGH QUALITY WATER</h1>
                    <p className='lmhatt'>Our Mission at Jasmil water is to provide high-quality water to every customers. 
                        We pride our selves on being responsive, honest, fairly-priced and customer-oriented. Jasmil water means water
                        for you and your family with the added benefit of cost-savings and a positive enviromental impact
                    </p>
                    <div className='blbutton'>Contact Us</div>
                </div>
                <div className='rm'></div>
            </div>
        </div>
    </>
)}

export default Home