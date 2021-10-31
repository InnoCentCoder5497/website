import React from "react";
import NavBar from '../components/NavBar';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import ContactForm from "../components/ContactForm";


const ContactPage = () => {
    return (
        <div className='h-full w-full'>
            <NavBar />
            <MainHeader />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default ContactPage;