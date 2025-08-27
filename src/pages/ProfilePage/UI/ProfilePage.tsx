import { ProfileContent } from '@/widgets/profile/UI'
import { useEffect } from 'react'

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
