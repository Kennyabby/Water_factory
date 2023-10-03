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
                    <div className='hcontent'>
                        <h1 className='htitle'>Higher Quality Water For You and Your Family</h1>
                        <h2 className='hatt'>Professional installation and repair of various water-treatment 
                        related systems, including water softener systems and water filtration systems.</h2>

                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default Home