import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useEffect, useState } from 'react';

const EditProfile = (props) => {
    const {picUrl, name, email, location, joinDate} = props.data;
    const [photoFile, setPhotoFile] = useState()
    const [source, setSource] = useState();
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPhotoFile(file)
        console.log('file => ', file);
        const url = URL.createObjectURL(file);
        setSource(url);
        console.log("source hbs change =",source);
    };
    useEffect(() => {
        console.log(photoFile);
    }, [photoFile])
    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body">
                <h5 className="card-title text-white mb-3">Edit Profile</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputFullName" className="form-label text-white">Name</label>
                        <input type="text" className="form-control" placeholder={name} id="inputFullName"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLocation" className="form-label text-white">Location</label>
                        <input type="text" className="form-control" placeholder={location} id="inputLocation"/>
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
                        {source && (
                            <img
                                width="20%"
                                src={source}
                            />
                        )}
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>        
    )
};

export default EditProfile;
