import heart from '../../assets/images/heart.jpg'
import s from './DearGuests.module.scss'

export const DearGuests = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h2>Дорогие Гости!</h2>
        <p>
          Мы рады сообщить, что в нашей жизни состоится самое главное и торжественное событие -{' '}
          <br /> день нашей
        </p>
        <p>
          <i>свадьбы!</i>
        </p>
        <p>
          В этот особенный день мы хотим оказаться в окружении дорогих и близких нам людей, чтобы
          разделить трогательное событие <br /> вместе с вами!
        </p>
      </div>
      <img src={heart} alt='heart' />
    </div>
  )
}
