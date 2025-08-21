import { useEffect } from 'react'
import ProfileContent from '../../components/ProfileComponents/ProfileContent/ProfileContent'

const ProfilePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ProfileContent />
        </>
    )
}

export default ProfilePage
