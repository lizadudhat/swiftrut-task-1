import React from 'react'
import './great.css'

const Great = () => {
  return (
    <>
        <section className='great'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card shadow">
                        <div class="card-body">
       
        <h1 class="card-texttt"style={{color:"white",fontSize:"60px"}}>NOW WATCH</h1>
        <p class="card-textt"style={{fontSize:"20px"}}>NETFLIX INDIA AT JUST
</p>
<h5 class="card-title">149 <span style={{color:"red"}}>Off</span></h5>
           <button style={{padding:"10px",borderRadius:"20px 40px 20px 40px",backgroundColor:"red",border:"none"}}>SUBSCRIBE NOW</button>
      </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6"></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Great
