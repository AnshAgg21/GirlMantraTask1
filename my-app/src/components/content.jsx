import React from 'react'
import './content.css';
import video from "../images/video.png"
import video2 from "../images/video2.png"
import video3 from "../images/video3.png"
import video4 from "../images/video4.png"
import video5 from "../images/video5.png"
import button from '../images/button.png'
import week2 from '../images/week2.png'
import week3 from '../images/week3.png'
import week4 from '../images/week4.png'
import avatar from "../images/avatar.png"



export default function content() {
    return (
        <div className='content'>
            <div className='weeklybtns'>
                <button className="btns"><img className='btn weekone' src={button}></img></button>
                <button className="btns"><img className='btn weektwo' src={week2}></img></button>
                <button className="btns"><img className='btn weekthree' src={week3}></img></button>
                <button className="btns"><img className='btn weekfour' src={week4}></img></button>
            </div>
            <div className='avatar-desc'>
                <img className="avatar" src={avatar}></img><img className="avatar" src={avatar}></img><img className="avatar" src={avatar}></img><p className='desc'>you and 50+ others are here</p>
            </div>
            <h1 className='content-heading'>Week 1 | Form and Technique</h1>
            <div className='card'>
                <div className='video'>
                    <img src={video} alt='img'></img>
                    <hr className='heading-line'></hr>
                </div>
                <div className='card-content'>
                    <h2>Day 1 | EMOM</h2>
                    <p>Get those muscles moving with your first 15 minute warm-up. You got this!</p>
                </div>
                <div>
                    <button className="watchbtn">Watch Again</button>
                </div>
            </div>
            <hr className='divider'></hr>
            <div className='card'>
                <div className='video'>
                    <img src={video2} alt='img'></img>
                    <hr className='heading-line'></hr>
                </div>
                <div className='card-content'>
                    <h2>Day 2 | Lower Body Power</h2>
                    <p>Get those muscles moving with your first 15 minute warm-up. You got this!</p>
                </div>
                <div>
                    <button className="watchbtn">Watch Again</button>
                </div>
            </div>
            <hr className='divider'></hr>
            <div className='card'>
                <div className='video'>
                    <img src={video3} alt='img'></img>
                    <hr className='heading-line'></hr>
                </div>
                <div className='card-content'>
                    <h2>Day 3 | Rest and Recovery</h2>
                    <p>Get those muscles moving with your first 15 minute warm-up. You got this!</p>
                </div>
                <div>
                    <button className="watchbtn">Watch Again</button>
                </div>
            </div>
            <hr className='divider'></hr>
            <div className='card'>
                <div className='video'>
                    <img src={video4} alt='img'></img>
                    <hr className='heading-line'></hr>
                </div>
                <div className='card-content'>
                    <h2>Day 4 | Tabata</h2>
                    <p>Get those muscles moving with your first 15 minute warm-up. You got this!</p>
                </div>
                <div>
                    <button className="watchbtn">Watch Again</button>
                </div>
            </div>
            <hr className='divider'></hr>
            <div className='card'>
                <div className='video'>
                    <img src={video5} alt='img'></img>
                    <hr className='heading-line'></hr>
                </div>
                <div className='card-content'>
                    <h2>Day 5 | Rest Day</h2>
                    <p>Get those muscles moving with your first 15 minute warm-up. You got this!</p>
                </div>
                <div>
                    <button className="watchbtn resume">Resume</button>
                </div>
            </div>
            <hr className='divider'></hr>
        </div>
    )
}
