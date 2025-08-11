import { useSelector } from 'react-redux'
import ProfileContent from '../../components/ProfileComponents/ProfileContent/ProfileContent'

const ProfilePage: React.FC = () => {
    const { profile }: any = useSelector((state) => state)
    console.log(profile)

    return (
        <>
            <ProfileContent profile={profile} />
        </>
    )
}

export default ProfilePage
