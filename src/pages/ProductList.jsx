import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import "../styles.css"

function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [ filters, setFilters] = useState({});
    const [ sort, setSort] = useState("newest");

    function handleFilters(e) {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    // console.log(filters);

    function handleSort(e) {
        setSort(e.target.value);
    }


    
    return (
    <div className="product-list-container">
        <Navbar />
        <Announcement />
        <h1>{cat}</h1>
        <div  className="filter-container">
        <div className="filter">
         <span className="filter-text">
            Filter by products:
         </span>
         <select className="select" name="color" onChange={handleFilters}>
            <option disabled>
             Color
            </option>
            <option>
                white
            </option>
            <option>
                black
            </option>
            <option>
                red
            </option>
            <option>
                blue
            </option>
            <option>
                yellow
            </option>
            <option>
                green
            </option>
         </select>
         <select className="select" name="size" onChange={handleFilters}>
            <option disabled>
             Size
            </option>
            <option>
                XS
            </option>
            <option>
                S
            </option>
            <option>
                M
            </option>
            <option>
                L
            </option>
            <option>
                XL
            </option>
           
         </select>
        </div>
        <div className="filter">
        <span className="filter-text">
            Sort products:
         </span>
         <select className="select" onChange={handleSort}>
            <option value="newest">
             Newest
            </option>
            <option valiue="asc">
                Price (asc)
            </option>
            <option value="desc">
                Price (desc)
            </option>
           
         </select>
         
        </div>

        </div>
        <Products cat={cat}  filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </div>
    )
}


export default ProductList;