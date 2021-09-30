import React from "react";
import img1 from '../images/admin.png';
class PatientHome extends React.Component{
    constructor(props){

        super(props);
        this.state={
            cpatient:{}
        }
    }
    componentDidMount =()=> {
        fetch("http://localhost:8050/getpatient?userid="+this.props.match.params.user_id)
        .then(response => response.json())
        .then(data => {this.setState({cpatient: data});sessionStorage.setItem("pid",data.p_id)});
;    }
    render()
   {
            return (
             <html>
               <body background="https://www.teahub.io/photos/full/175-1758883_medical-background-free-image-background-for-hospital-website.png" >
                
                          
                          
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <button className="navbar-toggler" type="button" href="#navbarDropdown" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src={img1} alt="logo" id="user-icon"></img>
                    <a id="navbar-brand" style={{color:'purple'}} class="navbar-brand" href="/staffpage">Patient</a>
                <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                       <a  class="nav-link" id="nav-link" href="/bookappointment">Book Appointment</a>
                     </li> 
                     <li class="nav-item ">
                       <a  class="nav-link" id="nav-link" href="/patienthistory">View Appointments</a>
                     </li> 
                     <li class="nav-item">
                       <a class="nav-link" id="nav-link" href="/patientupdate">Update Profile</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link" id="nav-link" href="/patientprofile">View Profile</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link" id="nav-link" href="/login">Logout</a>
                     </li>
                </ul>
              </div>
            
              </nav> 
</body>


<img src="https://lh3.googleusercontent.com/proxy/ffH8rRv9SximYLBCBNX5r3GbBchHZjsFWtmm7zelnMuPahx7WJPNWEuHZPy21Ve1d6nMHkc--1PJVLBeNg" title="Title of image" width="100%" height="100%" alt="alt text here"/>                    

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
           

   }
}
export default PatientHome;