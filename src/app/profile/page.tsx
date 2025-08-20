const ProfilePage = () => {
    return (
        <div className="profile">
            <h1>Welcome to my ProfilePage</h1>
        </div>
    )
}

'use client'
import {useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import axios from "axios"

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const loginAccount = async ({ email, password }: {email: string, password: string}) =>{
        const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password }, {headers: {"Content-type": "application/json"}})
        localStorage.setItem("Token", response.data.token);
        return response.data
    }

    const registerAccount = async ({name, email, password}: {name: string, email: string, password: string}) =>{
        const response = await axios.post('http://127.0.0.1:8000/api/register', {name, email, password}, {headers :{"Content-type": "application/json"}}) 
        return response.data
    }
    
    const { mutate, isError, isSuccess, isPending } = useMutation({
        mutationFn: loginAccount,
        onSuccess: (data) => {
            console.log('Login Successful:', data);
        },
        onError: (error) => {
            console.error('Login Failed:', error);
        }
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleLoginAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(loginForm);
    }

    return(
        <div className='container'>
            <h1>welcome to loginpage</h1>
            <form onSubmit={handleLoginAccount}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' value={loginForm.email} onChange={handleInputChange} required></input>
                </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={loginForm.password} onChange={handleInputChange} required></input>
            </div>
            <button type='submit' disabled={isPending}>
                {isPending ? 'Logging in...' : 'Login'}
            </button>
            {isError && <p style={{color: 'red'}}>Login Failed</p>}
            {isSuccess && <p style={{color: 'green'}}>Login Successful</p>}
            </form>
        </div>
    )
}

export default LoginPage