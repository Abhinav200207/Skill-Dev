import React, { useRef, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import emailjs from 'emailjs-com'
import { Button, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function EmployeeList({ name, city, state, skills, email, id }) {
    const form = useRef();
    const [loading, setloading] = useState(false);

    const sendEmail = (e) => {
        setloading(true);
        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_h4lhrb8', 'template_wq99nzc', form.current, 'u694r4yYpSIyPRGZg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setTimeout(() => {
            // Code to be executed after 1 second
            setloading(false);
        }, 1000);
    };

    return (
        <div className="phone">
            <div style={{ "paddingLeft": "3%", "fontFamily": "sans-serif" }}>
                <div style={{ "textAlign": "left" }}> <span style={{ "fontWeight": "bold", "fontSize": "18px" }}> {name} </span>, <HomeIcon style={{ "marginLeft": "2px", "width": "3%", "height": "3%", "marginBottom": "-3px" }} /> <span style={{ "fontWeight": "bold", "fontSize": "13px", "marginRight": "5px" }}> State: </span> {state} <span style={{ "fontWeight": "bold", "fontSize": "13px", "marginRight": "5px" }}> City: </span> {city}</div>
                <div style={{ "display": "flex", "flexDirection": "row" }}><span style={{ "fontWeight": "bold", "fontSize": "15px" }}> Skills : </span>
                    {
                        skills && skills.length > 0 ? (
                            skills.map((x, index) => (
                                index < skills.length - 1 ? <div key={index}>&nbsp; {x}, </div> : <div key={index}>&nbsp; {x} </div>
                            ))

                        ) : (
                            <div></div>
                        )
                    }
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} style={{ "marginRight": "10px" }}>
                <input type="text" value={name} name="to_name" style={{ "display": "none" }} />
                <input type="email" value={email} name="to_email" style={{ "display": "none" }} />
                <Button type="submit" onSubmit={sendEmail} className="button" style={{ "marginRight": "3%", "backgroundColor": "rgba(254, 7, 77, 0.79)" }}>
                    {loading === false ? (<AddIcon style={{ "color": "white" }} />) : (<CircularProgress style={{ "color": "white" }} />)}
                </Button>
            </form>
        </div>
    )
}