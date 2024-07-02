import React from "react";
import './MobileNav.css'

const MobileNav =({isOpen, ToggelMenu})=>{
    return(
        <>
        <div className={`mobile-menu ${isOpen ? "active":""}`} onClick={ToggelMenu}>
            <div className="mobile-menu-container">
                <div className="Mobile-logo">LightUpTech</div>
                <ul>
                    <li className="menu-item1">Home</li>
                    <li className="menu-item1">Mission</li>
                    <li className="menu-item1">Product</li>
                <button className="contact-btn-mob" onClick={()=>{}}>Contact</button>
                </ul>
            </div>
        </div>
        </>
    )
}
export default MobileNav