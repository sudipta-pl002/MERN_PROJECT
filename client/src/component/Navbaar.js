import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbaar = () => {
    return (
        <header>
        <div>
        <h2 style={{textAlign: "center" ,color:"#4a54f5"}}>USER MANAGEMENT SYSTEM</h2>
        </div>
            <nav className="navbar navbar-expand-lg bg-light" >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              
                                <a className="nav-link active" aria-current="page" href="#"></a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>

    )

}

export default Navbaar