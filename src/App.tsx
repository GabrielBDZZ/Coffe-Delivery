import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Router } from './Router'

import './global.css'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  )
}

export default App