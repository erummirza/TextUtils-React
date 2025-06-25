import React from 'react'
import PropTypes from  'prop-types'
// import { Link } from 'react-router-dom';


//export default function Navbar({title = '', aboutText= 'About',...restProps}) {
//export default function Navbar(props) {
export default  function Navbar(props) {

 
const { title= '',aboutText= 'About' , mode ,toggleMode } = props;  // Destructure like this

    return (
  //<nav   className={'navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}'}>
   <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/About">{aboutText}</Link>
        </li> */}
        
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary"  type="submit">Search</button>
      </form> */}


{/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="{'form-check-input text-light'}" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
</div>



<div className={`form-check form-switch text-${props.mode === 'light' ? 'red' : 'light'}`}>
  <input className="{'form-check-input text-light'}" style={{ color: "red" }} onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefaultred"/>
  <label className="form-check-label"   style={{ color: "red" }} htmlFor="switchCheckDefaultred"> Enable red  Mode</label>
</div>  */}


<div>
 
  <div style={{ display: "flex", gap: "16px" }}>
     <h6>Select Your theme</h6>
  <div id="red" className="my-1  dotred"       onClick={props.toggleMode}></div>
  <div id="green" className="my-1  dotGreen"   onClick={props.toggleMode}></div>
  <div id="Dark" className="my-1  dotDark"     onClick={props.toggleMode}></div>
  <div id="white" className="my-1  dotWhite"   onClick={props.toggleMode}></div>
</div>
 
    
  {/* <span class="dotgreen"></span>
  <span class="dot"></span>
  <span class="dot"></span> */}
</div>


<div>
  
</div>




    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string  // lowercase 't'
};

Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'about text here'  // lowercase 't'
};

  