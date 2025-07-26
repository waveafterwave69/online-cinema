import { useEffect, useState } from 'react'
import { test1 } from './data/test'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App: React.FC = () => {
    const [state, setState] = useState<any>()

    useEffect(() => {
        setState(test1())
        console.log(state)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await test1()
                setState(data)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <VideoPlayer />
        </>
    )
}

export default App
