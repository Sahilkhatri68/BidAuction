import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { RiAuctionLine } from 'react-icons/ri';
import "./viewauction.css"
import { BiRupee } from 'react-icons/bi';
import GlobalNav from '../../view/GlobalNav';
import { FiEdit } from 'react-icons/fi';
import tiago from "../../img/tiago.jpg"
import SimpleImageSlider from "react-simple-image-slider";
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ViewProduct() {

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
            <GlobalNav />
            <div className='med'>
                <div className=' insidemed'>
                    <h1 className='hedmed'><RiAuctionLine /> Viewing Product details </h1>
                </div>

            </div>
            <div className='tableclass'>
                <table>

                    <thead>
                        <tr>
                            <th scope="col">Account</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Driven</th>
                            <th scope="col">Visit</th>
                            <th scope="col">Edit <FiEdit /></th>
                            <th scope="col">Delete <DeleteForeverIcon /></th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            product.map((item) => {
                                return (
                                    <tr key={item.id}>

                                        <td data-label="Account"  ><img src={tiago} className="imgget"></img></td>
                                        <td data-label="name">{item.productname}</td>
                                        <td data-label="Amount"><BiRupee />{item.price}</td>
                                        <td data-label="driven">{item.driven}</td>
                                        <td data-label="Period"><Link to={`/product/${item.id}`}>Link</Link></td>
                                        <td data-label="edit">
                                            <Link to={`/editproduct/${item.id}`}><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                                        <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
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