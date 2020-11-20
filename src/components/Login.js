import React, { useState } from 'react';
import '../styles/login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form action="#">
            <label for="username">
                <input type="text" id="username"/>
            </label>
            <label for="password">
                <input type="text" id="password"/>
            </label>
            <button className="login-submit">Submit</button>
        </form>
    )
}

export default Login;