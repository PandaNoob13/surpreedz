// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from 'react';
// import { event } from 'jquery';
import useEditProfilePage from '../../../features/EditProfilePage/useEditProfilePage';

const EditProfile = (props) => {
    const {picUrl, name, email, location, joinDate} = props.data;
    const [changeName, setChangeName] = useState(name)
    const [changeLocation,setChangeLocation] = useState(location);

    const {onPutProfile} = useEditProfilePage();

    const handleChangeName = async (event) => {
        setChangeName(event.target.value)
        console.log('changeName', changeName);
    }

    const handleChangeLocation = async (event) => {
        setChangeLocation(event.target.value)
        console.log('changeLocation', changeLocation);

    }

    const handleSubbmitEditProfile = async (event) => {
        event.preventDefault()
        console.log('changeName1', changeName);
        console.log('changeLocation2', changeLocation);
        onPutProfile(changeName,changeLocation);
        alert(`profile has already change`)
    }

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body">
                <h5 className="card-title text-white mb-3">Edit Profile</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputFullName" className="form-label text-white">Name</label>
                        <input type="text" className="form-control" onChange={handleChangeName} value={changeName} id="inputFullName"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLocation" className="form-label text-white">Location</label>
                        <input type="text" className="form-control" onChange={handleChangeLocation} value={changeLocation} id="inputLocation"/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="inputLanguage" className="form-label text-white">Language</label>
                        <input type="text" className="form-control" placeholder="Indonesian, English" id="inputLanguage"/>
                    </div> */}
                    <button type="submit" className="btn btn-success" onClick={handleSubbmitEditProfile}>Submit</button>
                </form>
            </div>
        </div>        
    )
};

export default EditProfile;
