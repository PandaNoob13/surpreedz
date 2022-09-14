import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';

const AccountCard = (props) => {
    console.log("Account card service data : ", props.data);
    const {picUrl, name, email, location, joinDate} = props.data;

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body text-white">
                <h5 className="card-title">Account Information</h5>
                <div className="mt-3">
                    {/* <p className="card-text mb-0"><small>Username</small></p>
                    <p className="card-text">{username}</p> */}
                    <p className="card-text mb-0"><small>Email</small></p>
                    <p className="card-text">{email}</p>
                </div>
                {/* <p className="card-text text-center"><small className="text-muted">{name}</small></p> */}
            </div>
        </div>
    )
};

export default AccountCard;
