import React from "react";
import {Button }from 'reactstrap';
import img1 from '../images/admin.png';
class  DoctorHistory extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            viewappointments: [],
           
        }
    }
    componentDidMount=()=>{
        
        this.GetDoctorAppointment();
        
          }
  
          GetDoctorAppointment=()=>
          {
             
              const  doc_id=sessionStorage.getItem("doc_id")
              console.log(doc_id)
          fetch("http://localhost:8050/AllAppointmentforDoctor/?doc_id="+doc_id,
          {
            method : 'POST',
            headers : {
              'Content-Type':'application/json'
            },
            body:(doc_id)
            
        })
          .then(resp => resp.json())
          .then(data => this.setState({ viewappointments: data}));
          
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
                      <a id="navbar-brand" style={{color:'purple'}} class="navbar-brand" href="/staffpage">Doctor</a>
                  <ul class="navbar-nav mr-auto">
                       <li class="nav-item ">
                         <a  class="nav-link" id="nav-link" href="/doctorhistory">View Appointments</a>
                       </li> 
                       <li class="nav-item">
                         <a class="nav-link" id="nav-link" href="/doctorupdate">Update Profile</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link" id="nav-link" href="/login">Logout</a>
                       </li>
                  </ul>
                </div>
              
                </nav> 
        
                    <div>
                    
                    {
                    this.state.message?this.state.message:null}
    
                    <div >
                    <h2 className="text-center">Appointment History</h2>
                    <div className="row">
                        <table className = "table table-striped table-bordered shadow">
                            <thead>
                                <tr>
                                    <th>Appointment ID</th>
                                    
                                    <th>Patient Name</th>
                                   
                                    <th>Appintment Date</th>
                                    <th>Appintment Time</th>
                                 
                                
                                </tr>
                            </thead>  
                            <tbody>
                                    
                           {this.state.viewappointments.map((apt,index) => (
                               <tr >
                  
                               <td>_{apt.app_id})</td>
                                       <td>{apt.p_id.full_name}</td>
                                      
                                       <td>{apt.app_date}</td>
                                       
                                  
                               </tr>
                           ))}
                         
                                
                                           
                                </tbody>
                                </table>
                                
                        </div>
                        </div>
                    </div>
                    </body>
                 </html>
                    
                );
    
                           }
    
    
 }export default DoctorHistory
    
    
    















