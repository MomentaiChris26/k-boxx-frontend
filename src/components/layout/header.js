import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header=()=>{
    return (
        <header>
        <Navbar className="d-flex justify-content-between">
       <Navbar.Brand> 
         <h1 style={{ margin: 0 }}>
           <Link
             to="/"
             className="brand"
           >
             KBOXX
           </Link>
         </h1></Navbar.Brand>
           <Link
             to="/login"
             className="adminlink"
           ><i class="fas fa-user-alt"></i>
           </Link>
     </Navbar>
     </header>
    )
}
export default Header