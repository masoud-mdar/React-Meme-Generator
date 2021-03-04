import React from "react";

const Header = () => {
    return(
        <div>
            <div className="nav-wrapper">
                <div className="nav-title">
                    <h1>Meme Generator</h1>
                </div>
                <div className="leaf-wrapper">
                    <div className="leaf one"></div>
                    <div className="leaf two"></div>
                    <div className="leaf three"></div>
                </div>
                <div className="nav-link-wrapper">
                    <a href="#" target="_blank">imgflip</a>
                    <a href="#" target="_blank">API</a>
                </div>
            </div>
        </div>
    )
}

export default Header;