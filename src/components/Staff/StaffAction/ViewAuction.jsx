import React from 'react'
import { Link } from 'react-router-dom';
import { RiAuctionLine } from 'react-icons/ri';
import "./viewauction.css"
import { BiRupee } from 'react-icons/bi';
import GlobalNav from '../../view/GlobalNav';
import { FiEdit } from 'react-icons/fi';
import tiago from "../../img/tiago.jpg"
import SimpleImageSlider from "react-simple-image-slider";
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function ViewAuction() {
    return (
        <>
            <GlobalNav />
            <div className='med'>
                <div className=' insidemed'>
                    <h1 className='hedmed'><RiAuctionLine /> Viewing Live Auction's details </h1>
                </div>

            </div>
            <div className='tableclass'>
                <table>

                    <thead>
                        <tr>
                            <th scope="col">Account</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Period</th>
                            <th scope="col">Visit</th>
                            <th scope="col">Edit <FiEdit /></th>
                            <th scope="col">Delete <DeleteForeverIcon /></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Account"><img src={tiago} className="imgget"></img></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee />1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><Link to="/product">Link</Link></td>
                            <td data-label="edit"><Link to="/editauction"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                            <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                        </tr>
                        <tr>
                            <td data-label="Account"><img src={tiago} className="imgget"></img></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee />1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><Link to="/product">Link</Link></td>
                            <td data-label="edit"><Link to="/editauction"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                            <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                        </tr>
                        <tr>
                            <td data-label="Account">  <img src={tiago} className="imgget"></img></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee />1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><Link to="/product">Link</Link></td>
                            <td data-label="edit"><Link to="/editauction"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                            <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                        </tr>
                        <tr>
                            <td data-label="Account">  <img src={tiago} className="imgget"></img></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee />1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><Link to="/product">Link</Link></td>
                            <td data-label="edit"><Link to="/editauction"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                            <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                        </tr>
                        <tr>
                            <td data-label="Account">  <img src={tiago} className="imgget"></img></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee />1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><Link to="/product">Link</Link></td>
                            <td data-label="edit"><Link to="/editauction"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                            <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                        </tr>
                        <tr>
                            <td data-label="Account">  <img src={tiago} className="imgget"></img></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee />1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><Link to="/product">Link</Link></td>
                            <td data-label="edit"><Link to="/editauction"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                            <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                        </tr>
                        <tr>
                            <td data-label="Account">  <img src={tiago} className="imgget"></img></td>
                            <td data-label="Due Date">04/01/2016</td>
                            <td data-label="Amount"><BiRupee />1,190</td>
                            <td data-label="Period">03/01/2016 - 03/31/2016</td>
                            <td data-label="Period"><Link to="/product">Link</Link></td>
                            <td data-label="edit"><Link to="/editauction"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                            <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </>
    )
}