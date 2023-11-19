import React from "react";
import { Categories } from "../data";
import { Link } from "react-router-dom";

function Category() {
    return (
        <div className="category-container">
        {Categories.map((item, index) => {
            return (
                <div className="category" key={index}>
                <Link to={`/products/${item.cat}`} >
            <img className="category-img" src={item.img}  alt="shirt-style"/>
              <div className="category-info">
              <h1 className="category-title">
                {item.title}
              </h1>
              <button className="category-button">
              SHOP NOW
              </button>

              </div>
              </Link>
            </div>
            
            )
        })}
           
        </div>

    )
}


export default Category;