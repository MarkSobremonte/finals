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
        const response = await axios.post('http://127.0.0.1:8000/api/register', {name, email, password, password_confirmation:password}, {headers :{"Content-type": "application/json"}}) 
        return response.data
    }
    
    const loginMutation = useMutation({
        mutationFn: loginAccount,
        onSuccess: (data) => {
            console.log('Login Successful:', data);
        },
        onError: (error) => {
            console.error('Login Failed:', error);
        }
     })

    const registerMutation = useMutation({
        mutationFn: registerAccount,
        onSuccess: (data) => {
            console.log('Registration Successfuly:', data);
        },
        onError: (error) => {
            console.error('Registration Failed:', error);

            
        }
    })

    const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm(prev =>({
            ...prev, [name]: value
        }))
    }
    
    const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm(prev =>({
            ...prev, [name]: value
        }))
    }

    const handleLoginSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        loginMutation.mutate(loginForm)
    }
    
    const handleRegisterSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (registerForm.password !== registerForm.confirmPassword) {
            alert("Password not matching po");
        }
        registerMutation.mutate({name: registerForm.name, email:  registerForm.email, password: registerForm.password});
    }

    return(
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            <div className='bg-white rounded-2xls shadow-2xl w-full max-w-md p-8'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-600 rounded-lg p-1'>
                        {isLogin ? 'Hai Hello' : 'Creaate Account'}
                    </h1>
                    <p className='text-gray-600'>
                        {isLogin ? 'Sing in your account': 'Sign up for bagong account'}
                    </p>
                </div>
                {/* Toggle bottons*/}
                <div className='flex mb-6 bg-gray-100 rounded-lg p-1'>
                    <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 px-4 rounded-mb text-sm font-medium transition-all ${isLogin ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}>Register</button>
                </div>
                {/* LoginForm */}
                {isLogin ? (
                    <form onSubmit={handleLoginSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                Email Address
                            </label>
                            <input type='email' id='email' name='email' value={loginForm.email} onChange={handleLoginInputChange} className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-color'></input>
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                                Password
                            </label>
                            <input type='password' id='password' name='password' value={loginForm.password} onChange={handleLoginInputChange} required className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors '/>                   
                        </div>
                        <button type='submit' disabled={loginMutation.isPending} className='w-full bg-blue-600 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center'>
                            {loginMutation.isPending ? (
                                <>
                                    <svg className='animate-spin -m1-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                        <circle className='opacity-25' cx="12" cy="12" r="10" stroke='currentColor' strokeWidth='4'></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938A7.962 7.962 0 016 17.291z"></path>
                                    </svg>
                                    Signing in napo
                                </>
                            ): null}
                                'Sign In'
                        </button>
                    </form>
                ): null}
                {/* Register Form */}
                {!isLogin ? (
                    <form onSubmit={handleRegisterSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="reg-name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name po
                            </label>
                            <input type="text" id="reg-name" name="name" value={registerForm.name} onChange={handleRegisterInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Enter your full name"/>
                        </div>
                        <div>
                            <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-2">
                                dito po Email Address
                            </label>
                            <input type="email" id="reg-email" name="email" value={registerForm.email} onChange={handleRegisterInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Enter your email"/>
                        </div>
                        <div>
                            <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input type="password" id="reg-password" name="password" value={registerForm.password} onChange={handleRegisterInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Create a password"/>
                        </div>
                        <div>
                            <label htmlFor="reg-confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <input type="password" id="reg-confirm-password" name="confirmPassword"  value={registerForm.confirmPassword} onChange={handleRegisterInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"  placeholder="Confirm your password"/>
                        </div>
                        <button
                            type="submit" disabled={registerMutation.isPending} className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"> {registerMutation.isPending ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating account wait mo lang
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </button>
                        {/* Status Messages */}
                        {registerMutation.isError && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-red-800 text-sm">Registration failed Please try again</p>
                            </div>
                        )}
                        {registerMutation.isSuccess && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <p className="text-green-800 text-sm">Account created successfully Please sign in</p>
                            </div>
                        )}
                    </form>
                ) : null}
                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        {isLogin ? "Don't have an account create na " : "Already have an account wag ng gumawa "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage