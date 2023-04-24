import React, { useEffect, useState } from 'react'
import './filter.css'
import { Button, TextField, Typography } from '@mui/material'
import EmployeeList from './EmployeeList';
import axios from 'axios'


const Filter = () => {
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [skill, setSkill] = useState("");
    const [employee, setEmployee] = useState([
        {
            name: "Abhinav Kumar Maurya",
            city: "New Delhi",
            state: "Delhi",
            email: "abhinav.maurya202@gmail.com",
            skills: ["Web Dev", "ML"],
            _id: "wrkfhlkf490ewpro"
        }
    ]);

   

    const clickHandler = async () => {
        const res = await axios.get(`http://localhost:4000/details/employee?city=${city}&state=${state}&skills=${skill}`)
        setEmployee(res.data.employee);
        // console.log(res.data.employee);
        console.log("employee",employee)
    };

    return (
        <div className="filter">

            <div className='input-filter'>

                <div className='input-filter-content state-filter'>
                    <TextField onChange={(e) => setState(e.target.value)} id="outlined-basic" label="State" variant="outlined" />
                </div>

                <div className='input-filter-content city-filter'>
                    <TextField onChange={(e) => setCity(e.target.value)} id="outlined-basic" label="City" variant="outlined" />
                </div>

                <div className='input-filter-content skill-filter'>
                    <TextField onChange={(e) => setSkill(e.target.value)} id="outlined-basic" label="Skill" variant="outlined" />
                </div>

                <div className='btn-filter'>
                    <Button onClick={clickHandler}>Search</Button>
                </div>

            </div>
            <div className='line-filter'></div>

            <div className='list-filter-employee'>
                {employee && employee.length > 0 ? (
                    employee.map((x) => (
                        <EmployeeList
                            name={x.name}
                            city={x.city}
                            state={x.state}
                            skills={x.skills}
                            email={x.email}
                            id={x._id}
                            key={x._id}
                        />
                    ))
                ) : (
                    <Typography variant="h6">No employee found</Typography>
                )}
            </div>
        </div>
    )
}

export default Filter