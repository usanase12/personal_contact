import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <form>
        <h1 className='mb-4 mt-8 font-bold text-1xl'>Add Contact</h1>
        <label>Full name</label><br></br>
        <input type="text" placeholder='Enter your names' className='w-96 h-12 border-2 pl-2'
          onChange={e => setFullName(e.target.value)}></input><br></br>


        <label>Email</label><br></br>
        <input type="text" placeholder='Enter your E-mail' className='w-96 h-12 border-2 pl-2'
          onChange={e => setEmail(e.target.value)}></input><br></br>

        <label>Phone</label><br></br>
        <input type="text" placeholder='Enter your Phone number' className='w-96 h-12 border-2 pl-2'
          onChange={e => setPhone(e.target.value)}></input><br></br>
        <label for="picture" >Picture</label><br></br>
        <input type="file" id="picture" name="picture" accept="image/*" className='w-96 h-12 border-2 pl-2'
          onChange={e => setPhone(e.target.value)}></input><br></br>

    
        <button className='w-96 h-12 border-2 mt-4 bg-black text-white' onClick={addContact}>Create</button>
      </form>
    </div>
  )
}

export default Home