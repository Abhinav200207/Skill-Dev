import React, { useRef } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import emailjs from 'emailjs-com'
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function EmployeeList({ name, city, state, skills, email, id }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_h4lhrb8', 'template_wq99nzc', form.current, 'u694r4yYpSIyPRGZg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="phone">
            <div style={{ "paddingLeft": "3%" }}>
                <div> <span style={{ "fontWeight": "bold", "fontSize": "18px" }}> {name} </span>, <HomeIcon style={{ "marginLeft": "2px", "width": "3%", "height": "3%", "marginBottom": "-3px" }} /> <span style={{ "fontWeight": "bold", "fontSize": "13px", "marginRight": "5px" }}> City: </span> {city}</div>
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
            <form ref={form} onSubmit={sendEmail} style={{"marginRight":"10px"}}>
                <input type="text" value={name} name="to_name" style={{ "display": "none" }} />
                <input type="email" value={email} name="to_email" style={{ "display": "none" }} />
                <Button type="submit" onSubmit={sendEmail} className="button" style={{ "marginRight": "3%", "backgroundColor": "rgba(254, 7, 77, 0.79)" }}>
                    <DeleteOutlineIcon style={{ "color": "white" }} />
                </Button>
            </form>
        </div>
    )
}