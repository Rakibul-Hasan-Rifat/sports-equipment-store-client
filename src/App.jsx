import { useContext } from 'react'
import './App.css'
import { AuthContext } from './providers/AuthProvider'

function App() {

  const authInformation = useContext(AuthContext)
  console.log('auth info', authInformation);

  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
