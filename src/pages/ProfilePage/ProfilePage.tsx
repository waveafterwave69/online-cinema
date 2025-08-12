import { useSelector } from 'react-redux'
import ProfileContent from '../../components/ProfileComponents/ProfileContent/ProfileContent'
import { useEffect } from 'react'

const ProfilePage: React.FC = () => {
    const { profile }: any = useSelector((state) => state)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ProfileContent profile={profile} />
        </>
    )
}

export default ProfilePage
