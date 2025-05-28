import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import ImageSlider from '../Components/ImageSlider'
import homeimage from "../assets/homeimage.webp"

const MainPage = () => {
    return (
        <div>
            <Header />
            <Categories />
            <div>
                <img src={homeimage} alt="" />
            </div>
            {/* <ImageSlider/> */}
            <Footer />
        </div>
    )
}

export default MainPage
