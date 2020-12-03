import React from 'react'
import "./nav-bar.css"

function NavBar(props) {

    function handleUploadClick(event) {
        props.fileCallback((event.target = true));
        props.viewDataCallback((event.target = false));
    }

    function handleViewDataClick(event) {
        props.fileCallback((event.target = false));
        props.viewDataCallback((event.target = true));
    }

    return (
        <div className="container nav-div">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light sticky-top nav-fill w-100">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleUploadClick}>CSV Upload</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleViewDataClick}>View Data</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar