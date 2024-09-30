import React from 'react'
import './Section2.css'

const Section2 = () => {
  return (
    <>
      <div className="container">
        <div className="row Horror">

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="box">
                        <h5>
                        Horror movies
                        </h5>
                        <p>(65 +    )</p>
                    </div>
                    <div className="box">
                        <h5> Wanted movies </h5>
                        <p>(30 +)</p>
                    </div>
                    <div className="box">
                        <h5>reality shows</h5>
                        <p>(25 +)</p>
                    </div>
                    <div className="box">
                        <h5>Kids show</h5>
                        <p>(45 +)</p>
                    </div>
                    <div className="box">
                        <h5>Romantic movies</h5>
                        <p>(68 +)</p>
                    </div>
                    <div className="box">
                        <h5>View More</h5>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="shows">
                      
                      
                        <button className='btn'>Shop Now</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="shows now">
                       
                        <button className='btn'>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Section2
