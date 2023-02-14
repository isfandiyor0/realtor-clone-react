import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
// import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		name: "",
	});
	const {email, password} = formData;
	function onChange(e) {
		setFormData((prevState)=>({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}
  return (
	<section>
		<h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
		<div 
			className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
			<div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
				<img className='w-full rounded-2xl'
				 src="https://images.unsplash.com/photo-1547866751-446296f133ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
			</div>
			<div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
				<form>
					<input 
						className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-out' 
						type="text" 
						// value={name}
						onChange={onChange} 
						id="name" 
						placeholder='Full Name'/>
					<input 
						className='w-full my-5 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-out' 
						type="email" 
						value={email} 
						onChange={onChange} 
						id="email" 
						placeholder='Email address'/>
					<div className='relative'>
						<input 
						className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-out' 
						type={showPassword ? "text" : "password"} 
						value={password} 
						onChange={onChange} 
						id="password" 
						placeholder='Password'/>

						{/* {showPassword ? (
						<AiFillEyeInvisible
							onClick={() => setShowPassword
							((prevState) => !prevState)} 				
							className='absolute text-xl cursor-pointer  right-3 top-15'/>
						) : (
						<AiFillEye 
							onClick={() => setShowPassword
							((prevState) => !prevState)} 
							className='absolute text-xl cursor-pointer right-5 top-15'/> 
						)} */}
						{showPassword ? (
						<p
							onClick={() => setShowPassword
							((prevState) => !prevState)} 				
							className='absolute right-2 mt-5 cursor-pointer '
						>	
							Hide Password</p>
						) : (
						<p
						onClick={() => setShowPassword
							((prevState) => !prevState)} 				
							className='absolute text-1xl right-2 mt-5 cursor-pointer '
						>
							Show Password
						</p> 
						)}
					</div>
					<div 
						className='mt-5 text-sm sm:text-lg'>
						<p>Have an account?
							<Link 
								className='text-red-600 hover:text-red-700 transition duration-200 easy-in-out ml-2'
								to="/sign-in">Sign Up
							</Link>
						</p>
					</div>
				{/* Submit section */}
				<button
					type='submit'
					className='mt-6 bg-blue-600 w-full text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
					>
					Sign Up
				</button>
				<div 
					className='flex items-center my-4 before:border-t  before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300'>
					<p className='text-center font-semibold mx-4'>OR</p>
				</div>
				<OAuth />
				</form>
			</div>
		</div>
	</section>
  )
}
