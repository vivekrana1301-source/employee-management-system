import React from 'react';
import { useState } from 'react';

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  const submitHandle= (e) => {
    e.preventDefault()    
    handleLogin(email,password)
    setEmail('')
    setPassword('')

  }
  return (
    <>
    <div className="h-screen w-screen flex items-center justify-center">
      <div className=' border-2 border-emerald-300 p-20 rounded-lg'>
        <form
        onSubmit={(e)=>{
        
          
          submitHandle(e)
        }}
        className='flex flex-col gap-4 items-center justify-center' >
          
          <input required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)            
          }}
        
          
          className='text-white rounded-xl px-5 py-3  border-2 outline-none bg-transparent border-green-400 placeholder:text-gray-300' type='email' placeholder='Enter Email' />
          <input required
          value={password}
             onChange={(e)=>{
            setPassword(e.target.value)
          }}
       
          className='text-white rounded-xl  border-2 outline-none bg-transparent border-green-400 px-5 py-3 placeholder:text-gray-300' type='password' placeholder='Enter password'/>
          <button className=' font-semibold text-xl border-2 rounded-xl bg-green-500 px-8 py-2 mt-3  text-white'>Login</button>
        </form>
      </div>

    </div>
      
    </>
  );
}

export default Login;
