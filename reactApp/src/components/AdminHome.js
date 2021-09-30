import React from "react";
import img1 from '../images/admin.png';
class AdminHome extends React.Component{
    constructor(props){

        super(props);
    }
    render()
    {
             return (
              <html>  
                  
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <button className="navbar-toggler" type="button" href="#navbarDropdown" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                              </button>
                              <img src={img1} alt="logo" id="user-icon"></img>
                              <a id="navbar-brand" style={{color:'purple'}} class="navbar-brand" href="/staffpage">Admin</a>
                          <ul class="navbar-nav mr-auto">
                            
                          <li class="nav-item ">
                                 <a class="nav-link active"  id="nav-link"   href="/addHospital">Add Hospital</a>
                               </li>
                               
                               <li class="nav-item ">
                                 <a  class="nav-link" id="nav-link" href="/addDoctor">Add Doctor</a>
                               </li> 
                               <li class="nav-item">
                                 <a class="nav-link" id="nav-link" href="/viewhistoryforadmin">view session</a>
                               </li>
                               <li class="nav-item">
                                 <a class="nav-link" id="nav-link" href="/login">Logout</a>
                               </li>
                          </ul>
                        </div>
                      
                        </nav> 
                        
                        <body style={{backgroundColor: "lightblue"}}> 
                        <br/><br/><br/><br/>
                        <img src="https://www.sdglobaltech.com/wp-content/uploads/2017/01/The-integrations-that-matter-for-a-Hospital-Management-System.jpg" title="Title of image" width="100%" height="200%" alt="alt text here"/>
                        <hr/> <br/>
                        <div>
                                    <h1 className="text-black" align="center">Our Vision and Mission Statements</h1>
                                    <br/>
                                    <br/>
                                    <p className="text-black container">
                                    The Mission of Tridal Hospital is to provide compassionate, accessible, high quality, 
                                    cost effective healthcare to the community; to promote health; to educate healthcare professionals, 
                                    and to participate in appropriate clinical research.
                                    </p>
                                    <br/>
                                    <p className = "text-black container">
                                    Tridal Hospital will be an innovative, leading regional health system dedicated to advancing the 
                                    health and transforming the lives of the people we serve through excellent clinical quality;
                                    accessible, patient-centered, caring service; and unmatched physician and employee commitment.
                                    </p>
                                    <br/>
                                    <br/>
                                    </div>

                                    </body>
                          </html>
                       
                           

                            
                           
 
                            
                          
             )
            
 
    }
 
 }
export default AdminHome;