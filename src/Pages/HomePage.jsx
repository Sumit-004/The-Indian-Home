import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import homeimage from "../assets/homeimage.webp"
import Slider from '../Components/ImageSlider'


const MainPage = () => {
    return (
        <div>
            <Header />
            <Categories />
            <Slider />

        
            
            
            <div>
                <img src={homeimage} alt="" />
            </div>
            
            <Footer />
        </div>
    )
}

export default MainPage
