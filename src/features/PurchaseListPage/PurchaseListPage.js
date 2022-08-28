import "./PurchaseListPage.css"
import PurchaseCard from "../../shared/components/PurchasedCard/PurchasedCard"
import React, { useEffect } from "react";
import usePurchaseListPage from "./usePurchaseListPage";

const PurchaseListPage = () => {
	const {posts, onGetOrder} = usePurchaseListPage();
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
					console.log(data);
					if (data !== 0){
						return (<PurchaseCard data={data}/>)
					}
					return console.error();
				}) : <h1>Empty Data</h1>}

			{/* <PurchaseCard/>
			<PurchaseCard/>
			<PurchaseCard/> */}
			
		</div>    
		</div>
  )
}

export default PurchaseListPage
