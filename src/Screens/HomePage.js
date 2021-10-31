import React from "react";

import NavBar from '../components/NavBar';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import OfferedServices from '../components/OfferedServices';
import Review from '../components/Review';

const HomePage = () => {
    return (
        <div className='h-full w-full'>
            <NavBar />
            <MainHeader />
            <OfferedServices />
            <Review />
            <Footer />
        </div>
    )
}

export default HomePage;