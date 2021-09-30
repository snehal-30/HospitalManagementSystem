import React from "react";
import {Button }from 'reactstrap';
import img1 from '../images/admin.png';
class  PatientHistory extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            appointments: [],
            slots:[],
            delete :'',
        }
    }


    componentDidMount=()=>{
        
      this.GetAppointment();
      
        }

        GetAppointment=()=>
        {
           
            const  p_id=sessionStorage.getItem("pid")
        fetch("http://localhost:8050/getAllAppointmentsByPatientId/?p_id="+p_id)
        .then(resp => resp.json())
        .then(data => this.setState({appointments: data}));
        
        }
        

        DeleteAppointment=(app_id)=>
        {
            fetch("http://localhost:8050/deleteAppointment", 
            {
            method : 'POST',
            headers : {
              'Content-Type':'application/json'
            },
            body:(app_id)
            
        })    
            .then(data =>{this.GetAppointment()
             this.setState({delete: data,message:"Appointment has been deleted..."})}
        )}
    

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
                                <th>Doctor Name</th>
                                <th>Appintment Date</th>
                                <th>Action</th>
                                
                            
                            </tr>
                        </thead>  
                        <tbody>
                                
                       {this.state.appointments.map((apt,index) => (
                           <tr >
              
                           <td>_{apt.app_id})</td>
                                   <td>{apt.p_id.full_name}</td>
                                   <td>{apt.doc_id.f_name}</td>
                                   <td>{apt.app_date}</td>
                                 
                                <td>   <Button  onClick={(event) => this.DeleteAppointment(apt.app_id)}  color="danger" >CANCEL</Button>   </td> 
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



}
export default PatientHistory;