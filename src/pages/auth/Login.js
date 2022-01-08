import  React from 'react'
import {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import axios from 'axios';


function Login () {

    const [loginInput, setLogin] = useState({
        email:'',
        password:'',
    })

    // handleChange = e => {
    //     const {name,value} = e.target
    //     this.setState({[name]:value})
    // }
    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.isLogin(true)
    // }

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name] : e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.post(`api/login`, data).then(res => {

        });
    }


        return (
            <div className="login">
            <form onSubmit={loginSubmit} className="forfor">
                <div className="con">
                    <h2>Login</h2>
                    <div className="group">
                        <label htmlFor="email">Email: </label>
                        {/* <input type="text" name="email" placeholder="email" required onChange={this.handleChange} /> */}
                        <input type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder="email" />
                    </div>
                    <div className="group">
                        <label htmlFor="password">Password: </label>
                        {/* <input type="text" name="password" placeholder="password" required onChange={this.handleChange} /> */}
                        <input type="password" name="password" onChange={handleInput} value={loginInput.password} placeholder="password" />
                    </div>
                    <div className="tet">
                        <button>forgot password</button>
                    </div>
                    <Link to="/home">
                        <input type="submit" value="LOGIN" />
                    </Link>
                    <div className="signup">
                        <p>
                            Don't have an account? 
                            <Link to="/signup">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            </div>
        
        )
    }



export default Login
