import { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { RiArrowDownWideFill } from 'react-icons/ri'
import sound from '../../assets/pedro.mp3'
import s from './Home.module.scss'
export const Home = () => {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const text = `чтобы ${playing ? 'выключить' : 'включить'} музыку нажмите `

  const toggleMusic = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      handlePlay()
    }
  }

  const handlePlay = () => {
    setPlaying(true)
    audioRef.current?.play()
  }

  useEffect(() => {
    // audioRef.current?.play()
  }, [])

  return (
    <div className={s.home}>
      <audio ref={audioRef} src={sound} loop autoPlay></audio>
      <div className={s.content}>
        <div className={s.playButton} onClick={toggleMusic}>
          <button>{playing ? <FaPause /> : <FaPlay />}</button>
          <div>
            {text.split('').map((el, index) => {
              const angleOffset = -100
              const angleSpan = 360
              const numLetters = text.length
              const anglePerChar = angleSpan / numLetters
              const rotate = angleOffset + anglePerChar * index

              return (
                <span key={index} style={{ rotate: `${rotate}deg` }}>
                  {el}
                </span>
              )
            })}
          </div>
        </div>
        <h1>
          <i>Амантай - Мээрим</i>
        </h1>
        <p>
          <i>24/08/2024</i>
        </p>
        <button className={s.scrollDown}>
          <RiArrowDownWideFill />
        </button>
      </div>
    </div>
  )
}
