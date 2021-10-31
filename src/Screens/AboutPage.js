import React from "react";

import NavBar from '../components/NavBar';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import AboutContents from "../components/AboutContents";

const AboutPage = () => {
    return (
        <div className='h-full w-full'>
            <NavBar />
            <MainHeader />
            <AboutContents />
            <Footer />
        </div>
    )
}

export default AboutPage;