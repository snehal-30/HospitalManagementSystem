import { blueGrey } from "@material-ui/core/colors";
import React from "react";


export class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            msg:"",
            loginerror:""
        }
    }

    checkUser=() =>{
        let  user_name=this.refs.user_name.value;
        let user_pwd=this.refs.user_pwd.value;

        const url="http://localhost:8050/checkUser?user_name="+user_name+"&user_pwd="+user_pwd;
        fetch(url)
        .then(response => response.json()) 
        .then(data =>{
            if(data.user_type == "doctor")
            {

            this.props.history.push("/doctorhome/"+data.user_id);
            }
            else if (data.user_type == "patient")
            {
                //sessionStorage.setItem("pid",data.user_id);
            this.props.history.push("/patienthome/"+data.user_id);
            }
            
            
            
            else if (data.user_type == "admin")
            {
                
            this.props.history.push("/adminhome/"+user_name);
            }
            else if(data==undefined)
            {
            this.setState({loginerror:"Wrong ID/PWD"});
            }
        });
    }
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
            <body background="https://www.teahub.io/photos/full/175-1758883_medical-background-free-image-background-for-hospital-website.png" >
        <form >
    <div className="mx-auto" className="position-absolute top-50 start-50 translate-middle
    p-3 mb-2 bg-purple text-black text-center"style={{width:1000,height:450}}>
       <h1>Sign in</h1>
        
        <br/>
       
        
       
            <label class="mb-3">
            <h6 class="mb-0 text-sm">User Name: </h6></label>   <input type="user_name" ref="user_name" /><br/>
            <br/>
            <label class="mb-2">
            <h6 class="mb-2 text-sm">Password :</h6> </label>   <input type="password" ref="user_pwd" /><br/>
            <br/>
            <input class="btn btn-primary"  onClick={this.checkUser} value="Login" />
            
            <br/>
            <p>{this.state.loginerror}</p>
            <a className="link-warning" href="/register">New user?. Register here</a>
       
            

</div>


        </form>
    </body>
   
   </html>
    
    

);
}
}
export default Login;