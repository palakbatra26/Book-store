import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Login from './Login'

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("SignUp Data: ", data);
    // Handle the sign-up logic here
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
              <h3 className="font-bold text-lg">SignUp</h3> <br />
              
              <div className="mt-1 space-y-4">
                <span>Name : </span>
                <br />
                <input 
                  type="text" 
                  placeholder="Enter Your Name" 
                  className="w-80 px-3 py-1 border rounded-md outline-none" 
                  {...register("name", { required: true })} 
                />
                <br />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>

              <div className="mt-1 space-y-4">
                <span>Email : </span>
                <br />
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-80 px-3 py-1 border rounded-md outline-none" 
                  {...register("email", { required: true })} 
                />
                <br />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>

              <div className="mt-1 space-y-4">
                <span>Password : </span>
                <br />
                <input 
                  type="password" 
                  placeholder="Enter Your Password" 
                  className="w-80 px-3 py-1 border rounded-md outline-none" 
                  {...register("password", { required: true })} 
                />
                <br />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>

              <div className="mt-5 space-y-4 flex justify-around">
                <button type="submit" className="btn btn-secondary rounded-md mt-3">SignUp</button>
              </div>
            </form>

            <div className="mt-5 space-y-4 flex justify-around">
              <p>
                Have an Account?{' '}
                <button className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
                  Login
                </button>
              </p>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
