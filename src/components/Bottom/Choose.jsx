import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import audi4 from "../img/a4.jpg"
import "./choose.css"

export default function ChooseMore() {
    return (
        <>
            <div >
                <div className='upcomingdivv'>
                <h1 style={{ textAlign: "left"}}>Upcoming Auction's </h1>
                <p>See what's popular across thousand of items</p>
                </div>
            </div>
            <div className='choosemore' style={{ marginBottom: 70 }}>
                <div className='recentcard'>
                    <div className='recentcardImg'>
                        <img src={audi4} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Audi</h2>
                        <div className='btnandview'>
                            <Link to="/">  <p>Luxury <AiOutlineArrowRight /></p></Link>
                            <button className='bnowbottom'>Bid Now</button>
                        </div>
                    </div>
                </div>
                <div className='recentcard'>
                    <div className='recentcardImg'>
                        <img src={audi4} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Audi</h2>
                        <div className='btnandview'>
                            <Link to="/">  <p>Sports <AiOutlineArrowRight /></p></Link>
                            <button className='bnowbottom'>Bid Now</button>
                        </div>
                    </div>
                </div>
                <div className='recentcard'>
                    <div className='recentcardImg'>
                        <img src={audi4} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Audi</h2>
                        <div className='btnandview'>
                            <Link to="/">  <p>Sports <AiOutlineArrowRight /></p></Link>
                            <button className='bnowbottom'>Bid Now</button>
                        </div>
                    </div>
                </div>
                <div className='recentcard'>
                    <div className='recentcardImg'>
                        <img src={audi4} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Audi</h2>
                        <div className='btnandview'>
                            <Link to="/">  <p>Economy <AiOutlineArrowRight /></p></Link>
                            <button className='bnowbottom'>Bid Now</button>
                        </div>

                    </div>
                </div>
            </div></>


    )
}