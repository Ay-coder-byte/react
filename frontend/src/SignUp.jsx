import React, {useState} from "react";
// import Header from "./Header";

import "./App.css";

const SignUp = () => {

    const [inputVal, setInputVal] = useState({
        Email: '',
        Password:'',
        ConfirmPassword: '',
        Address: '',
        FirstName: '',
        Surname: '',
        jobDesc: ''
    })

    const handleChange = (e) => {
        setInputVal({
            ...inputVal,
            [e.target.name]:e.target.value
        })

    }

    const handleVal =(e) => {
       console.log(inputVal)
       e.preventDefault()
    }
  return (
    <>
    

    <div className="form__cont">
    <div className="form">
      <form action="form" >
        <p style={{ textAlign: "center", marginTop: "10px" }}>Signup Form</p>
        <div className="input">
            <p>Email</p>
            <input type="text" name='Email' value={inputVal.Email} onChange={handleChange}/>
        </div>
        <div className="input">
            <p>Password</p>
            <input type="text" name='Password' value={inputVal.Password} onChange={handleChange}/>
        </div>
        <div className="input">
            <p>Confirm Password</p>
            <input type="text" name='ConfirmPassword' value={inputVal.ConfirmPassword} onChange={handleChange} />
        </div>
        <div className="input">
            <p>Address</p>
            <input type="text" name='Address' value={inputVal.Address} onChange={handleChange}/>
        </div>

        <div className="input">
            <p>Job Description</p>
            <input name="jobDesc" value={inputVal.jobDesc} type="text" />
        </div>
        <div className="input">
            <p>First Name</p> 
            <input type="text" name='FirstName' value={inputVal.FirstName} onChange={handleChange}/>
        </div>
        <div className="input">
            <p>Surname</p>
            <input type="text" name='Surname' value={inputVal.Surname} onChange={handleChange}/>
        </div>


        <div className="input">
            <p>Upload a file</p>
            <input type="file" />
        </div>
        <button onClick={handleVal} className="btn-1">Sign up</button>
        <p style={{fontSize: '13px', textAlign:'center'}}>Have an account? Sign in</p>
      </form>
    </div>
    </div>
    </>
  );
};



export default SignUp