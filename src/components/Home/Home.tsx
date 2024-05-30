import { useEffect, useRef } from 'react'
import { RiArrowDownWideFill } from 'react-icons/ri'
import sound from '../../assets/capibara.mp3'
import s from './Home.module.scss'

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const onplay = () => audioRef?.current?.play()

  useEffect(() => {
    const audioElement = audioRef.current

    if (!audioElement) return

    audioElement.src = sound
    audioElement.muted = false

    audioElement.play()
  }, [])

  return (
    <div className={s.home}>
      <audio ref={audioRef} loop>
        123
      </audio>
      <div className={s.content}>
        <h1>Амантай - Мээрим</h1>
        <p>24/08/2024</p>
        <button onClick={onplay}>
          <RiArrowDownWideFill />
        </button>
      </div>
    </div>
  )
}
