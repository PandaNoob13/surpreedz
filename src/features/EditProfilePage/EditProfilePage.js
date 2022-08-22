import React from 'react'
import AccountCard from '../../shared/components/AccountCard/AccountCard'
import EditProfileCard from "../../shared/components/EditProfileCard/EditProfileCard"

function EditProfilePage() {
    return (
        <div className='text-white' style={{background: "#212121"}}>
            <div className='container vh-100 py-5'>
                <div className='row'>
                    <div className='col-md-4 p-2'>
                        <AccountCard />
                    </div>
                    <div className='col-md-8 p-2'>
                        <EditProfileCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage