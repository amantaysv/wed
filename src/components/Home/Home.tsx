import { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { RiArrowDownWideFill } from 'react-icons/ri'
import sound from '../../assets/perdo.mp3'
import s from './Home.module.scss'
export const Home = () => {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  useEffect(() => {
    // audioRef.current?.play()
  }, [])

  return (
    <div
      className={s.home}
      onClick={() => {
        setPlaying(true)
        audioRef.current?.play()
      }}
    >
      <audio ref={audioRef} src={sound} loop autoPlay></audio>
      <div className={s.content}>
        <div className={s.playButton} onClick={toggleMusic}>
          <button>{playing ? <FaPause /> : <FaPlay />}</button>
          <div>
            {'чтобы выключить музыку нажмите '.split('').map((el, index) => (
              <span className={`char${index + 1}`}>{el}</span>
            ))}
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
