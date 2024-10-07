import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log("Login Data: ", data);
        // Close modal after successful submission
        document.getElementById("my_modal_3").close();
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>
                        
                        <h3 className="font-bold text-lg">Login</h3> <br />
                        
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
                            <span className="mt-1">Password : </span>
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
                            <button type="submit" className="btn btn-secondary rounded-md mt-3">Login</button>
                            <p>Not Registered? <Link to="/Signup" className="underline text-blue-500 cursor-pointer">SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
