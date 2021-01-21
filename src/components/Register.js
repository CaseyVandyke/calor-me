import { useState } from 'react';
import Axios from 'axios';
import '../styles/register.scss';

const Register = () => {
    const [fullname, setFullName] = useState('');
    const [registerUsername, setUserName] = useState('');
    const [registerPassword, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const register = (e) => {
        e.preventDefault();
        Axios({
            method: "POST",
            data: {
                fullname,
                email,
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/users/register",
        }).then((res) => console.log(res));
    };

    return (
        <form onSubmit={register} action="#" className="auth-container">
            <div className="form-group">
                <label htmlFor="fullname">
                    <input
                        className="fullname form-control form-control-lg"
                        type="text" id="fullname"
                        value={fullname}
                        placeholder="Fullname"
                        onChange={e => setFullName(e.target.value)}
                        required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    <input
                        className="email form-control form-control-lg"
                        type="text"
                        id="email"
                        value={email}
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                        required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="username">
                    <input
                        className="username form-control form-control-lg"
                        type="text"
                        id="username"
                        value={registerUsername}
                        placeholder="Username"
                        onChange={e => setUserName(e.target.value)}
                        required />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="password">
                    <input
                        className="password form-control form-control-lg"
                        type="password"
                        id="password"
                        value={registerPassword}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        required />
                </label>
            </div>
            <button className="login-submit btn">Submit</button>
        </form>
    )
}

export default Register;