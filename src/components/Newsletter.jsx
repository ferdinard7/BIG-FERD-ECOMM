import React from "react";
import SendIcon from '@mui/icons-material/Send';

function Newsletter() {
    return (
 <div className="newsletter-container">
    <h1 className="newsletter-title">
      Newsletter
    </h1>
    <div className="newsletter-desc">
        Get timely updates from your favourite products
    </div>
    <div className="newsletter-info">
        <input placeholder="Your email" className="newsletter-input">

        </input>
        <button className="newsletter-button">
        <SendIcon />

        </button>

    </div>
 </div>
    )
}


export default Newsletter;