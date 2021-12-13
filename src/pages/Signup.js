import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom';


function Signup() {
    return (
        <div className="login">
            <form className="forfor">
                <div className="con">
                    <h2>Signup</h2>
                    <div className="group">
                        <label htmlFor="Fname">First Name: </label>
                        <input type="text" name="Fname" id="Fname" placeholder="First Name" required />
                    </div>
                    <div className="group">
                        <label htmlFor="Lname">Last Name: </label>
                        <input type="text" name="Lname" id="Lname" placeholder="Last Name" required />
                    </div>
                    <div className="group">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="email" placeholder="email" required />
                    </div>
                    <div className="group">
                        <label htmlFor="Mnumber">Mobile Number: </label>
                        <input type="text" name="Mnumber" id="Mnumber" placeholder="Mobile Number" required />
                    </div>
                    <div className="group">
                        <label htmlFor="Address">Address: </label>
                        <input type="text" name="Address" id="Address" placeholder="Address" required />
                    </div>
                    <div className="group">
                        <label htmlFor="password">Password: </label>
                        <input type="text" name="password" id="password" placeholder="password" required />
                    </div>
                    <input type="submit" value="SIGNUP" />
                    <div className="signup">
                        <p>
                            Have an account already?
                            <Link to="#">
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

