import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Navber from './components/Navber.jsx'

function App() {

  return (
    <>
      <div className='bg-black text-white font-mono'>
        <Routes>
          <Route path='/' element={<Header />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
