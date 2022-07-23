import React from 'react'
import { Link } from 'react-router-dom';
import { RiAuctionLine } from 'react-icons/ri';
import "./upcoming.css"
import yashti from "../img/yashti.jpg";
import GlobalNav from '../view/GlobalNav';
import { BiRupee } from 'react-icons/bi';
import automobile from "../img/hn.jfif";
import bmw from "../img/bm.jfif";
import mustang from "../img/mustang.jpg";
export default function Upcoming() {
    return (
        <>
          <GlobalNav/>

            <div className='med'>
                <div className=' insidemed'>
                    <h2 className='hedmed'><RiAuctionLine /> Upcoming Auction's details </h2>
                    <div className='soinimgs'>
                        <img src={yashti} className="imgofsoon"></img></div>
                </div>

            </div>
            <div className='tableclass'>
                <table>

                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Period</th>
                            <th scope="col">Visit</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Account"><img src={automobile} className="upcomingImgCar" /> </td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee/>1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account"><img src={bmw} className="upcomingImgCar" /></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee/>1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account"><img src={mustang} className="upcomingImgCar" /></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee/>1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account"><img src={mustang} className="upcomingImgCar" /></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee/>1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account"><img src={mustang} className="upcomingImgCar" /></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee/>1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account"><img src={mustang} className="upcomingImgCar" /></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee/>1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account"><img src={mustang} className="upcomingImgCar" /></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee/>1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </>
    )
}