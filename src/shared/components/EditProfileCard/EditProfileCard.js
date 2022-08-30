import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Tab, TabPane } from 'react-bootstrap';
import EditProfile from './EditProfile';
import EditAccount from './EditAccount';
import EditSecurity from './EditSecurity';
import './EditProfileCard.css';

const EditProfileCard = (props) => {
    const serviceCardData = props.data


    return (
        <Card style={{borderRadius: "12px", borderColor: "#212121", backgroundColor:"#212121"}}>
            <Tab.Container defaultActiveKey="#profile">
                <Card.Header>
                    <Nav variant="tabs" style={{}}>
                        <Nav.Item>
                            <Nav.Link eventKey="#profile">Profile</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="#account">Account</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link eventKey="#security">Security</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Card.Header>
                <Card.Body style={{borderRadius: "12px", backgroundColor:"#373535"}}>
                    <Tab.Content>
                        <TabPane id="profile" aria-labelledby='profile-tab' eventKey={"#profile"}>
                            <EditProfile data={serviceCardData} callback={props.callback} />
                        </TabPane>
                        {/* <TabPane id="account" aria-labelledby='account-tab' eventKey={"#account"}>
                            <EditAccount />
                        </TabPane> */}
                        {/* <TabPane id="security" aria-labelledby='security-tab' eventKey={"#security"}>
                            <EditSecurity/>
                        </TabPane> */}
                    </Tab.Content>                    
                </Card.Body>
            </Tab.Container>
            
        </Card>
    )
};

export default EditProfileCard;
