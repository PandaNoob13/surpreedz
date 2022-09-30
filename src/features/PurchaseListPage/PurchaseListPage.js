import "./PurchaseListPage.css"
import PurchasedCard from "../../shared/components/PurchasedCard/PurchasedCard"
import React, { useEffect } from "react";
import usePurchaseListPage from "./usePurchaseListPage";
import Loading from "../../shared/components/Loading/Loading";
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"
import { Modal } from "react-bootstrap";

const PurchaseListPage = () => {
	const {posts, onGetOrder, onGetVideoResult, isLoading,onPlayVideo,base64Video,setBase64Video,modalVisible,setModalVisible} = usePurchaseListPage();
		useEffect(() => {
			onGetOrder()
		}, [])

		useEffect(()=>{
			if (modalVisible === false) {
				setBase64Video('')
			}
		},[modalVisible])
	return (
		<div className="bg-purchase-list-page h-100 min-vh-100" style={{paddingTop: "3.5rem"}}>
		<div className="container d-flex p-3 flex-column">
			<div className="col-md-12 text-white ">
				<h3>Purchase List</h3>
				<p>Brew some coffee while we prepare your purchased message</p>
			</div>
			<div className="col-md-12">
				{/* <div className="hr"></div> */}
				<br/>
			</div>
				{posts ? posts.map((data) => {
					const account = data.account
					const orders = account.Orders.map((order) => {
						const serviceDetail = account.ServiceDetail
						const servicePrice = serviceDetail.ServicePrices[serviceDetail.ServicePrices.length - 1]
						const orderStatus = order.OrderStatus[order.OrderStatus.length - 1]
						const sentaccount = {
							occasion: order.OrderRequest.occasion,
							name: account.AccountDetail.name,
							price: servicePrice.price,
							dueDate: order.due_date,
							status: orderStatus.order_status,
							orderId: order.id,
							orderRequest: order.OrderRequest,
							photoUrl: data.data_url
						}
						return <PurchasedCard data={sentaccount} callback={(orderId) => onGetVideoResult(orderId)} playVideo={(orderId) => onPlayVideo(orderId)} />
					})
					return orders
				}) : <h1>Empty Data</h1>}
			
			{isLoading ? <Loading/> : <></>}
			{
				modalVisible && base64Video != '' ? 
				<Modal
				show={modalVisible}
				onHide={() => setModalVisible(false)}
				>
					<Modal.Header closeButton className="text-white">
							<Modal.Title id="contained-modal-title-vcenter" className="">
								<div className="col-md-12 text-white">Your Video</div>
							</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<Player
						playsInline
						src={`data:video/mp4;base64,${base64Video}`}
						/>
					
					</Modal.Body>
	
				</Modal> : <></>
			}
			
		</div>    
		</div>
  )
}

export default PurchaseListPage
