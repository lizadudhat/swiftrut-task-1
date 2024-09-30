import React from 'react'
import './popular.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const Popular = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="p-2 movies">
            <h1 style={{color:"white"}}>Popular Movies</h1>
           
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card  mx-auto" style={{ width: '19rem', }}>
              <img src="public/movie-3.jpeg" className="card-img-top" alt="..."style={{height:"400px"}} />
             
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card  mx-auto" style={{ width: '19rem' }}>
              <img src="public/movie-4.jpeg" className="card-img-top" alt="..."style={{height:"400px"}} />
             
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '19rem' }}>
              <img src="public/movie-5.jpeg" className="card-img-top" alt="..."style={{height:"400px"}} />
              
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '19rem' }}>
              <img src="public/movie-6.jpeg" className="card-img-top" alt="..."style={{height:"400px"}} />
             
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '19rem' }}>
              <img src="public/movie-7.jpeg" className="card-img-top" alt="..."style={{height:"400px"}} />
             
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '19rem' }}>
              <img src="public/movie-8.jpeg" className="card-img-top" alt="..."style={{height:"400px"}} />
             
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '19rem' }}>
              <img src="public/movie-9.jpeg" className="card-img-top" alt="..."style={{height:"400px"}} />
             
            </div>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mx-auto" style={{ width: '19rem' }}>
              <img src="public/movie-11.jpg" className="card-img-top" alt="..." style={{height:"400px"}}/>
             
            </div>

          </div>



         
         
          
        </div>
      </div>
    </>
  )
}

export default Popular
