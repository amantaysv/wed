import { useCountdown } from '../../hooks/useCountdown'
import s from './TimeLeft.module.scss'

export const TimeLeft = () => {
  const [days, hours, minutes, seconds] = useCountdown()

  return (
    <div className={s.root}>
      <div className={s.content}>
        <p>
          <i>До свадьбы осталось:</i>
        </p>
        <div className={s.counter}>
          <div>
            {days} <p>дней</p>
          </div>
          :
          <div>
            {hours} <p>часов</p>
          </div>
          :
          <div>
            {minutes} <p>минут</p>
          </div>
          :
          <div>
            {seconds} <p>секунд</p>
          </div>
        </div>
      </div>
    </div>
  )
}
