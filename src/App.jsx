import React, { useState } from 'react'
import {Routes, Route} from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='relative h-full w-full'>
        <div className="absolute inset-0 -z-10 min-h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/create' element= {<CreatePage />} />
          <Route path='/note/:id' element= {<NoteDetailPage />} />
        </Routes>
      </div>
        
    

  )
}

export default App
