import React from 'react';
import './LoginRegister.css';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValuesLogin = {
    username: "",
    password: "",
}

const initialFormValuesRegister = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    availability: false,
    country: "",
}
const initialFormErrorsLogin = {
    username: "",
    password: "",
};
const initialFormErrorsRegister = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    availability: "",
    country: "",
};

export default function LoginRegister() {
    const [formValuesLogin, setFormValuesLogin] = useState(initialFormValuesLogin);
    const [formValuesRegister, setFormValuesRegister] = useState(initialFormValuesRegister);
    const [formErrorsLogin, setFormErrorsLogin] = useState(initialFormErrorsLogin);
    const [formErrorsRegister, setFormErrorsRegister] = useState(initialFormErrorsRegister);
    return (
        <div>
            <form id="loginForm">
                <div id="loginErrorsContainer">
                    <div>{formErrorsLogin.username}</div>
                    <div>{formErrorsLogin.password}</div>
                </div>
                <div id="loginInputContainer">
                    <input
                        value={formValuesLogin.username}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        value={formValuesLogin.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button type='submit'>Login</button>
                    <label><span>Register</span></label>
                </div>
            </form>
            <form id="registerForm">
                <div id="registerErrorsContainer">
                    <div>{formErrorsRegister.username}</div>
                    <div>{formErrorsRegister.email}</div>
                    <div>{formErrorsRegister.password}</div>
                    <div>{formErrorsRegister.confirmPassword}</div>
                    <div>{formErrorsRegister.role}</div>
                    <div>{formErrorsRegister.availability}</div>
                    <div>{formErrorsRegister.country}</div>
                </div>
                <div id="registerInputContainer">
                    <input
                        value={formValuesRegister.username}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        value={formValuesRegister.email}
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={formValuesRegister.password}
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <input
                        value={formValuesRegister.confirmPassword}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <div id="roleSelect">
                        <label>
                            Role
                        <select value={formValuesRegister.role} name="role">
                                <option value="">- Select an option -</option>
                                <option value="admin">Admin</option>
                                <option value="student">Student</option>
                                <option value="volunteer">Volunteer</option>
                            </select>
                        </label>
                    </div>
                    <div id="availabilityCheckbox">
                        <label>
                            Availability
                             <div id="dayCheckboxes">
                                <label>
                                    Monday
                                 <input
                                        name="monday"
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Tuesday
                                 <input
                                        name="tuesday"
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Wednesday
                                 <input
                                        name="wednesday"
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Thursday
                                 <input
                                        name="thursday"
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Friday
                                 <input
                                        name="friday"
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Saturday
                                 <input
                                        name="saturday"
                                        type="checkbox"
                                    />
                                </label>
                                <label>
                                    Sunday
                                 <input
                                        name="sunday"
                                        type="checkbox"
                                    />
                                </label>
                            </div>
                        </label>
                    </div>
                    <div id="countryInputContainer">
                        <label>
                            Country
                             <input
                                value={formValuesRegister.country}
                                name="country"
                                type="text"
                                placeholder="Enter Country"
                            />
                        </label>
                    </div>
                    <button type='submit'>Register</button>
                    <label>Already Member ? Sign In Now..</label>
                </div>
            </form>
        </div>
    )
}


