import React from 'react';
import './App.scss';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import tokyoshare from './images/tokyoshare.png';
import dental from './images/minami-dental.png';
import portfolio from './images/ak_portfolio.png';
import calc from './images/unit_price_calc.png';
import isara from './images/isara.png';
import isara_png from './images/isara_practice.png';
import aklog from './images/aklog.net.png';

const EnDentalDescribe = () => {
    return <>Dental Office web site</>;
};

const EnShareHouseDescribe = () => {
    return <>Dental Office web site</>;
};

const EnUnitPriceCalcDescribe = () => {
    return <>Unit price calculator</>;
};

const EnIsaraDescribe = () => {
    return (
        <>
            iSara LP practice(<a href="https://isara.life/" target="_blank">original web site</a>)
        </>
    );
};

const EnBlogDescribe = () => {
    return <>My blog</>;
};

const EnPortfolioDescribe = () => {
    return <>My portfolio</>;
};

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
                                <Route path="en" element={<EnDentalDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">Next.js / SCSS / StaticForm / Docker</span></p>
                </div>
                <div className="work-img">
                    <a href="https://tokyo-share.herokuapp.com/" target="_blank"><img src={tokyoshare} alt="tokyoshare" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnShareHouseDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">HTML / SCSS / PHP / Laravel / PostgreSQL / Docker</span></p>
                </div>
                <div className="work-img">
                    <a href="https://unit-price-calculator.netlify.app/" target="_blank"><img src={calc} alt="unit price calculator" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnUnitPriceCalcDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">Vue.js / SCSS</span></p>
                </div>
                <div className="work-img">
                    <a href={isara_png} target="_blank"><img src={isara} alt="isaraサイト模写" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnIsaraDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">HTML / SCSS</span></p>
                </div>
                <div className="work-img">
                    <a href="https://aklog.net/" target="_blank"><img src={aklog} alt="blog" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnBlogDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">PHP / WordPress</span></p>
                </div>
                <div className="work-img">
                    <a href=""><img src={portfolio} alt="tokyosyare" /></a>
                    <p className="title">
                        <BrowserRouter>
                            <Routes>
                                <Route path="en" element={<EnPortfolioDescribe />} />
                            </Routes>
                        </BrowserRouter>
                        <br /><span className="skill-explaine">React.js / SCSS</span></p>
                </div>
            </div>

        </div>
    )
}

export default Works;