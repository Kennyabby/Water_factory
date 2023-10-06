import {React} from 'react'
import headerpic from '../assets/headerpic.jpg'
import {TbVaccineBottle} from 'react-icons/tb'
import {FaBottleWater} from 'react-icons/fa6'
import {BsFillPatchCheckFill, BsTelephoneFill} from 'react-icons/bs'
import {MdLocationPin, MdEmail} from 'react-icons/md'

import './Home.css'
const Home = ()=>{
    const pricingContent = [
        {
            name: 'Bulk Water Purchase',
            desc: 'Competitive pricing for bulk water orders based on volume',
            content: ['1,000 to 5,000: $0.25 per gallon', '5,001 to 10,000 gallons: $0.20 per gallon',
            '10,001 gallons and above: contact us for custom pricing']
        },
        {
            name: 'Bottled Water',
            desc: 'Convenient pricing for bottled water in various sizes',
            content: ['12 oz Bottles: $0.99 per bottle', '1 Liter Bottles: $1.49 per bottle',
            '5 Gallon Jugs: $6.99 per jug'] 
        },
        {
            name: 'Water Delivery Services',
            desc: 'Reliable delivery options at affordable rates',
            content: ['Local Delivery (within 20 miles): $20 per delivery', 
            'Extended Delivery (20-50 miles): $40 per delivery', 'Custom Delivery (50+ miles): Contact us for pricing']
        },
        {
            name: 'Water Filtration Systems',
            desc: 'Quality filtration solutions for residental and commercial needs',
            content: ['Residential Water Filters: Starting at $199', 'Commercial Water Filtration: Contact us for a quote',
            'Industrial Water Treatment: Contact  us for a quote']
        },
        {
            name: 'Water Testing',
            desc: 'Accurate water testing services for different purposes',
            content: ['Basic Water Quality Test: $49', 'Comprehensive Water Analysis: $99',
            'Industrial Water Testing: Contact us for pricing']
        }
    ]
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
                <div className='rm'>
                    <div className='rmsection'>
                        <FaBottleWater className='rmicon'/>                    
                        <p className='rmtitle'>Bottled Water Delivery</p>
                        <p className='rmhatt'>Get clear, refreshing water delivered straight to your home or business</p>
                    </div>
                    <div className='rmsection'>
                        <TbVaccineBottle className='rmicon'/>
                        <p className='rmtitle'>Water Filteration Systems</p>
                        <p className='rmhatt'>Get point-of-use and RD filtration system installed by professionals</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='pcover'>
            <div className='pcoveroverlay'>
                <h1 className='ptitle'>PRICING TABLE</h1>
                <p className='patt'>We offer competitive and flexible pricing options for high-quality water products 
                and services to meet various customer needs</p>
                <div className='pdiv'>
                    {pricingContent.map((pc)=>{
                        return (
                            <div className='pdetails'>
                                <h2 className='pdetailsname'>{pc.name}</h2>
                                <p className='pdetailsatt'>{pc.desc}</p>
                                <div style={{margin: '50px auto'}}>
                                    {pc.content.map((ct)=>{
                                        return(
                                            <div style={{margin:'30px auto'}}>                                               
                                                <div className='pitemspan'>
                                                    <BsFillPatchCheckFill className='pbullet'/> <label className='pitem'>{ct.slice(0,ct.indexOf(':'))}</label>
                                                </div>
                                                <div style={{marginLeft: '30px', fontSize: '2rem'}}>{ct.slice(ct.indexOf(':')+1,)}</div>
                                            </div>                                            
                                        )
                                    })}
                                </div>
                                <div className='pordbutton'>ORDER NOW</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='ccover'>
            <div className='lccover'>
                <div>
                    <div className='lccovertitle'>Contact Us</div>
                    <p className='lccoverdesc'>We welcome your inquiries and look forward to assisting you - please don't hesitate to contact
                        usw with any questions or requests
                    </p>
                </div>
                <div>
                    <div className='ccontact'>
                        <span><MdLocationPin className='cicon'/>  <label>Address: inquiries and look forward to assisting you - please don't hesitate to contact
                            usw with any questions or </label>
                        </span>
                    </div>
                    <div className='ccontact'>                       
                        <span><MdEmail className='cicon'/>  <label>Email: jasmilcontact@aleedconstruction.com</label></span>
                    </div>
                    <div className='ccontact'>                        
                        <span><BsTelephoneFill className='cicon'/>  <label>Phone: +234 812 298 3412</label> </span>
                    </div>

                </div>
            </div>
            <div className='rccover'>
            <div>
                <div className='lccovertitle'>Form</div>
                    <p className='lccoverdesc'>We welcome your inquiries and look forward to assisting you - please don't hesitate to contact
                        usw with any questions or requests
                    </p>
                </div>
                <div style={{display: 'flex', margin: '20px auto', flexWrap: 'wrap'}}>
                    <p>
                        <input className='inputStyle' placeholder='Name' type='text'/>
                        <input className='inputStyle' placeholder='Email' type='email'/>
                        <input className='inputStyle' placeholder='Subject' type='text'/>
                    </p>
                    <p>
                        <textarea className='areaStyle' placeholder='Messsage' type='text'/>
                    </p>
                </div>
                <div className='cformsend'>Send</div>
            </div>

        </div>
    </>
)}

export default Home