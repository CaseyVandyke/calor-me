import { useState } from 'react';
import axios from 'axios';
import '../styles/login.scss';

const Login = () => {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const registered = {
            fullName,
            userName,
            password,
            email
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data));
            window.location = '/';

    }

    return (
        <form onSubmit={handleSubmit} action="#" className="auth-container">
            <div className="form-group">
                <label htmlFor="fullName">
                    <input 
                    className="fullname form-control form-control-lg" 
                    type="text" id="fullname" 
                    value={fullName} 
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
                <label htmlFor="userName">
                    <input 
                    className="username form-control form-control-lg" 
                    type="text" 
                    id="username" 
                    value={userName} 
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

export default Login;