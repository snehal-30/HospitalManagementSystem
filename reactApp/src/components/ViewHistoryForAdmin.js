import React from "react";
import {Button }from 'reactstrap';
import img1 from '../images/admin.png';
class ViewHistoryForAdmin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            appointmentsforadmin: [],
         
        }
    }


    componentDidMount=()=>{
        
      this.GetAppointmentForAdmin();
      
        }

        GetAppointmentForAdmin=()=>
        {
           
            const  p_id=sessionStorage.getItem("pid")
        fetch("http://localhost:8050/appointment")
        .then(resp => resp.json())
        .then(data => this.setState({appointmentsforadmin: data}));
        
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
                               
                            
                            </tr>
                        </thead>  
                        <tbody>
                                
                       {this.state.appointmentsforadmin.map((adm,index) => (
                           <tr >
              
                           <td>_{adm.app_id})</td>
                                   <td>{adm.p_id.full_name}</td>
                                   <td>{adm.doc_id.f_name}&nbsp;&nbsp;{adm.doc_id.l_name}</td>
                                   <td>{adm.app_date}</td>
                                   {/* <td>{adm.s_id}</td> */}
                            
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
export default ViewHistoryForAdmin;