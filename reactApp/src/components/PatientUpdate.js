import React from "react";
import img1 from '../images/admin.png';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class PatientUpdate extends React.Component{
     
     constructor(props) {
        super(props);
        this.state = {
            patients: {
            
         
                
                email:'',
                address:'',
                cnt_no:'',
                

                user_pwd:'',
               
             },
             regdoctor : {}
                  }
                   
                    this.email = this.email.bind(this);
                    this.address = this.address.bind(this);
                    this.cnt_no = this.cnt_no.bind(this);
                   
                    this.user_pwd = this.user_pwd.bind(this);
                   

                    
            
                  }
                  
                  
                  email(event) {
             
                    this.setState({ email: event.target.value })
              
                  }
                 
                
                  address(event) {
             
                    this.setState({ address: event.target.value })
              
                  }

                  cnt_no(event) {
             
                    this.setState({ cnt_no: event.target.value })
              
                  }
          
             
                  

                  user_pwd(event) {
             
                    this.setState({ user_pwd: event.target.value })
            
                  }
              
                  updateEmail=(event)=>
                  {
                    const  p_id=sessionStorage.getItem("pid")

                    fetch("http://localhost:8050/updatePatientEmail/?pid="+p_id+"&email="+this.state.email,
                    {
                        method : 'POST',
                        headers : {
                                   'Content-Type':'application/json'
                      },
                      body:(p_id)
                    })   
                    alert("your email has been changed sucessfully....")
                 }
              
                 updateCnt=(event)=>
                 {
                  const  p_id=sessionStorage.getItem("pid")
                   fetch("http://localhost:8050/updatePatientContactNo/?pid="+p_id+"&cnt_no="+this.state.cnt_no,
                   {
                    method : 'POST',
                    headers : {
                               'Content-Type':'application/json'
                  },
                  body:(p_id)
                })   
                alert("your contact number has been changed sucessfully....")
                }
             
                updateAdd=(event)=>
                {
                  const  p_id=sessionStorage.getItem("pid")
                  fetch("http://localhost:8050/updatePatientAddress/?pid="+p_id+"&address="+this.state.address,
                  {
                    method : 'POST',
                    headers : {
                               'Content-Type':'application/json'
                  },
                  body:(p_id)
                })   
                alert("your address has been changed sucessfully....")
               }
            
              //  updatePassword=(event)=>
              //  {
              //    fetch("http://localhost:8080/updatePatientPassword?sp="+event.target.value)
              //    .then(response => response.json())
              //    .then(data => this.setState({patinets: data}) )
              // }
           




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
      
                        <div className="app flex-row align-items-center">
               
                          <Container>
                  
                            <Row className="justify-content-center">
                  
                              <Col md="9" lg="7" xl="6">
                  
                                <Card className="mx-4">
               
                                  <CardBody className="p-4">
                
                                    <Form>
                  
                                      <div class="row" className="mb-2 pageheading">
               
                                        
                 
                                          <h2>Updation Form</h2>
                
                                      
           
                                      </div>
                                     
                                      
                                      <lable>email</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.email(event)} />
                                      <Button onClick={(event) => this.updateEmail(event)}  color="success" >Update</Button>
                                      </InputGroup>
               
                                      
                                      <lable>Contact number</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="number"  onChange={(event) =>this.cnt_no(event)}  />
                                      <Button  onClick={(event) => this.updateCnt(event)}  color="success" >Update</Button>
              
                                      </InputGroup>
               
                                      
                                      <lable>City</lable><br></br>
                                      <InputGroup className="mb-3">
             
                                        <Input type="text"  onChange={(event) =>this.city(event)} />
                                        <Button  onClick={(event) => this.updateAdd(event)}  color="success" >Update</Button>
              
               
                                      </InputGroup>

                                     

                                      

                                        
                                     
{/* 
                                      <lable>Password</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="password"  onChange={(event) =>this.user_pwd(event)}  />
                                     <Button  onClick={(event) => this.updatePassword(event)}  color="success" >Update</Button>
                                      </InputGroup> */}

                                     
                                     
                                    </Form>
               
                                  </CardBody>
               
                                </Card>
               
                              </Col>
           
                            </Row>
          
                          </Container>
               
                        </div> </body></html>
               
                      );
              
                    }
               
                  }
                  export default PatientUpdate;