import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { RiAuctionLine } from 'react-icons/ri';
import "./table.css"
import yashti from "../img/yashti.jpg";
import GlobalNav from '../view/GlobalNav';
import { BiRupee } from 'react-icons/bi';
import autocar from "../img/fr.jpg"
import audi from "../img/a4.jpg"
import gt from "../img/gt1.jpg"

export default function Table() {
    
    const { id } = useParams();
    const [product, setProduct] = useState([])

    async function GetUser() {
        try {
            const response = await axios.get(`https://daupay.com/api/products`);
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
            <GlobalNav/>

            <div className='med'>
                <div className=' insidemed'>
                    <h1 className='hedmed'><RiAuctionLine /> Live Auction's details </h1>
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
                        {
                            product.map((item)=>{
                                return(
                                    <tr>
                                   <td data-label="Account"  ><img src={autocar} className="imgget"></img></td>
                                        <td data-label="name">{item.productname}</td>
                                        <td data-label="Amount"><BiRupee />{item.price}</td>
                                        <td data-label="driven">{item.driven}</td>
                                        <td data-label="Period"><Link to="/product">Link</Link></td>
                                </tr>
                                )
                            })
                        }
                        
                         
                    </tbody>
                </table>
            </div>

        </>
    )
}