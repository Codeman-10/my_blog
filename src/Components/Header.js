import React from 'react'
import {Link} from "react-router-dom";
import './Header.css'
function Header() {
    return (
        <div className="header_container">
            <div className="header_left">
                <h3>Blog</h3>
            </div>
            <div className="header_right">
                    <p><Link to="/">HOME</Link></p>
                <p><Link to="/blog">BLOG</Link></p>

            </div>
        </div>
    )
}

export default Header
