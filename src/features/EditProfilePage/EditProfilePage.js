import React, { useEffect, useState } from 'react'
import AccountCard from '../../shared/components/AccountCard/AccountCard'
import EditProfileCard from '../../shared/components/EditProfileCard/EditProfileCard'
import Loading from '../../shared/components/Loading/Loading'
import ProfileCard from '../../shared/components/ProfileCard/ProfileCard'
import useEditProfilePage from './useEditProfilePage'
// import useEditProfilePage from './useEditProfilePage'

const serviceCardData = () => {
    return {
        picUrl: window.localStorage.getItem('photo_profile'),
        name: window.localStorage.getItem('account_name'),
        email: window.localStorage.getItem('account_email'),
        location: window.localStorage.getItem('account_location'),
        joinDate: window.localStorage.getItem('account_join_date'),
        dataUrl: window.localStorage.getItem('photo_profile')
    }
}

function EditProfilePage() {
    const [trigger , setTrigger] = useState(false);
    const [data, setData] = useState(serviceCardData())
    const {isLoading} = useEditProfilePage()

    useEffect(() => {
        console.log("Trigger called");
        setData(serviceCardData())
    }, [trigger])
    useEffect(() => {
        console.log("Data changed");
    }, [data])
    return (
        <div className='text-white' style={{background: "#212121", marginTop: "3.5rem", minHeight:'100vh'}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4 p-2'>
                        <ProfileCard data={data} />
                        <AccountCard data={data}/>
                    </div>
                    <div className='col-md-8 p-2'>
                        <EditProfileCard data={data} callback={() => setTrigger(!trigger)}/>
                    </div>
                </div>
            </div>
            {isLoading ? <Loading/> : console.log(isLoading)}
        </div>
    )
}

export default EditProfilePage