import React from "react";
import img1 from '../images/admin.png';

import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class addHospital extends React.Component{
     
     constructor(props) {
        super(props);
        this.state = {
            Hospital: {
            
         
              hospitalName:'',
              hospAddress:'',
                hospContact:'',
                hospEmail:'',
             },
             reghosp : {}
                  }
                    this.hospitalName = this.hospitalName.bind(this);
                    this.hospAddress = this.hospAddress.bind(this);
                    this.hospContact = this.hospContact.bind(this);
                    this.hospEmail = this.hospEmail.bind(this);
                      

                    
            
                  }
                  
                  hospitalName(event) {
             
                    this.setState({ hospitalName: event.target.value })
              
                  }
                  hospAddress(event) {
             
                    this.setState({ hospAddress: event.target.value })
              
                  }
                  hospContact(event) {
             
                    this.setState({ hospContact: event.target.value })
              
                  }
                 
                
                  hospEmail(event) {
             
                    this.setState({ hospEmail: event.target.value })
              
                  }

                
                register(event) {
                     
          
                    fetch('http://localhost:8050/addHospital', {
                   
                      method: 'post',
             
                      headers: {
               
                        'Accept': 'application/json',
             
                        'Content-Type': 'application/json'
          
                      },
                     
                      
                    "body": JSON.stringify({
            
                        hospitalName:this.state.hospitalName,
                        hospAddress:this.state.hospAddress,
                        hospContact: this.state.hospContact,
                       
                        hospEmail:this.state.hospEmail,
                        
                        
                     })
            
                    })
                   
                    .then(response  => response.json())
                      
                    .then((result) => {
                          this.setState({reghosp: result});
                          alert("hospital registration sucessfully completed !!")
                          //sessionStorage.setItem("pid",regpatient.p_id);
                          this.props.history.push("/adminhome/admin");
           
                      
                      })
                    
              
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
                        <div className="app flex-row align-items-center">
               
                          <Container>
                  
                            <Row className="justify-content-center">
                  
                              <Col md="9" lg="7" xl="6">
                  
                                <Card className="mx-4">
               
                                  <CardBody className="p-4">
                
                                    <Form>
                  
                                      <div class="row" className="mb-2 pageheading">
               
                                        
                 
                                          <h2>Hospital Registration Form</h2>
                
                                      
           
                                      </div>
                                      <lable>Hospital Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text" required onChange={(event) =>this.hospitalName(event)} />
                                       </InputGroup>

                                       <lable>address</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text" required onChange={(event) =>this.hospAddress(event)} />
                                       </InputGroup>
                                      
                                      <lable>Hospital contact No.</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="email" required  onChange={(event) =>this.hospContact(event)} />
                                      </InputGroup>
               
                                      
                                      <lable>Email</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="email" required  onChange={(event) =>this.hospEmail(event)}  />
                                      </InputGroup>
               
                                      
                                      
                                     
                                      <Button  onClick={(event) => this.register(event)}  color="success" >Register</Button>
              
                                    </Form>
               
                                  </CardBody>
               
                                </Card>
               
                              </Col>
           
                            </Row>
          
                          </Container>
               
                        </div>
                        </body>
                        </html>
                      );
              
                    }
                  
                  }
                  export default addHospital;