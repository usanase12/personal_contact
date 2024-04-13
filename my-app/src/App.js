import React from 'react'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  return (
    <div className='px-4 flex flex-col'>
      <div className='container'>

       <Header/>
      {/* <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<Table />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/update/:contId" element={<Update />}></Route> */}
          {/* <Route path="/details/:contactId" element={<More />}></Route>
          */}
        {/* </Routes>
      </BrowserRouter> */} 
      
  </div>
    <Footer/>
    </div>
  )
}

export default App