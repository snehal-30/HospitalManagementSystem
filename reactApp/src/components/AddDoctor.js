import React from "react";
import img1 from '../images/admin.png';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class AddDoctor extends React.Component{
     
     constructor(props) {
        super(props);
        this.state = {
            doctor: {
            
         
                f_name:'',
                l_name:'',
                email:'',
                city:'',
                cnt_no:'',
                doc_spec: '',
                consultancy_fees: '',
                hos_id:'',
                startTime:'',
                endTime:'',
                user_name:'',
                user_pwd:'',
               
             },
             regdoctor : {}
                  }
                    this.f_name = this.f_name.bind(this);
                    this.l_name = this.l_name.bind(this);
                    this.email = this.email.bind(this);
                    this.city = this.city.bind(this);
                    this.cnt_no = this.cnt_no.bind(this);
                    this.doc_spec= this.doc_spec.bind(this);
                    this.consultancy_fees = this.consultancy_fees.bind(this);
                    this.hos_id= this.hos_id.bind(this);
                    this.startTime=this.startTime.bind(this);
                    this.endTime=this.endTime.bind(this);
                    this.user_name = this.user_name.bind(this);
                    this.user_pwd = this.user_pwd.bind(this);
                   

                    
            
                  }
                  
                  f_name(event) {
             
                    this.setState({ f_name: event.target.value })
              
                  }
                  l_name(event) {
             
                    this.setState({ l_name: event.target.value })
              
                  }
                  email(event) {
             
                    this.setState({ email: event.target.value })
              
                  }
                 
                
                  city(event) {
             
                    this.setState({ city: event.target.value })
              
                  }

                  cnt_no(event) {
             
                    this.setState({ cnt_no: event.target.value })
              
                  }
          
             
                  doc_spec(event) {
           
                    this.setState({ doc_spec: event.target.value })
              
                  }
                  consultancy_fees(event) {
             
                    this.setState({ consultancy_fees: event.target.value })
            
                  }
                  hos_id(event) {
             
                    this.setState({ hos_id: event.target.value })
            
                  }
                  user_name(event) {
             
                    this.setState({user_name: event.target.value })
            
                  }

                  user_pwd(event) {
             
                    this.setState({ user_pwd: event.target.value })
            
                  }
              startTime(event){
                this.setState({ startTime: event.target.value })
              }
              endTime(event){
                this.setState({ endTime: event.target.value })
              }
                register(event) {
                     
          
                    fetch('http://localhost:8050/savedoctor', {
                   
                      method: 'post',
             
                      headers: {
               
                        'Accept': 'application/json',
             
                        'Content-Type': 'application/json'
          
                      },
                     
                      
                    "body": JSON.stringify({
            
                        f_name:this.state.f_name,
                        l_name:this.state.l_name,
                        email: this.state.email,
                       
                        city:this.state.city,
                        cnt_no: this.state.cnt_no,
                        doc_spec:this.state.doc_spec,
                        hos_id:this.state.hod_id,
                        consultancy_fees:this.state.consultancy_fees,
                       startTime:this.state.startTime,
                       endTime:this.state.endTime,
                        user_name:this.state.user_name,
                        user_pwd:this.state.user_pwd,
                        
                     })
            
                    })
                   
                    .then(response  => response.json())
                      
                    .then((result) => {
                          this.setState({regpatient: result});
                          alert("registration sucessfully completed!!")
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
               
                                        
                 
                                          <h2>Doctor Registration Form</h2>
                
                                      
           
                                      </div>
                                      <lable>First Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.f_name(event)} />
                                       </InputGroup>

                                       <lable>Last Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.l_name(event)} />
                                       </InputGroup>
                                      
                                      <lable>email</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.email(event)} />
                                      </InputGroup>
               
                                      
                                      <lable>Contact number</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="number"  onChange={(event) =>this.cnt_no(event)}  />
                                      </InputGroup>
               
                                      
                                      <lable>City</lable><br></br>
                                      <InputGroup className="mb-3">
             
                                        <Input type="text"  onChange={(event) =>this.city(event)} />
               
                                      </InputGroup>

                                     

                                      <lable>Doctor Specification</lable><br></br>
                                        <InputGroup className="mb-3">
                                        <Input type="text"  onChange={(event) =>this.doc_spec(event)} /><br/>
                                        </InputGroup>
                                       
                                     
                                      <lable>Consultancy fees</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="text"  onChange={(event) =>this.consultancy_fees(event)}  />
                  
                                      </InputGroup>
                                      {/* <lable>Hospital Id</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="text"  onChange={(event) =>this.hos_id(event)}  />
                  
                                      </InputGroup> */}
                                      
                                     

                                        
                                      <lable>User Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="text"  onChange={(event) =>this.user_name(event)}  />
                  
                                      </InputGroup>

                                      <lable>Password</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="password"  onChange={(event) =>this.user_pwd(event)}  />
                  
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
                  export default AddDoctor;