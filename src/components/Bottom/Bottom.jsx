import React from 'react'
import "./bottom.css"
import person from "../img/aki.jpg"

export default function Bottom() {
    return (
        <>
                            
            <div className='bottomcomp'>
                <div className='leftbottomcomp'>
                    <div className='textdiv'>
                        <h3>
                            Modern Auctions. Co.
                        </h3>
                        <p>Michigan, United States (US)</p>
                    </div>
                </div>
                <div className='rightbottomcomp'>
                    <img src={person} className="rightimgbottom"></img>
                </div>
            </div>
            <div className='bottomcomp'>
                <div className='leftbottomcomp'>
                    <div className='textdiv'>
                        <h3>
                            Modern Auctions. Co.
                        </h3>
                        <p>Michigan, United States (US)</p>
                    </div>
                </div>
                <div className='rightbottomcomp'>
                    <img src={person} className="rightimgbottom"></img>
                </div>
            </div>
            <div className='bottomcomp'>
                <div className='leftbottomcomp'>
                    <div className='textdiv'>
                        <h3>
                            Modern Auctions. Co.
                        </h3>
                        <p>Michigan, United States (US)</p>
                    </div>
                </div>
                <div className='rightbottomcomp'>
                    <img src={person} className="rightimgbottom"></img>
                </div>
            </div>
        </>
    )
}