import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Calendar } from './components/Calendar/Calendar'
import { DearGuests } from './components/DearGuests/DearGuests'
import { Home } from './components/Home/Home'

const App = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Home />
      <DearGuests />
      <Calendar />
    </>
  )
}

export default App
