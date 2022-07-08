import React, { useEffect,useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Navlink , useParams } from 'react-router-dom';

const Details = () => {

  const {id} = useParams("");
  console.log(id);
 
  const [getuserdata, setUserData] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {

    const res = await fetch(`https://mernproj01.herokuapp.com/getuser/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    console.log(data);


    if (res.status === 422 || !data) {
        console.log("error ");
    } else {
        setUserData(data)
        console.log("get data");

    }
}

useEffect(()=>{
  getdata();
},[])



  return (
    <div className="container mt-3">
      <h1>Welcome&nbsp; {getuserdata.name}</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src=" /profile.png" style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">Name: <span style={{ fontWeight: 400 }}>{getuserdata.name}</span></h3>
              <h3 className="mt-3">Age: <span style={{ fontWeight: 400 }}>{getuserdata.age}</span></h3>
              <p><MailOutlineIcon />Email: <span style={{ fontWeight: 400 }}>{getuserdata.email}</span></p>
              <p><WorkIcon />Occupation: <span style={{ fontWeight: 400 }}>{getuserdata.work}</span> </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">

              <p className="mt-5"><CallIcon />Mobile: <span style={{ fontWeight: 400 }}>{getuserdata.mobile}</span></p>
              <p className='mt-3'><LocationOnIcon />Address:<span style={{ fontWeight: 400 }}>{getuserdata.add}</span></p>
              <p className='mt-3'>Description:<span style={{ fontWeight: 400 }}>{getuserdata.desc}</span></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Details
