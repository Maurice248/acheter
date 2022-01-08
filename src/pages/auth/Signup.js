import React, {useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'


function Signup() {

    const history = useHistory();
    const [registerInput, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        error_list:[],
    })

    const handleInput = (e) => {
        e.persist();
        setSignup({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }


        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/register', data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message);
                    history.push('/home');
                }else {
                    setSignup({...registerInput, error_list: res.data.validation_errors})
                }
            });
        });
    }

    return (
        <div className="login">
            <form className="forfor" onSubmit={registerSubmit}>
                <div className="con">
                    <h2>Signup</h2>
                    <div className="group">
                        <label htmlFor="name">Full Name: </label>
                        <input type="text" name="name" onChange={handleInput} value={registerInput.name} placeholder="name" />
                        <span className='spat'>{registerInput.error_list.name}</span>
                    </div>
                    <div className="group">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" onChange={handleInput} value={registerInput.email} placeholder="email" />
                        <span className='spat'>{registerInput.error_list.email}</span>
                    </div>
                    <div className="group">
                        <label htmlFor="password">Password: </label>
                        <input type="text" name="password" onChange={handleInput} value={registerInput.password} placeholder="password" />
                        <span className='spat'>{registerInput.error_list.password}</span>
                    </div>
                    <input type="submit" value="SIGNUP" />
                    <div className="signup">
                        <p>
                            Have an account already?
                            <Link to="/">
                                Login    
                            </Link> 
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup

