import React, { useState } from 'react'
import { useAuthStore } from "../../store/userAuthStore"

function SignupPage() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const { signup, isSigningUp } = useAuthStore()

    const validateForm = () => { }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='w-full h-screen'>
                <div class="contain py-16">
                    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                        <h2 class="text-2xl uppercase font-medium mb-1">Signup</h2>
                        <p class="text-gray-600 mb-6 text-sm">Welcome! So good to have you back!</p>
                        <form autocomplete="off">
                            <div class="space-y-2">
                                <div><label for="email" class="text-gray-600 mb-2 block"></label>Full Name<input type="text" name="fullName" id="fullName" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400" placeholder="Milan Sony"/>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div><label for="email" class="text-gray-600 mb-2 block"></label>Email address<input type="email" name="email" id="email" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400" placeholder="youremail.@domain.com"/>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div><label for="password" class="text-gray-600 mb-2 block"></label>Password<div class="relative"><input type="password" name="password" id="password" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400" placeholder="***********" />
                                    <div
                                        class="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <button type="submit" class="block w-full py-2 text-center text-white bg-custblue border border-custblue rounded hover:bg-transparent hover:text-custblue transition uppercase font-roboto font-medium">Login</button>
                                <div class="flex gap-2 pt-5">
                                    <p class="text-gray-600 text-sm">Don't have an account?</p><a class="text-custblue text-sm underline hover:text-gray-600"
                                        href="/register">Register here</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignupPage
