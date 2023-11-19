import React from "react";
import  SearchIcon  from '@mui/icons-material/Search';
import  Badge  from "@mui/material/Badge"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
    const quantity = useSelector(state=> state.cart.quantity );

    console.log(quantity)
    return (
    <div className="container">
    <div className="wrapper">
    <div className="left">
    <span className="span">
        EN
    </span>
    <div className="search-container">
    <input className="navbar-input" placeholder="search">

    </input>
    <SearchIcon style={{color: "grey", fontSize: "16px"}}/>

    </div>
    </div>
    <div className="center">
        <h1 className="logo">Big_Ferd.</h1>
    </div>
    <div className="right">
        <div className="menu-item"><Link to="/register">REGISTER</Link></div>
        <div className="menu-item"><Link to="login">SIGNIN</Link></div>
        <div className="menu-item">
        <Link to="/cart">
        <Badge badgeContent={quantity} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
        </Link>
       
        </div>
    </div>
     </div>
      
    </div>
    )
}

export default Navbar;