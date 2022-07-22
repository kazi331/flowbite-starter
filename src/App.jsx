import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
    </div>
  )
}

export default App
