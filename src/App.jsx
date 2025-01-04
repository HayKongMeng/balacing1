import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Example from './pages/Example'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/example' element={<Example/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
