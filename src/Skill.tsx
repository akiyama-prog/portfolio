import React from 'react';
import './App.scss';
import html from './images/html5.png';
import css from './images/css3.png';
import js from './images/javascript.png';
import vue from './images/vue.png';
import react from './images/react.png';
import wp from './images/wp.jpeg';

function Skill() {
return (
<div id="skill">
    <h2>SKILL</h2>
    <div className="wrap">
        <div className="front">
            <div className="item">
                <img src={html} alt="html5" />
                <p className="skill-title html">HTML5<br />★★★★☆</p>
            </div>
            <div className="item">
                <img src={css} alt="css3" />
                <p className="skill-title">CSS3<br />★★★★☆</p>
            </div>
            <div className="item">
                <img src={js} alt="javascript" />
                <p className="skill-title">JavaScript/<br />jquery<br />★★★☆☆</p>
            </div>
            <div className="item">
                <img src={vue} alt="vue" />
                <p className="skill-title">Vue.js<br />★★☆☆☆</p>
            </div>
            <div className="item">
                <img src={react} alt="react" />
                <p className="skill-title">React.js<br />★★★☆☆</p>
            </div>
            <div className="item">
                <img src={wp} alt="wordpress" />
                <p className="skill-title">WordPress<br />★★★☆☆</p>
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