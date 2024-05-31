import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Calendar } from './components/Calendar/Calendar'
import { DearGuests } from './components/DearGuests/DearGuests'
import { Home } from './components/Home/Home'
import { Location } from './components/Location/Location'

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
      <Location />
    </>
  )
}

export default App
