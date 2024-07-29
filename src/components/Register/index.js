import React ,{useState} from "react";
import Link from "next/link";
import "../Register/styles.css";
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://example.com/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to register');
        }
  
        const data = await response.json();
        setSuccess('Registration successful! Redirecting to login...');
        // Điều hướng người dùng đến trang đăng nhập sau 2 giây
        setTimeout(() => {
          router.push('/login');
        }, 2000);
        console.log('Registration successful:', data);
      } catch (error) {
        setError(error.message);
        console.error('Error registering user:', error);
      }
    };

    return (
        <>
        <Link href={'/'}>
            <div className='Home-button'>
            Home
            </div>
            </Link>
        <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link href="/login">Login here</Link></p>
    </div>
        </>
    )
}

export default Register;