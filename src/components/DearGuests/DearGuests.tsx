import heart from '../../assets/images/heart.jpg'
import s from './DearGuests.module.scss'

export const DearGuests = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h2 data-aos='fade-up' data-aos-delay='0'>
          Дорогие Гости!
        </h2>
        <p data-aos='fade-up' data-aos-delay='200'>
          Мы рады сообщить, что в нашей жизни состоится самое главное и <br /> торжественное событие
          - <br /> день нашей
        </p>
        <p data-aos='fade-up' data-aos-delay='200'>
          <i>свадьбы!</i>
        </p>
        <p data-aos='fade-up' data-aos-delay='200'>
          В этот особенный день мы хотим оказаться в окружении дорогих и близких нам людей, чтобы
          разделить трогательное событие <br /> вместе с вами!
        </p>
      </div>
      <img data-aos='fade-up' data-aos-delay='200' src={heart} alt='heart' />
    </div>
  )
}
