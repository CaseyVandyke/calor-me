import { useState } from 'react';
import axios from 'axios';
import '../styles/register.scss';

const Register = () => {
    const [fullname, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const registered = {
            fullname,
            username,
            password,
            email
        }

        axios.post('http://localhost:4000/app/register', registered)
            .then(response => console.log(response.data));


    }

    return (
        <form onSubmit={handleSubmit} action="#" className="auth-container">
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
                        value={username}
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
                        value={password}
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