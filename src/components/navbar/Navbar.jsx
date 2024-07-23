import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <span className="text">blockstart</span>
                </div>
                <div className="links">
                    <span>BlockStart Pro</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    <span>Start Coaching</span>
                    <button>Join</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar