import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div class="flex justify-center items-center h-screen">
  <div class="text-center">
    <h1 class="text-3xl font-bold mb-4">Welcome to your Contact</h1>

    <Link  to="/create">
    <button class="px-4 py-2 text-blue-500 underline hover:text-blue-600 focus:outline-none">Add New</button>
    </Link>
  </div>
</div>
  )
}

export default Home