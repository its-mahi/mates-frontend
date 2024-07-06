import React, {useState, useEffect} from 'react'
import { Avatar } from '@mui/material';
import './profileHeader.css';
// require('dotenv').config();


export default function ProfileHeader() {

    const [points, setPoints] = useState(0);

    const mates_backend = "https://mates-backend.onrender.com/api";

    const Points = async ()=>{
        const response = await fetch(`${mates_backend}/answer/points` ,{
            method : "POST",
            headers : {
                'Content-Type': "application/json"
            }
        })

        const json = await response.json();
        setPoints(json["points"]);
    }

    useEffect(()=>{
        Points();
    }, [])

    return(
        <div className='profile'>
            <div className='ProfileAndName'>
                <Avatar sx={{ height: '58px', width: '58px' }} />
                <div className='nameAndActive'>
                    <div className='name'>{localStorage.getItem("username")}</div>
                    <p>User since <strong>{localStorage.getItem("since")}</strong></p>
                    <div>Points: {points}</div>
                </div> 
            </div>

            <hr Style="border: 0.7px solid " />
        </div>
    )
}
