import download from '../../img/download.svg'
import styles from './VideoPlayer.module.css'
import useVideo from '../../hooks/useVideo'

interface VideoPlayerProps {
    width?: number
    height?: number
}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
    const { videoContainerRef, scriptLoaded } = useVideo()

    return (
        <>
            <section className={styles.video}>
                <p className={styles.title__error}>
                    {'К сожалению, видеоплеер временно не работает :('}
                </p>
                <div
                    className="uitools"
                    id="videoplayers"
                    ref={videoContainerRef}
                >
                    {!scriptLoaded?.current && (
                        <img src={download} className={styles.download} />
                    )}
                </div>
            </section>
        </>
    )
}

export default VideoPlayer
