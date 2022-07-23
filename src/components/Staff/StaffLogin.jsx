import React from 'react'
import "./Stafflogin.css";
import yashti from "../img/yashti.jpg";
import { Link } from 'react-router-dom';
import GlobalNav from '../view/GlobalNav';

export default function StaffLogin() {
    return (
        <>
        <GlobalNav/>
            <div className='forback'>
                <div className='headcont'>
                    <div className='lefthead'>
                        <Link to="/"   ><img src={yashti} className="yashimg"></img></Link>
                    </div>
                    <div className='righthead'>
                        <div>
                            <h1>Staff Login</h1>
                        </div>
                        <div className='ininput'>
                            <div className='inpheader'> Username</div>
                            <input type="text" className='inputt' placeholder="Enter User Name"></input>


                        </div>
                        <div className='inpassord'>
                            <div className='inpheader'> Password</div>
                            <input type="text" className='inputt' placeholder="Enter User Name"></input>
                        </div>
                        <div className='btnloging'>
                            <Link to="/staffprofile">     <button className='logbtn'>Login</button></Link>
                        </div>

                    </div>
                </div></div>
        </>
    )
}