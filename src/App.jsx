import Head from './Pages/Head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Silder from "./Pages/Silder"
import Milk from "./Pages/Section2"
import Popular from "./Pages/Popular"


import Great from "./Pages/Great"

import Login from './Login'
import Footer from "./Pages/Footer"





function App() {

  return (

    <>

      <Head/>
    
      <Silder/>
      <Milk/>
      <Popular/>
     
     
      <Great/>
     
    
      <Login/>
      <Footer/>
    
   
    </>
  )
}

export default App
