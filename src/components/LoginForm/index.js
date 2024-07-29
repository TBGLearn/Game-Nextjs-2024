
import React , {useState} from 'react';
import "../LoginForm/styles.css";
import Link from 'next/link';
const LoginFrom = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Xử lý đăng nhập người dùng tại đây (Gửi dữ liệu đến API)
      console.log('Logging in user:', { email, password });
    };
    return (
       <>
       <Link href={'/'}>
            <div className='Home-button'>
            Home
            </div>
            </Link>
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link href="/register">Register here</Link></p>
            </div>
       </>
    );
    }

export default LoginFrom;