import React from 'react'

import './head.css'



const Head = () => {
  return (
    <>

    <div className="row">
    <nav className="navbar navbar-expand-lg navbar-light  d-flex align--items-center">
  <div className="container-fluid">
    <div className="col-lg-1">
    <a className="navbar-brand" href="#">
        <img src="public/logo-main.png" style={{width:"10rem",margin:"0"}} />
    </a>
    </div>
    <button className="navbar-toggler d-sm-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse d-sm-none navbar-collapse justify-content-center" id="navbarSupportedContent">
      <div className="col-lg-6">
    
      </div>
     
    </div>
    <div className="col-lg-5 d-sm-none d-sm-none d-lg-block">
    <div className="logo  justify-content-end d-flex align-items-center">
      <div className="logo-png d-flex align-items-center">
    <span>
    

    </span>
          <h5 style={{color:"white"}}>English</h5>
      </div>
      <div className="logo-png d-flex align-items-center">
    <span>
   
 

    </span>
    
          <h5 style={{color:"white"}}>Hindi</h5>
      </div>
      <div className="logo-png d-flex align-items-center">
    <span>
   



    </span>
          <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"5px"}}>sign in</button>
          <button style={{backgroundColor:"red",color:"white",border:"none",margin:"5px",borderRadius:"5px"}}>Join </button>
      </div>
    </div>
    </div>
  </div>
    </nav>
    </div>


    </>
  )
}

export default Head
