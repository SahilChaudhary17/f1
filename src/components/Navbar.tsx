import React from "react"

import { Link } from "react-router-dom"

const Navbar: React.FC = () => {

    return (

        <>

            {/* Slim topbar */}
            <nav className="navbar navbar-expand f1-topbar" data-bs-theme="dark">

                <div className="container-fluid">

                    <ul className="navbar-nav me-auto mb-0">
                        <Link to='/' className="navbar-brand f1-left-margin"><img src="/assets/fia.png" className="f1-logo" alt="fia" /></Link>
                        <li className="nav-item"><Link to='/' className="nav-link f1-nav-link">Authentics</Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link f1-nav-link">Store</Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link f1-nav-link">Tickets</Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link f1-nav-link">Hospitality</Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link f1-nav-link">Experiences</Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link f1-nav-link">F1 TV</Link></li>
                    </ul>

                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-light f1-btn-signin">Sign in</button>
                        <button className="btn btn-sm f1-btn-subscribe">Subscribe</button>
                    </div>

                </div>

            </nav>

            {/* Main nav - sticks after topbar scrolls away */}
            <nav className="navbar navbar-expand-lg f1-mainbar sticky-top" data-bs-theme="dark">

                <div className="container-fluid">

                    <Link to='/' className="navbar-brand"><img src="/f1.jpg" className="f1-logo" alt="f1" /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#f1MainNav" aria-controls="f1MainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="f1MainNav">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <Link to='/schedule' className="nav-link dropdown-toggle f1-nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Schedule<span className="caret-down">▾</span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/schedule' className="dropdown-item">Full Schedule</Link></li>
                                    <li><Link to='/schedule' className="dropdown-item">Upcoming</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to='/schedule' className="dropdown-item">Past Races</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/schedule' className="nav-link dropdown-toggle f1-nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Results<span className="caret-down">▾</span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item">Standings</Link></li>
                                    <li><Link to='/' className="dropdown-item">Race Results</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/schedule' className="nav-link dropdown-toggle f1-nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">News<span className="caret-down">▾</span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item">Latest</Link></li>
                                    <li><Link to='/' className="dropdown-item">Features</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/schedule' className="nav-link dropdown-toggle f1-nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Drivers<span className="caret-down">▾</span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item">Grid</Link></li>
                                    <li><Link to='/' className="dropdown-item">Standings</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/schedule' className="nav-link dropdown-toggle f1-nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Teams<span className="caret-down">▾</span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item">Line-up</Link></li>
                                    <li><Link to='/' className="dropdown-item">Standings</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/schedule' className="nav-link dropdown-toggle f1-nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Fantasy & Gaming<span className="caret-down">▾</span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item">Fantasy</Link></li>
                                    <li><Link to='/' className="dropdown-item">Gaming</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to='/' className="nav-link f1-nav-link">F1 Members' Area</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/light-swtich' className="nav-link disabled f1-nav-link" aria-current="page">Demo</Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </>

    )

}

export default Navbar