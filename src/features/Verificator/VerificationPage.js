import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import MenuCRUD from "./menu_crud";
// import { LinkContainer } from "react-router-bootstrap";


export default function VerificatonPage () {
    const { showAll, deleteMenu } = MenuCRUD();
    const [currentMenus, setCurrentMenus] = useState([])

    const onGetMenu = async () => {
        // this.props.onShowLoading(true);
        try {
            const response = await showAll();
            // this.props.onShowLoading(false);
            setCurrentMenus(
                [...response]
            )
        } catch (e) {
            // this.props.onShowError(e.message);
        }
    }

    useEffect(() => {
        onGetMenu()
    })

    const handleDelete = async (id) => {
        const result = window.confirm('Are you sure want to delete ?');
        // this.props.onShowLoading(true);
        if (result) {
            try {
                await deleteMenu(id);
                // this.props.onShowLoading(false);
                await onGetMenu()
            } catch (error) {
                // this.props.onShowError(false);
            }
        }
    }

    return (
        <div className='text-white min-vh-100' style={{backgroundColor: "#212121", paddingTop: "3.5rem"}}>
            <div className="container p-3">
                {/* <div className="d-flex justify-content-between">
                    <h3>Menus</h3>
                    <LinkContainer to={'/main/menus/new'}>
                        <Button size="sm">
                            <FontAwesomeIcon icon={faAdd}/>
                            <span className={"p-2"}>Add Menu</span>
                        </Button>
                    </LinkContainer>
                </div> */}
                <div className="col-md-12 text-white " style={{paddingTop: "1.5rem"}}>
                    <h3>Verification Request List</h3>
                    <p>Manage your verification requested service</p>
                </div>
                <div className="col-md-12">
                    {/* <div className="hr"></div> */}
                    <br/>
                </div>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Account Name</th>
                            <th scope="col">Picture URL</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentMenus.map((menu, index) => {
                                return (
                                    <tr key={menu.menuId}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{menu.menuName}</td>
                                        <td>{menu.menuPrice.toLocaleString()}</td>
                                        <td style={{textAlign: "center"}}>
                                            <div className="d-flex justify-content-center gap-3">
                                                <Button size="sm" variant="success" onClick={() => handleDelete(menu.menuId)}>
                                                    <FontAwesomeIcon icon={faCheck}/>
                                                    <span className="p-2">Accept</span>
                                                </Button>
                                                <Button size="sm" variant="danger" onClick={() => handleDelete(menu.menuId)}>
                                                    <FontAwesomeIcon icon={faXmark}/>
                                                    <span className="p-2">Reject</span>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}