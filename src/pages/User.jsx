import React from 'react'
import Home from './Home'

export default function User() {
    return (
        <main className='bg-gradient-to-t w-screen min-h-screen max-w-[400px] mx-auto flex flex-col bg-orange-500 to-orange-700'>
            <Home />

            <h1 className='p-7 m-3 text-3xl text-center'>Halaman Register</h1>

            <form action="" className='w-full bg-white p-6 flex flex-col gap-4 shadow-lg rounded-lg mt-2 hover:bg-green-300 group hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='group-hover:text-white'>Email</label>
                    <input type="email" id='email' name='email' className='h-10 px-3 bg-slate-100' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='group-hover:text-white'>Password</label>
                    <input type="password" id='password' name='password' className='h-10 px-3 bg-slate-100' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="confirm" className='group-hover:text-white'>Confirm Password</label>
                    <input type="password" id='confirm' name='confirm' className='h-10 px-3 bg-slate-100' />
                </div>

                <button type='submit' className='h-10 w-20 bg-blue-500 text-white rounded-md hover:bg-blue-700 group-hover:bg-yellow-500'>Register</button>

                <div className='flex w-full bg-slate-300 gap-2 p-2 mt-2'>
                    <div className='flex-[1] h-12 bg-green-500'>Remember Me</div>
                    <div className='flex-[1] h-12 bg-green-500'>Forgot Password?</div>
                    <div className='flex-[1] h-12 bg-green-500'>Box 3</div>
                </div>

            </form>

        </main>
    )
}
