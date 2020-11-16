import React from 'react';
import './LoginRegister.css';

export default function LoginRegister() {
    return (
        <div>
            <form id="loginForm">
                <div>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <button type='submit'>Login</button>
                    <label><span>Register</span></label>
                </div>
            </form>
            <form id='registerForm'>
                <div>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.confirmPassword}</div>
                    <div>{errors.role}</div>
                    <div>{errors.availability}</div>
                    <div>{errors.country}</div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <div>
                        <label>
                            Role
                        <select>
                                <option value="">- Select an option -</option>
                                <option value="admin">Admin</option>
                                <option value="student">Student</option>
                                <option value="volunteer">Volunteer</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Availability
                             <div>
                                <label>
                                    Monday
                                 <input
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Tuesday
                                 <input
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Wednesday
                                 <input
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Thursday
                                 <input
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Friday
                                 <input
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Saturday
                                 <input
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Sunday
                                 <input
                                        type="checkbox"
                                    />
                                </label>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Country
                             <input
                                type="text"
                                placeholder="Enter Country"
                            />
                        </label>
                    </div>
                    <button type='submit'>Register</button>
                    <label for='form-switch'>Already Member ? Sign In Now..</label>
                </div>
            </form>
        </div>
    )
}


