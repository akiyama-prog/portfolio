import React from 'react';
import './App.scss';
import html from './images/html5.png';

function Skill() {
    return (
        <div id="skill">
            <h2>SKILL</h2>
            <div className="wrap">
                <div className="front">
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                </div>
                <div className="back">
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                    <div className="item">
                        <img src={html} alt="html5" />
                        <p className="skill-title">HTML5<br />★★★★☆</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;