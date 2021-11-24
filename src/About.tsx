import React from 'react';
import './App.scss';
import profile from './images/profile.jpeg';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import * as EnText from './components/EnglishText';
import * as JpText from './components/JapaneseText';

function About() {
    return (
        <div id="about">
            <h2>ABOUT</h2>
            <div className="profile">
                <img src={profile} alt="profile image" />
                <div>
                    <p className="about-me">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnText.EnAboutMe />} />
                            </Routes>
                        </BrowserRouter>
                    </p>
                    <div className="sns">
                        <p className="textlink"><a href="https://aklog.net/" target="_blank">Blog</a></p>
                        <p className="textlink"><a href="https://note.com/akina7" target="_blank">note</a></p>
                        <p className="textlink"><a href="https://twitter.com/akinaphp" target="_blank">twitter</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;