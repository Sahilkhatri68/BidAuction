import React, { useState } from 'react'

import NavView from './NavView';
import "./Product.css";
import { Link, useParams } from 'react-router-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./LeftProductView.css"
import { BiRupee } from 'react-icons/bi';
import axios from 'axios';
import GlobalNav from './GlobalNav';

export default function Product() {
   




    const { id } = useParams();
    const [product, setProduct] = useState([])
    async function GetUser() {
        try {
            const response = await axios.get(`https://daupay.com/api/products/2`);
            setProduct(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        GetUser()
    });

    return (
        <>
            <GlobalNav />
            <main className="ccontiner">
                {/* Left Column / Headphones Image */}
                <div className='forwrap'    >
                    <Slide>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url( https://www.hdcarwallpapers.com/walls/ford_mustang_gt_fastback_2018_4k-HD.jpg)` }}>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url( https://www.hdcarwallpapers.com/walls/ford_mustang_2-HD.jpg)` }} >
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url( https://wallpx.com/image/2021/04/ford-mustang-gt-cars-back-view-muscle-orange.jpg)` }}  >
                            </div>
                        </div>
                    </Slide></div>
                {/* Right Column */}
                {/* {
                        product.map((item) => {
                            return (
                                <h1>{item.price}</h1>
                            )
                        })
                    } */}
                <div className="right-column">
                    {/* Product Description */}

                    <div className="product-description">
                   {/* {
                    product.map((item)=>{
                        return(
                            <h1>hi</h1>
                        )
                    })
                   }    */}
                        <h1>Mustang Gt</h1>
                        <h6><b>Making year</b>-2020</h6>
                        <h6><b>Brand</b>-Ford</h6>
                        <h6><b>Driven</b>-1000 Km</h6>
                        <h6><b>Transmissoin</b>-Automatic</h6>
                        <h6><b>Accidental</b>-No</h6>
                        <h6><b>Fuel</b>-Diesel</h6>
                        <h6><b>Insurance</b>-Yes</h6>

                    </div>
                    {/* Product Configuration */}
                    <div className="product-configuration">

                        {/* Cable Configuration */}
                        <div className="cable-config">
                            <span style={{ fontSize: 20, color: "black" }}>Previous Bid</span>
                            <div className="cable-choose">
                                <h3><BiRupee />456</h3>

                            </div>
                            <h6>You have to bid more than previous bid </h6>
                        </div>
                    </div>
                    {/* Product Pricing */}
                    <div className="product-price">
                        <input placeholder='Enter your Bid ammount' className='inputbid' ></input>
                        <button className="cart-btn">
                            Bid
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}