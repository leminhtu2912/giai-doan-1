import React from 'react';
import Hero from './Hero';
import HomeCollection from './HomeCollection';
import HomeSale from './HomeSale';
import HomeServices from './HomeServices';
import HomeProducts from './HomeProducts';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <HomeCollection />
            <HomeServices />
            <HomeSale />
            <HomeProducts />
            <Testimonials />
        </div>
    )
}

export default Home;