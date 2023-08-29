import React from 'react'
import Home from './pages/Home'
import Announcement from './components/Announcement'
import Slider from './components/Slider'

const App = () => {
  return (
    <div>
      <Announcement />
      <Home />
      <Slider />
    </div>
  )
}

export default App