import {React} from 'react'
import './Navbar.css'
const Navbar = ()=>{
    return(
    <>
        <div className='nav'>
            <div className='logo'></div>    
            <ul className='bar'>
                <li className='navitem'>Home</li>
                <li className='navitem'>About</li>
                <li className='navitem'>Services</li>
                <li className='navitem'>Products</li>
                <li className='navitem'>Contact us</li>
            </ul>
        </div>
    </>
)}

export default Navbar