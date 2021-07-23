import React from 'react';
import './App.scss';
import tokyoshare from './images/tokyoshare.png';

function Works() {
    return (
        <div id="works">
            <h2>WORKS</h2>
            <div className="my-works">
                <div className="work-img">
                    <a href="https://tokyo-share.herokuapp.com/" target="_blank"><img src={tokyoshare} alt="tokyosyare" /></a>
                    <p className="title">title<br /><span className="skill-explaine">skills</span></p>
                </div>
                <div className="work-img">
                    <a href="https://tokyo-share.herokuapp.com/" target="_blank"><img src={tokyoshare} alt="tokyosyare" /></a>
                    <p className="title">title<br /><span className="skill-explaine">skills</span></p>
                </div>
                <div className="work-img">
                    <a href="https://tokyo-share.herokuapp.com/" target="_blank"><img src={tokyoshare} alt="tokyosyare" /></a>
                    <p className="title">title<br /><span className="skill-explaine">skills</span></p>
                </div>
                <div className="work-imßg">
                    <a href="https://tokyo-share.herokuapp.com/" target="_blank"><img src={tokyoshare} alt="tokyosyare" /></a>
                    <p className="title">title<br /><span className="skill-explaine">skills</span></p>
                </div>
            </div>

        </div>
    )
}

export default Works;