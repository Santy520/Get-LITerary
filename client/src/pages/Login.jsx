import { Link } from 'react-router-dom';
function Login() {


    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <p>
                Do not have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>

    )
}

export default Login