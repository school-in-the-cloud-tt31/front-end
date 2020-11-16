import React from 'react';
import './LoginRegister.css';

export default function LoginRegister() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}


