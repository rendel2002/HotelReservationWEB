import React, {useState} from 'react'
import logo from '../imgs/logo.png'
import axios from 'axios'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Sucess from '../components/Sucess';

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] =useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const [success, setSuccess] = useState ()

    async function handleregister(){
       if(password==cpassword){
        const user ={
            name,
            email,
            password,
            cpassword
        }
        try {
            setLoading(true)
            const result = await axios.post('/api/users/register', user).data
            setLoading(false)
            setSuccess(true)

            setName ('')
            setEmail ('')
            setPassword('')
            setcPassword('')

        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
            
        }
       } else{
        alert('passwords not matched')
       }
    }

  return (
    <div>
        {loading && (<Loader/>)}
        {error && (<Error/>)}
        {success && (<Sucess message='Registration Sucess'/>)}
        <div className='row justify-content-center mt-5 ' >
            <div className='col-md-3 '>
                <img src={logo} className=' mx-auto d-block  w-90'/>
                <div >
                    <h1 className='text-center'>Register</h1>
                    <input type='text' className='form-control' placeholder='name'
                    value={name} onChange={(e) => {setName(e.target.value)}}
                    />
                    <input type='text' className='form-control' placeholder='email'
                    value={email} onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <input type='password' className='form-control' placeholder='password'
                    value={password} onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <input type='password' className='form-control' placeholder='confirm password'
                    value={cpassword} onChange={(e) => {setcPassword(e.target.value)}}
                    />
                    <button className='btn btn-warning mt-3' onClick={handleregister}>Register</button>
                </div>

            </div>
        </div>
    </div>
  )
}
