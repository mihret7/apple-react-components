import { useState } from 'react'
import './App.css'

import './commonResource/js/custom.js'

// importing components 
import Alert from './Components/Alert/Alert.jsx';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Footer from "./Components/Footer/Footer.jsx";
import FooterNew from "./Components/Footer/FooterNew.jsx";


function App() {

  return (
    <>
    <Header/>
    <Alert/>
    <Main/>
    <Footer/>
    {/* <FooterNew/> */}
    </>
  )
}

export default App
