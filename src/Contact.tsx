import React from 'react';
import './App.scss';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import * as EnText from './components/EnglishText';
import * as JpText from './components/JapaneseText';

function Contact() {
    return (
        <div id="contact">
            <h2>CONTACT</h2>
            <p>
                <BrowserRouter>
                    <Routes>
                        <Route path="en" element={<EnText.EnContact />} />
                        <Route path="jp" element={<JpText.JpContact />} />
                    </Routes>
                </BrowserRouter>
            </p>
            <p className="textlink"><a href="https://forms.gle/zS7kk6k6fj3XWfEn6" target="_blank">Contact me</a></p>
        </div>
    )
}

export default Contact;