import React from 'react';
import './App.scss';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import * as EnText from './components/EnglishText';
import * as JpText from './components/JapaneseText';
import tokyoshare from './images/tokyoshare.png';
import dental from './images/minami-dental.png';
import portfolio from './images/ak_portfolio.png';
import calc from './images/unit_price_calc.png';
import isara from './images/isara.png';
import isara_png from './images/isara_practice.png';
import aklog from './images/aklog.net.png';

function Works() {
    return (
        <div id="works">
            <h2>WORKS</h2>
            <div className="my-works">
                <div className="work-img">
                    <a href="https://minami-dental-office.vercel.app/" target="_blank"><img src={dental} alt="dentalsite" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnText.EnDentalDescribe />} />
                                <Route path="jp" element={<JpText.JpDentalDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">Next.js / SCSS / StaticForm / Docker</span></p>
                </div>
                <div className="work-img">
                    <a href="https://unit-price-calculator.netlify.app/" target="_blank"><img src={calc} alt="unit price calculator" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnText.EnUnitPriceCalcDescribe />} />
                                <Route path="jp" element={<JpText.JpUnitPriceCalcDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">Vue.js / SCSS</span></p>
                </div>
                <div className="work-img">
                    <a href={isara_png} target="_blank"><img src={isara} alt="isaraサイト模写" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnText.EnIsaraDescribe />} />
                                <Route path="jp" element={<JpText.JpIsaraDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">HTML / SCSS</span></p>
                </div>
                <div className="work-img">
                    <a href="https://aklog.net/" target="_blank"><img src={aklog} alt="blog" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnText.EnBlogDescribe />} />
                                <Route path="jp" element={<JpText.JpBlogDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">PHP / WordPress</span></p>
                </div>
                <div className="work-img">
                    <a href=""><img src={portfolio} alt="tokyosyare" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnText.EnPortfolioDescribe />} />
                                <Route path="jp" element={<JpText.JpPortfolioDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">React.js / SCSS</span></p>
                </div>
            </div>

        </div>
    )
}

export default Works;