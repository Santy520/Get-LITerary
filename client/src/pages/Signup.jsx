import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
      });

      const [addUser, { error, data }] = useMutation(ADD_USER);
      
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };


    return (
        <div className="auth-container">
            <h2>Sign Up</h2>

            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (

            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" 
                    placeholder="Your Name"
                    name="name"
                    value={formState.name} 
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" 
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" 
                    name="password" 
                    placeholder="******"
                    value={formState.password}
                    onChange={handleChange}
                    required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            <p>
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
    );
}

export default Signup;