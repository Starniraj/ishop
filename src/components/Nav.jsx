import React from 'react'
import { Link } from 'react-router-dom'
import iSHOP from "../assests/iSHOP.png"
import "./ishop.css"
import Login from './login'
import SignUp from './signup'

const Nav = () => {
  return (
    <div>
      <Login/>
      <SignUp/>
      {/* <Link to="/Login"><button type="button" class="btn btn-primary" style={{position:"relative",left:"400px"}}><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</button></Link> */}
      {/* <button type="button" class="btn btn-info" style={{position:"relative",left:"480px",top:"4px"}}><i class="fa-solid fa-cash-register"></i> Register</button> */}
        <img src={iSHOP} alt="iSHOP" style={{margin:"10px"}} className="ishop"/>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid, nav" style={{marginLeft:"300px" , color:"black" , textAlign:"center"}}>
    {/* <Link class="navbar-brand" to="#">Navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/" style={{color:"black"}}>HOME</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            STORE
          </Link>
          <ul class="dropdown-menu" style={{width:"700px", height:"300px", marginLeft:"-87px"}} >
            <li><Link class="dropdown-item" to="/store/Accessories">Accessories</Link></li>
            <li><Link class="dropdown-item" to="#" style={{position:"relative",bottom:"31px",left:"248px"}}>Category</Link></li>
            <li><Link class="dropdown-item" to="#" style={{position:"relative",bottom:"63px",left:"453px"}}>Category</Link></li>
            <div className='dropdown-items'>
               <span>AirPort & Wireless <br/><br/> Camera & vedio <br/><br/>Car & Travel<br/><br/> Bags,Shells & sleeves</span>
            </div>
            <div className='second-item'>
                <span>Charging Devices <br/><br/>Connected Home Device<br/><br/> Care Display & Graphic<br/><br/> Fitness & Sport</span>
            </div>
            <div className='third-item'>
                <span>Mice & Keyboards <br/><br/>Music Creation<br/><br/> Networking & Server</span>
            </div>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/store/Accessories">IPHONE</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/store/Accessories">IPAD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/store/Accessories">MACBOOK</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/store/Accessories">ACCESSORIES</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav