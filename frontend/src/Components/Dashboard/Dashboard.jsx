import React from 'react'
import { Link } from "react-router-dom";
import './Dashboard.css'
import img1 from "./logo.png"
import { Button } from '@mui/material';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="header-dashboard">
                <div className="img-logo">
                    <img style={{ width: '110%', height: '100%' }} src={img1} alt="" />
                </div>
                <div className="links"> <Link to="/">
                    <div className="text-header">HOME</div>
                </Link>
                    <Link to="/user/login">
                        <div className="text-header">SKILL DEVLOPEMENT PROGRAM</div>
                    </Link>
                    <Link to="/employer/login">
                        <div className="text-header">FOR EMPLOYERS</div>
                    </Link>
                    <Link to="https://support.nsdcindia.org/portal/en/signin">
                        <div className="text-header">CONTACT US</div>
                    </Link></div>
            </div>
            <div className="dashboard-landing">
                <div>
                    <div className="welcome-skills">Welcome to <span style={{ "color": "#00CC99", "marginLeft": "7px", "marginRight": "7px" }}> Skill Development </span> Portal</div>
                    <div className="here-you">Here you can learn new skills and hire great minds</div>
                    <div className="here-you1">---------------- An initiative by Indian Institute of Information Technology Ranchi ----------------</div>
                </div>
                <div className='button-dashboard'>
                    <Link to="/user/login">
                        <Button >
                            <div className='btn-default-student'>Workers</div>
                        </Button>
                    </Link>
                    <Link to="/employer/login">
                        <Button>
                            <div className='btn-default-student'>Employer</div>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard