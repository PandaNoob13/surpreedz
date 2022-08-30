// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from 'react';
// import { event } from 'jquery';
import useEditProfilePage from '../../../features/EditProfilePage/useEditProfilePage';
import Loading from '../Loading/Loading';

const EditProfile = (props) => {
    const {picUrl, name, email, location, joinDate} = props.data;
    const [changeName, setChangeName] = useState(name)
    const [changeLocation,setChangeLocation] = useState(location);
    const [data, setData] = useState({})
    const [isLoad, setIsLoad] = useState(true)
    const {onPutProfile, isLoading} = useEditProfilePage();


    useEffect(() => {
        if (Object.keys(data).length != 0) {
            console.log("Data : ", data);
        }
    }, [data])
    useEffect(() => {

    }, [isLoad])

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Type of file ", typeof file);
        console.log('file => ', file);
        const url = URL.createObjectURL(file);
        console.log("File name : ", file.name);
        var result = ''
        let reader = new FileReader();
        if (data) {
            reader.readAsDataURL(file);
            reader.onload = function() {
                console.log("Data read : ", reader.result);
                result = reader.result
                console.log("READER RESULT : ", result);
                setData({
                    photoFile: file,
                    photoName: file.name,
                    photoUrl: url,
                    dataUrl: result
                })
            };
            reader.onerror = function() {
                console.log(reader.error);
            };
        }
    };

    const handleChangeName = async (event) => {
        setChangeName(event.target.value)
        console.log('changeName', changeName);
    }

    const handleChangeLocation = async (event) => {
        setChangeLocation(event.target.value)
        console.log('changeLocation', changeLocation);

    }

    const handleSubmitEditProfile = async (event) => {
        event.preventDefault()
        console.log('changeName1', changeName);
        console.log('changeLocation2', changeLocation);
        onPutProfile(changeName,changeLocation, data.photoFile, data.photoName, data.photoUrl, data.dataUrl);
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
                    <div className="mb-3">
                        <label htmlFor="inputLanguage" className="form-label text-white">Photo Profile</label><br/>
                        <input 
                            type="file"
                            onChange={handleFileChange}
                            accept=".png,.jpg"
                        />                    
                    </div>
                    <div className='mb-3'>
                        {data.photoUrl && (
                            <img
                                width="20%"
                                src={data.photoUrl}
                                alt= ""
                            />
                        )}
                    </div>

                    <button type="submit" className="btn btn-success" onClick={handleSubmitEditProfile}>Submit</button>
                </form>
            </div>
            {/* {isLoading ? <Loading/> : console.log(isLoading)} */}

        </div>        
    )
};

export default EditProfile;
