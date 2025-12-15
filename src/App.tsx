import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './assets/pages/LandingPage'
import UseProps from './assets/pages/UseProps'
import UseState from './assets/pages/UseState.jsx'
import UseEffect from './assets/pages/UseEffectHook'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/UseProps" element={<UseProps />} />
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App