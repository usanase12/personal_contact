import React from 'react'

function Create() {
  return (
    <div className="mx-auto max-w-md p-6 bg-gray-300 rounded-lg h-autom mt-4 mb-2">
    <h1 className="text-2xl font-bold mb-4">Add Contact</h1>
    <div className="grid gap-4">
  
      <label className="block">Full Name</label>
      <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
  
      <label className="block">Email</label>
      <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
  
      <label className="block">Phone</label>
      <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
  
      <label className="block">Location</label>
      <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
  
      <label className="block">Picture</label>
    <input type="file" accept="image/*" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
  
      <input type="submit" value="Create" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" />
    </div>
  </div>
  
  )
}

export default Create