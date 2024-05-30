import { RiArrowDownWideFill } from 'react-icons/ri'
import s from './Home.module.scss'

export const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.content}>
        <h1>Амантай - Мээрим</h1>
        <p>24/08/2024</p>
        <button>
          <RiArrowDownWideFill />
        </button>
      </div>
    </div>
  )
}
