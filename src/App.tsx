import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Router } from './Router'

import './global.css'
import { AddressProvider } from './components/AddressProvider'

function App() {

  return (
    <AddressProvider>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </AddressProvider>
  )
}

export default App
