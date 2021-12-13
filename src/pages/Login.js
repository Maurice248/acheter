import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom';


class Login extends React.Component {

    state={
        email:'',
        password:''
    }

    handleChange = e => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.isLogin(true)
    }

    render(){
        return (
            <div className="login">
            <form onSubmit={this.handleSubmit} className="forfor">
                <div className="con">
                    <h2>Login</h2>
                    <div className="group">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="email" placeholder="email" required onChange={this.handleChange} />
                    </div>
                    <div className="group">
                        <label htmlFor="password">Password: </label>
                        <input type="text" name="password" id="password" placeholder="password" required onChange={this.handleChange} />
                    </div>
                    <div className="tet">
                        <button>forgot password</button>
                    </div>
                    <input type="submit" value="LOGIN" />
                    <div className="signup">
                        <p>
                            Don't have an account? 
                            <Link to="#">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            </div>
        
        )
    }
}


export default Login
