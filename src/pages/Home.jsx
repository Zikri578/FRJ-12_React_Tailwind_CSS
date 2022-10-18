import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        // <main className='w-screen h-screen flex flex-col justify-center items-center bg-green-500 max-w-[500px] mx-auto'>
        <main>
            <nav class="flex justify-center space-x-4">
                <Link to={'/user'} class="font-b px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-200 hover:text-slate-900">User</Link>
                <Link to={'/airlines'} class="font-b px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-200 hover:text-slate-900">Airlines</Link>
                <Link to={'/aircraft'} class="font-b px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-200 hover:text-slate-900">Aircraft</Link>
                <Link to={'/airport'} class="font-b px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-200 hover:text-slate-900">Airport</Link>
            </nav>
        </main>
    )
}
