import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './component/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard'
import Admin from './component/admin/Admin'
import History from './component/history/History'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <Sidebar/>
     <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/history' element={<History/>} />
     </Routes>
    </div>
  )
}

export default App
