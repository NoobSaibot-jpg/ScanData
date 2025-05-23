import React from 'react';
import Clients from '../components/Clients';
// import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
// import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Materials from '../components/Materials';
import News from '../components/News';
import NavBar from '../components/Navbar/NavBar';
import CookieConsent from '../components/CookieConsent';


const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Services />
            <Clients />
            <Projects />
            <Materials />
            <News />
            {/* <Intro /> */}
            {/* <Portfolio /> */}
            {/* <Cta/> */}
            <Footer />
            <CookieConsent />
        </>

    )
}

export default Home;

