import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
    );
}

export default Signup;
