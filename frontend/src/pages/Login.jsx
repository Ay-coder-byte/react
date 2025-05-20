import { useState } from "react"
import { Link } from "react-router-dom";
import "./login.css";


const Login = () => {
    const[Value,setValue]= useState({
        Email: '',
        Password: ''
    })

    const handleChange = (e) => {
        setValue({
            ...Value,
            [e.target.name]:e.target.value
        })

    }


    const handleVal =(e) => {
        console.log(Value)
        e.preventDefault()
     }

    return (
        <div className="form__container">
     <form className="form-cont" action="">
        <p style={{textAlign:'center', marginTop:'10px'}}>Login Form</p>

        <div className="input">
            <p>Email</p>
            <input type="text" name='Email' value={Value.Email} onChange={handleChange} />
        </div>

        <div className="input">
            <p>Password</p>
            <input type="text" name='Password' value={Value.Password} onChange={handleChange} />
        </div>
        <button onClick={handleVal} className="login">
        <Link to={'/'}>
        Login
        </Link>
        </button>
        <p style={{fontSize: '13px', textAlign:'center'}}>Don't have an account yet?  <Link to={'/signup'}>SignUp</Link></p>
    </form>
    </div>
    )
}



export default Login