import React, { useState, useEffect } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [getuserdata, setUserData] = useState([]);
    console.log(getuserdata)
    const getdata = async (e) => {

        const res = await fetch("https://mernproj01.herokuapp.com/getdata", {
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
    useEffect(() => {
        getdata();
    }, [])


    const deleteuser = async(id)=>{
        const res2 = await fetch(`https://mernproj01.herokuapp.com/deleteuser/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const deletedata = await res2.json();
        console.log(deletedata);
        
        if(res2.status ===422||!deletedata){
            console.log("error");
        } else{
            console.log("user deleted");
            getdata();
        }

    }








    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className=" btn btn-primary"> + Add Data </NavLink>
                </div>
                <table class="table">
                    <thead>
                        <tr className=" table-info">
                            <th scope="col">ID</th>
                            <th scope="col">USER NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">JOB</th>
                            <th scope="col">NUMBER</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.work}</td>
                                            <td>{element.mobile}</td>
                                            <td className=" d-flex justify-content-between">
                                              <NavLink to={`view/${element._id}`}><button className=" btn btn-success"><GridViewOutlinedIcon /></button></NavLink>  
                                              <NavLink to={`edit/${element._id}`}><button className=" btn btn-primary"><ModeEditIcon /></button></NavLink>  
                                                <button className=" btn btn-danger" onClick={()=>deleteuser(element._id)}><DeleteForeverIcon /></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }



                    </tbody>
                </table>





            </div>
        </div>


    )
}

export default Home