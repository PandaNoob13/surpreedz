import AccountCard from '../../shared/components/AccountCard/AccountCard'
import EditProfileCard from '../../shared/components/EditProfileCard/EditProfileCard'
import ProfileCard from '../../shared/components/ProfileCard/ProfileCard'

const serviceCardData = () => {
    return {
        picUrl: window.localStorage.getItem('photo_profile'),
        name: window.localStorage.getItem('account_name'),
        email: window.localStorage.getItem('account_email'),
        location: window.localStorage.getItem('account_location'),
        joinDate: window.localStorage.getItem('account_join_date')
    }
}

function EditProfilePage() {
    return (
        <div className='text-white' style={{background: "#212121", marginTop: "3.5rem", minHeight:'100vh'}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4 p-2'>
                        <ProfileCard data={serviceCardData()}/>
                        <AccountCard data={serviceCardData()}/>
                    </div>
                    <div className='col-md-8 p-2'>
                        <EditProfileCard data={serviceCardData()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage