import React from "react"

import { Link } from "react-router-dom";

import '../styles/home.css';

const Home: React.FC = () => {

    // const isLoggedIn = true;

    const isLoggedIn = false;

    return (

        <>
            <hr style={{ borderColor: 'rgba(255,255,255,0.12)' }} />

            <section className="news-hero-section">
            <div className="news-card">

                <Link to ='https://www.formula1.com/'>

                <img className="news-card-img" src="/assets/news1.jpg" alt="News article" />

                <div className="news-card-img-overlay d-flex flex-column black-gradient">

                    <h6 className="card-text"><span className="highlight px-2 py-1">EXCLUSIVE</span></h6>

                    <h2 className="news-card-title">

                        Lowdon on Cadillac's preparations ahead of 2026 debut

                    </h2>

                </div>

                </Link>

            </div>
            </section>

            <div className="conatainer-fluid row d-flex" style={{ gap: "20px", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>

                <Link to='/drivers' className="card shadow col-md-3" style={{ backgroundColor: "#87ceeb", alignItems: "center", textDecoration: 'none' }}>

                    <img src="/assets/archery.jpg" className="rounded mt-3 img-fluid img-icon" alt="Archery" />
                    <h5>Race Standings</h5>
                </Link>

                <Link to='/' className="card shadow col-md-3" style={{ backgroundColor: "#0d0f14", alignItems: "center", textDecoration: 'none', border: '1px solid rgba(255,255,255,0.08)' }}>

                    <img src="/f1.jpg" className="rounded mt-3 img-fluid img-icon" alt="Favs" />
                    <h5 style={{ color: '#fff' }}>Favs</h5>
                </Link>

                <Link to='/' className="card shadow col-md-3" style={{ backgroundColor: "#87ceeb", alignItems: "center", textDecoration: 'none' }}>

                    <img src="/assets/standings.jpg" className="rounded mt-3 img-fluid img-icon" alt="Archery" />

                    <h5>Team Standings</h5>

                </Link>

                {

                    isLoggedIn ? (

                        <>

                            <Link to='/' className="card shadow col-md-3" style={{ backgroundColor: "#87ceeb", alignItems: "center", textDecoration: 'none' }}>

                                <img src="/assets/archery.jpg" className="rounded mt-3 img-fluid img-icon" alt="Archery" />

                                <h5>Favs</h5>

                            </Link>

                        </>

                    ) : (

                        <>

                            <hr className="mt-3" />

                            <h6 style={{ color: "#ff1801" }}>End of data</h6>

                        </>

                    )

                }

            </div>

        </>

    )

}

export default Home