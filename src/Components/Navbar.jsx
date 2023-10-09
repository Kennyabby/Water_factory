import {React, useState, useEffect} from 'react'
import './Navbar.css'
import {BiMenuAltLeft} from 'react-icons/bi'
const Navbar = ()=>{
    const [winSize, setWinSize] = useState(window.innerWidth)
    const [menuClicked, setMenuClicked] = useState(false)
    const checkWinSize = ()=>{
        setWinSize(window.innerWidth)
    }
    const handleMenuClick = ()=>{
        setMenuClicked(!menuClicked)
    }
    useEffect(()=>{
        window.addEventListener('resize', checkWinSize)
    },[winSize])
    return(
    <>
        {winSize<=700 && <div className='menu' onClick={handleMenuClick}><BiMenuAltLeft/></div>}            
        <div className= {winSize<=700 ? (menuClicked ? 'nav' : 'mnav') : 'nav'}>
            <div className='logo'>Jazmyn</div>
            {(winSize>700 || menuClicked) ? (   
                <ul className='bar'>
                    <li className='navitem'>Home</li>
                    <li className='navitem'>About</li>
                    <li className='navitem'>Services</li>
                    <li className='navitem'>Products</li>
                    <li className='navitem'>Contact Us</li>
                </ul>) : (

                <div className='menu' onClick={handleMenuClick}><BiMenuAltLeft/></div>    
            )}
        </div>
    </>
)}

export default Navbar