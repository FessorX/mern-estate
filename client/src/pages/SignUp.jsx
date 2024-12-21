import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  console.log(formData);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      setError();
      const res = await fetch("/api/auth/signup", {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        setError(data.message);
        setLoading(false);
      }
      setLoading(false);
      navigate('/signin');
      
    } catch (error) {
      setLoading(false);
      setError(data.message);
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} id="username" className="border p-3 rounded-lg" type="text" placeholder='username'/>
        <input onChange={handleChange}  id="email" className="border p-3 rounded-lg" type="email"placeholder='email' />
        <input onChange={handleChange}  id="password" className="border p-3 rounded-lg" type="password" placeholder='password'/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "loading . . ." : "sign up"}
        </button>
      </form>
      <p className='text-red-700'>{error}</p>
      <div className='flex gap-2 mt-5'>
        <p>Have an account? </p>
        <Link className='text-blue-700 hover:underline' to="/signin">Sign In</Link>
      </div>
    </div>
  )
}
