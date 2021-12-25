import React from 'react'
import './navbar.css'
import image from "../images/sidebar-top.png"
import { FaHome, FaYoutubeSquare, FaMedal, FaTrophy } from "react-icons/fa";

export default function navbar() {
    var styleone = {
        backgroundColor: '#303234',
    };
    return (
        <>
            <div className='navbar'>
                <img className='sidebar-top' src={image} alt='functional-strength-training-with-kara'></img>
                <h3 className='heading-over-text'>Functional Strength Training with Kara</h3>
                <hr className='heading-line'></hr>
                <p className='fifty-percent'>50%</p>
                <div className='nav'>
                    <button className='nav-link bodytext'><FaHome /> Dashboard</button>
                    <button style={styleone} className='nav-link bodytext'><FaYoutubeSquare /> Modules</button>
                    <button className='nav-link bodytext'><FaMedal /> Events</button>
                    <button className='nav-link bodytext'><FaTrophy /> Meet your instructor</button>
                </div>
                <hr className='divider'></hr>

            </div>
        </>

    )
}
