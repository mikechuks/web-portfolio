import React from 'react'

const Header = () => {
  return (
    <div>
                {/* Spinner Start */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span classNameName="sr-only">Loading...</span>
            </div>
        </div> */}
         {/* Spinner End */}

         {/*Navbar & Hero Start*/}
        <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a href="" className="navbar-brand p-0">
                    <h1 className="display-6 text-dark"><i className="fas fa-swimmer text-primary me-3"></i>WaterLand</h1>
                     {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="blog.html" className="nav-item nav-link">Blog</a>
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="feature.html" className="dropdown-item">Our Feature</a>
                                <a href="gallery.html" className="dropdown-item">Our Gallery</a>
                                <a href="attraction.html" className="dropdown-item">Attractions</a>
                                <a href="package.html" className="dropdown-item">Ticket Packages</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="team-icon d-none d-xl-flex justify-content-center me-3">
                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0">Get Started</a>
                </div>
            </nav>
        </div>
         {/* Navbar & Hero End */}
    </div>
  )
}

export default Header