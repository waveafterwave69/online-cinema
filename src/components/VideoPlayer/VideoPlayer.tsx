import { useEffect, useState } from 'react'

const VideoPlayer: React.FC = () => {
    const [scriptHtml, setScriptHtml] = useState<any>('')

    useEffect(() => {
        const dataUrl = window.location.href
        fetch(
            '//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=' +
                dataUrl
        )
            .then((res) => res.text())
            .then((data: any) => {
                const date: any = data.match(/<iframe.*<\/iframe>/gm)[1]
                setScriptHtml(date)
            })
    }, [])

    return (
        <div
            id="videoplayers"
            dangerouslySetInnerHTML={{ __html: scriptHtml }}
        />
    )
}

export default VideoPlayer
