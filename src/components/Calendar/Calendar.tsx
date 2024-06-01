import cn from 'classnames'
import { PiHeartThin } from 'react-icons/pi'
import s from './Calendar.module.scss'

export const Calendar = () => {
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  const days = new Array(31).fill(null)
  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.week}>суббота</div>
        <div className={s.date}>
          <p>24</p>
          <p>08</p>
          <p>24</p>
        </div>
        <div className={s.time}>17:00</div>
      </div>

      <div className={s.calendarDate}>
        август <span></span> 2024
      </div>

      <div className={cn(s.calendar, s.calendarWeekDays)}>
        {weekDays.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>

      <div className={s.calendar}>
        <div></div>
        <div></div>
        <div></div>
        {days.map((_, index) => {
          if (index === 23) {
            return (
              <div key={index}>
                {index + 1}
                <span className={s.heartIcon}>
                  <PiHeartThin />
                </span>
              </div>
            )
          }

          return <div key={index}>{index + 1}</div>
        })}
        <div></div>
      </div>
    </div>
  )
}
