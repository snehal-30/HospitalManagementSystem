import React from "react";
import img1 from '../images/admin.png';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class PatientProfile extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          
             profiles: {
                 full_name:'',
                 email:'',
                 cnt_no:'',
                address: '',
                city: '',
                 gender: '',
                 dob:'',

               
               
             },
            profiles :[],

             patient : {}
                  }
                   
                  this.full_name = this.full_name.bind(this);
                  this.email = this.email.bind(this);
                  this.cnt_no = this.cnt_no.bind(this);
                  this.address = this.address.bind(this);
                  this.city= this.city.bind(this);
                  this.gender = this.gender.bind(this);
                  this.dob = this.dob.bind(this);


                    
            
                  }

                  componentDidMount=()=>{
        
                    this.viewprofile();
                    
                      }
              
                      viewprofile=()=>
                      {
                         
                          const  pid=sessionStorage.getItem("pid")
                      fetch("http://localhost:8050/patientProfile/?p_id="+pid,
                      {
                        method : 'post',
                        headers : {
                          'Content-Type':'application/json'
                        },
                        body:(pid)
                        
                    })    
                      
                      .then(resp => resp.json())
                      .then(data => this.setState({profiles:[]}));
                  
                      console.log("data",this.state.profiles);
                     
                      }





                  
                  full_name(event) {
             
                    this.setState({ full_name: event.target.value })
              
                  }
                  email(event) {
             
                    this.setState({ email: event.target.value })
              
                  }
                  cnt_no(event) {
             
                    this.setState({ cnt_no: event.target.value })
              
                  }
                
                  address(event) {
             
                    this.setState({ address: event.target.value })
              
                  }
          
             
                  city(event) {
           
                    this.setState({ city: event.target.value })
              
                  }
                  gender(event) {
             
                    this.setState({ gender: event.target.value })
            
                  }
                  dob(event) {
             
                    this.setState({ dob: event.target.value })
            
                  }
                  
    render() {
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
                <div>
                
                {
                this.state.message?this.state.message:null}
                
    
               
                <div >
                
                <h2 className="text-center"> Welcome {sessionStorage.getItem("pid")} </h2>
                
                <div className="row">
                    <table className = "table table-striped table-bordered shadow">
                        <tbody>
                                
                       {this.state.profiles.map((patient,index) => (
                           
                        <tr>
                                 
                                   <tr><td>full name : {index.full_name}</td></tr>
                                   <tr><td>Email:{index.email}</td></tr>
                                   <tr><td>{index.cnt_no}</td></tr>
                                   <tr><td>{index.address }</td></tr>
                                   <tr><td>{index.city}</td></tr>
                                   <tr><td>{index.gender}</td></tr>
                                   <tr><td>{index.dob}</td></tr>
                                  
                                
                         </tr>
                       ))}
                     
                            
                                       
                            </tbody>
                            </table>
                            
                    </div>
                    </div>
                </div>
             </html>
                
            );




                            }


     
         }
                  export default PatientProfile;