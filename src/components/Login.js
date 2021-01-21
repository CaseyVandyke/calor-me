import { useState } from 'react';
import Axios from 'axios';
import '../styles/login.scss';

const Login = () => {

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [data, setData] = useState(null);

    const login = (e) => {
        e.preventDefault();
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/users/login",
        }).then((res) => console.log(res));
    };


    const getUser = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/users/user",
        }).then((res) => {
            setData(res.data);
        });
    };

    return (
        <form onSubmit={login} action="#" className="auth-container">
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
            <button onClick={getUser} className="login-submit btn">Login</button>
            {data ? <h1>Welcome Back {data.username}</h1> : null}
        </form>
    );
}

export default Login;