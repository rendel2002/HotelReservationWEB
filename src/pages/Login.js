import React, { useState } from 'react';
import logo from '../imgs/logo.png';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handlelogin() {
        const user = {
            email,
            password,
        };

        try {
            setLoading(true);
            const result = await axios.post('/api/users/login', user);

            if (result.data) {
                localStorage.setItem('currentUser', JSON.stringify(result.data));
                window.location.href = '/home';
            } else {
                setError('Invalid Credentials');
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Invalid Credentials');
        }
    }

    return (
        <div>
            {loading && <Loader />}
            {error && <Error message={error} />}
            <div className='row justify-content-center mt-5 col-xs-3'>
                <div className='col-md-3 col-xs-3'>
                    <img src={logo} className='mx-auto d-block w-90' />
                    <div>
                        <h1 className='text-center'>Login</h1>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            type='password'
                            className='form-control'
                            placeholder='password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button className='btn btn-warning mt-3' onClick={handlelogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}