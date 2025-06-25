//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from   './components/Alert';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 

 const showAlert =(messsage,type)=>{
    setAlert({

      msg : messsage,
      type : type ,
    })

    setTimeout(() => {
      setAlert (null);
    }, 1500);

  }

  const toggleMode = (e) =>{

    const clickedDivId = e.currentTarget.id;
  console.log("Clicked div ID:", clickedDivId);
    //console.log(mode)
   if(clickedDivId === 'red')  
        {
      setMode ('red')
    document.body.style.backgroundColor = 'red';
    document.title ='Red mode';    //document.body.s
    showAlert ("red mode  has been enable","success")
setInterval(() => {
  document.title ='Red mode';
}, 2000);

setInterval(() => {
   document.title ='installed Red mode';
}, 1000);
  }

else if (clickedDivId === 'green') 
 {
    setMode ('green')
    document.body.style.backgroundColor = 'green';
    showAlert ("green mode  has been enable","success")
    }
    else if (clickedDivId === 'Dark') 
 {
    setMode ('grey')
    document.body.style.backgroundColor = 'grey';
    showAlert ("Dark mode  has been enable","success")
    }
else if (clickedDivId === 'white') 
 {
    setMode ('#FFFFF0')
    document.body.style.backgroundColor = '#FFFFF0';
    showAlert ("light mode  has been enable","success")
    }

    else   {
    setMode ('light')
    document.body.style.backgroundColor = 'white';
    showAlert ("light mode  has been enable","success")
    }
    
  }


  return (
  <>
  
{/* 
  //<Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route  exact
            path="/" 
            element={ */}
              <Textform 
                showAlert={showAlert} 
                heading="Enter the text to analyse below" 
                mode={mode}
              />
           {/* */ }  
          {/* /> */}
        {/* </Routes> */}
      </div>
    {/* // </Router> */}
  </> 
 

  );
}

export default App;
