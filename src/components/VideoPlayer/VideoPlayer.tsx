import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import download from '../../img/download.svg'
import styles from './VideoPlayer.module.css'
import { useSelector } from 'react-redux'

interface VideoPlayerProps {
    width?: number
    height?: number
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({}) => {
    const videoContainerRef = useRef<HTMLDivElement>(null)
    const scriptLoaded = useRef(false)
    // const { id } = useParams()
    const { id } = useSelector((state: any) => state.id)

    useEffect(() => {
        console.log('VideoPlayer rendered with kpId:', id)

        if (scriptLoaded.current) {
            return
        }

        scriptLoaded.current = true

        const dataUrl = window.location.href
        const script = document.createElement('script')
        const scriptUrl = new URL('https://js.espanplay.site/get_player')

        scriptUrl.searchParams.append('type', 'widget')
        scriptUrl.searchParams.append('kp_id', id || '')
        scriptUrl.searchParams.append('players', 'alloha')
        scriptUrl.searchParams.append('r_id', 'videoplayers')
        scriptUrl.searchParams.append('alni', 'ALLOHATV')
        scriptUrl.searchParams.append('alti', '')
        scriptUrl.searchParams.append('aldi', '')
        scriptUrl.searchParams.append('ru', dataUrl)

        script.src = scriptUrl.toString()
        script.async = true

        script.onload = () => {
            console.log('Скрипт плеера загружен.')
        }

        script.onerror = (error) => {
            console.error('Ошибка загрузки скрипта плеера!', error)
            scriptLoaded.current = false
        }

        document.head.appendChild(script)

        return () => {
            document.head.removeChild(script)
            scriptLoaded.current = false
        }
    }, [id])

    return (
        <section className={styles.video}>
            <div className="uitools" id="videoplayers" ref={videoContainerRef}>
                {!scriptLoaded.current && (
                    <img src={download} className={styles.download} />
                )}
            </div>
        </section>
    )
}

export default VideoPlayer
