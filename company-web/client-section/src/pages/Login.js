import React from 'react'
import Header from './Header'
import Fotter from './Fotter'

function Login() {
  return (
    <div>
    <Header/>

    {/* Header Start */}
    <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{maxWidth: '900px'}}>
            <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Login</h4>
            <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active text-primary">Contact</li>
            </ol>    
        </div>
    </div>
    {/* Header End */}

    {/* Contact Start */}
    <div className="container-fluid contact py-5">
        <div className="container py-5">
            <div className="row g-5"> 
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="bg-light p-5 rounded h-100">
                        <h4 className="text-primary mb-4">Login Form</h4>
                        <form>
                            <div className="row g-4">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control border-0" id="project" placeholder="Project"/>
                                        <label for="project">password</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3">Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="rounded">
                        <iframe className="rounded w-100" 
                        style={{height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Contact End */}

    <Fotter/>

</div>
  )
}

export default Login