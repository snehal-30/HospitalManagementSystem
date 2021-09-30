import { colors } from '@material-ui/core';
import React from 'react';


export class Home extends React.Component
{
    
  
    render(){
        return (
            

               

            
<html>

    
        
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li>
      <a class="nav-link" href="/about">About us</a>
      </li>
      <li>
      <a class="nav-link" href="/contact">Contact us</a>
      </li>
      <li>
      <a class="nav-link" href="/Register">Register Patient</a>
      </li>
    </ul>
  </div>

  </nav> 
  <span class="text">Tridal Ayurved</span> 
 
<body style={{backgroundColor: "lightblue"}}> 
<br/><br/><br/><br/>
<img src="https://www.sdglobaltech.com/wp-content/uploads/2017/01/The-integrations-that-matter-for-a-Hospital-Management-System.jpg" title="Title of image" width="100%" height="200%" alt="alt text here"/>
<hr/> <br/>
<div>
            <h1 className="text-black" align="center">Our Vision and Mission Statements</h1>
            <br/>
            <br/>
            <p className="text-black container">
            The Mission of Tridal Ayurved is to provide compassionate, accessible, high quality, 
            cost effective healthcare to the community; to promote health; to educate healthcare professionals, 
            and to participate in appropriate clinical research.
            </p>
            <br/>
            <p className = "text-black container">
            Tridal Ayurved will be an innovative, leading regional health system dedicated to advancing the 
            health and transforming the lives of the people we serve through excellent clinical quality;
            accessible, patient-centered, caring service; and unmatched physician and employee commitment.
            </p>
            <br/>
            <br/>
            </div>

            </body>

<footer className="page-footer font-small   pt-4 default-color">
<div className="container-fluid text-center ">
        <div className="row">
         <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase font-weight-bold">Contact us:</h5>
                <p>Email: tridal@gmail.com</p>
                <p>Phone no: 9689668170</p>
         </div>  
              <hr className="clearfix w-100 d-md-none pb-3"/>
               <div className="col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase font-weight-bold">Address:</h5>
                <p> sector 55 , Link Road , Pune </p>
         </div></div></div>
          <div className="footer-copyright text-center py-3 default-color-dark">© 2021 Copyright:
        <span> TridalLtd.com</span>
            </div>
</footer>

</html>
            
        )
    };
}
export default Home;

