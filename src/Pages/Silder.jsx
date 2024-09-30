import React from 'react'
import './silder.css'
import { FaSearch } from "react-icons/fa";
const Silder = () => {
  return (
    <>
      <section className='slidbar'>
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="silder-content">
             <center>
             <h1 style={{color:"white"}}>Unlimited Movies,TV</h1>
             <h1 style={{color:"white"}}>Shows,and more.</h1>
             </center>
                    <div className="p-1 d-flex done">
                    
                    <form className="d-flex mt-2"style={{marginLeft:"10%"}}>
        <input  type="text"   placeholder="Search your movies ..."/>
       
        <button className='btn btn-success'style={{backgroundColor:"red"}}><FaSearch />
    </button>
      </form>
                    </div>
                  
                 
                </div>
            </div>
            <div className="col-lg-6"></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Silder
