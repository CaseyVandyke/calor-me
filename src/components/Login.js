import { useState } from 'react';
import '../styles/login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

    }

    return (
        <form onSubmit={handleSubmit} action="#">
            <label for="username">
                <input type="text" id="username" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label for="password">
                <input type="text" id="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <button className="login-submit">Submit</button>
        </form>
    )
}

export default Login;