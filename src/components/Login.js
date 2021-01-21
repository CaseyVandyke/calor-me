import { useState } from 'react';
import axios from 'axios';
import '../styles/login.scss';

const Login = () => {

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const login = {
            loginUsername,
            loginPassword
        }

        axios.post('http://localhost:4000/app/login', login)
            .then(response => console.log(response.data));
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="auth-container">
            <div className="form-group">
                <label htmlFor="loginUsername">
                    <input
                        className="login-username form-control form-control-lg"
                        type="text"
                        id="login-username"
                        value={loginUsername}
                        placeholder="Username"
                        onChange={e => setLoginUsername(e.target.value)}
                        required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="loginPassword">
                    <input
                        className="login-password form-control form-control-lg"
                        type="password"
                        id="login-password"
                        value={loginPassword}
                        placeholder="Password"
                        onChange={e => setLoginPassword(e.target.value)}
                        required />
                </label>
            </div>
            <button className="login-submit btn">Login</button>
        </form>
    );
}

export default Login;