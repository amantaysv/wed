import gis from '../../assets/images/2gis.png'
import table from '../../assets/images/table.jpg'
import s from './Location.module.scss'

export const Location = () => {
  return (
    <div className={s.root}>
      <div className={s.img}>
        <img src={table} alt='table' />
      </div>
      <h2 data-aos='fade-up'>location</h2>
      <p data-aos='fade-up' data-aos-delay='200' className={s.resto}>
        Bellagio Premium
      </p>

      <p data-aos='fade-up' data-aos-delay='200' className={s.street}>
        ул. Токтогула 125/1, 4 этаж
      </p>

      <a
        data-aos='fade-up'
        data-aos-delay='200'
        href='https://go.2gis.com/q50nl'
        rel='noopener noreferrer'
        target='_blank'
        className={s.gis}
      >
        <img src={gis} alt='' />
      </a>
    </div>
  )
}
