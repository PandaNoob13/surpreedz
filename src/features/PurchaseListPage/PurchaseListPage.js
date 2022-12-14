import "./PurchaseListPage.css"
import PurchasedCard from "../../shared/components/PurchasedCard/PurchasedCard"
import React, { useEffect } from "react";
import usePurchaseListPage from "./usePurchaseListPage";

const PurchaseListPage = () => {
	const {posts, onGetOrder, onGetVideoResult} = usePurchaseListPage();
		useEffect(() => {
			onGetOrder()
		}, [])
	return (
		<div className="bg-request-page h-100 min-vh-100" style={{marginTop: "3.5rem"}}>
		<div className="container d-flex p-3 flex-column">
			<div className="col-md-12 text-white ">
				<h3>Purchase List</h3>
			</div>
			<div className="col-md-12">
				<div className="hr"></div>
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
						return <PurchasedCard data={sentaccount} callback={(orderId) => onGetVideoResult(orderId)}/>
					})
					return orders
				}) : <h1>Empty Data</h1>}

			{/* <PurchaseCard/>
			<PurchaseCard/>
			<PurchaseCard/> */}
			
		</div>    
		</div>
  )
}

export default PurchaseListPage
