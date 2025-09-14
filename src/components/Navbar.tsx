import React, { useState } from "react"

import { Link } from "react-router-dom"

const Navbar: React.FC = () => {

    const [ddOpen, setDdOpen] = useState(false)
    const [ddKey, setDdKey] = useState<'schedule' | 'results' | 'news' | 'drivers' | 'teams' | 'fantasy' | null>(null)
    const [anchor, setAnchor] = useState<{ left: number; width: number }>({ left: 0, width: 0 })

    const openDropdown = (key: typeof ddKey) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        setAnchor({ left: rect.left, width: rect.width })
        setDdKey(key)
        setDdOpen(true)
    }

    const closeDropdown = () => setDdOpen(false)

    return (

        <>

            {/* Slim topbar */}
            <nav className="navbar navbar-expand f1-topbar" data-bs-theme="dark">

                <div className="container-fluid align-items-center">

                    {/* Left: FIA logo + Race Series */}
                    <div className="d-flex align-items-center">
                        <Link to='/' className="navbar-brand f1-left-margin"><img src="/assets/fia.png" className="f1-logo" alt="fia" /></Link>
                        <span className="top-sep d-none d-md-inline-block"></span>
                        <ul className="navbar-nav mb-0">
                            <li className="nav-item"><Link to='/' className="nav-link">Race Series<span className="caret-down">▾</span></Link></li>
                    </ul>
                    </div>

                    {/* Right: rest of links + actions */}
                    <div className="ms-auto d-flex align-items-center gap-3">
                        <ul className="navbar-nav mb-0 flex-row gap-3 align-items-center">
                            <li className="nav-item"><Link to='/' className="nav-link">Authentics</Link></li>
                            <li className="nav-item"><Link to='/' className="nav-link">Store</Link></li>
                            <li className="nav-item"><Link to='/' className="nav-link">Tickets</Link></li>
                            <li className="nav-item"><Link to='/' className="nav-link">Hospitality</Link></li>
                            <li className="nav-item"><Link to='/' className="nav-link">Experiences</Link></li>
                            <span className="top-sep d-none d-lg-inline-block"></span>
                            <li className="nav-item"><Link to='/' className="nav-link">F1 TV</Link></li>
                        </ul>
                        <span className="top-sep d-none d-lg-inline-block"></span>
                    <div className="d-flex gap-2">
                            <button className="btn btn-sm f1-btn-signin">Sign in</button>
                        <button className="btn btn-sm f1-btn-subscribe">Subscribe</button>
                        </div>
                    </div>

                </div>

            </nav>

            {/* Main nav - sticks after topbar scrolls away */}
            <nav className="navbar navbar-expand-lg f1-mainbar sticky-top" data-bs-theme="dark">

                <div className="container-fluid">

                    <Link to='/' className="navbar-brand"><img src="/f1.png" className="f1-logo" alt="f1" /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#f1MainNav" aria-controls="f1MainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="f1MainNav">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to='/schedule' className="nav-link f1-nav-link" onMouseEnter={openDropdown('schedule')}>Schedule<span className="caret-down">▾</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/schedule' className="nav-link f1-nav-link" onMouseEnter={openDropdown('results')}>Results<span className="caret-down">▾</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/schedule' className="nav-link f1-nav-link" onMouseEnter={openDropdown('news')}>News<span className="caret-down">▾</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/schedule' className="nav-link f1-nav-link" onMouseEnter={openDropdown('drivers')}>Drivers<span className="caret-down">▾</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/schedule' className="nav-link f1-nav-link" onMouseEnter={openDropdown('teams')}>Teams<span className="caret-down">▾</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/schedule' className="nav-link f1-nav-link" onMouseEnter={openDropdown('fantasy')}>Fantasy & Gaming<span className="caret-down">▾</span></Link>
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

            {/* Global full-width dropdown; shows under hovered item */}
            <div className={`f1-global-dropdown ${ddOpen ? 'open' : ''}`} onMouseLeave={closeDropdown}>
                <div className="dropdown-anchor" style={{ left: anchor.left, width: anchor.width }}></div>
                <div className="mega-menu schedule-mega p-3">
                    {ddKey === 'schedule' && (
                        <div>
                            <div className="schedule-grid">
                                <div className="schedule-col">
                                    <div className="schedule-heading">Previous</div>
                                    <Link to='/schedule' className="schedule-card small text-decoration-none">
                                        <img src="/assets/italy.jpg" className="sched-card-img" alt="Italy" />
                                        <div className="sched-overlay top">
                                            <div className="sched-round">ROUND 16</div>
                                            <div className="sched-title">Italy</div>
                                            <div className="sched-meta">05 – 07 SEP</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="schedule-col">
                                    <div className="schedule-heading">Next</div>
                                    <Link to='/schedule' className="schedule-card large text-decoration-none">
                                        <img src="/assets/news1.jpg" className="sched-card-img" alt="Azerbaijan" />
                                        <div className="sched-overlay top">
                                            <div className="sched-round">ROUND 17</div>
                                            <div className="sched-title">Azerbaijan</div>
                                            <div className="sched-meta">19 – 21 SEP</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="schedule-col">
                                    <div className="schedule-heading">Upcoming</div>
                                    <div className="schedule-stack">
                                        <Link to='/schedule' className="schedule-card small text-decoration-none">
                                            <img src="/assets/news1.jpg" className="sched-card-img" alt="Singapore" />
                                            <div className="sched-overlay top">
                                                <div className="sched-round">ROUND 18</div>
                                                <div className="sched-title">Singapore</div>
                                                <div className="sched-meta">03 – 05 OCT</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-actions">
                                <Link to='/schedule' className="btn btn-sm btn-outline-light schedule-btn">Full Schedule</Link>
                                <button className="btn btn-sm schedule-year">2026</button>
                            </div>
                        </div>
                    )}
                    {ddKey === 'results' && (<div className="schedule-grid"><div className="schedule-col"><div className="schedule-heading">Results</div></div></div>)}
                    {ddKey === 'news' && (<div className="schedule-grid"><div className="schedule-col"><div className="schedule-heading">News</div></div></div>)}
                    {ddKey === 'drivers' && (<div className="schedule-grid"><div className="schedule-col"><div className="schedule-heading">Drivers</div></div></div>)}
                    {ddKey === 'teams' && (<div className="schedule-grid"><div className="schedule-col"><div className="schedule-heading">Teams</div></div></div>)}
                    {ddKey === 'fantasy' && (<div className="schedule-grid"><div className="schedule-col"><div className="schedule-heading">Fantasy & Gaming</div></div></div>)}
                </div>
            </div>

        </>

    )

}

export default Navbar