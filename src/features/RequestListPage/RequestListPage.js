import { useEffect, useState } from "react";
import RequestCard from "./RequestCard/RequestCard";
import "./RequestListPage.css"
import useRequestListService from "./UseRequestListPage";

const RequestListPage = () => {
  const {posts, onGetService} = useRequestListService();
  const [trigger, setTrigger] = useState(false)
  const triggerChange = () => {
    setTimeout(() => {
        setTrigger(!trigger)
        console.log("Trigger change called");
    }, 500);
  }
  useEffect(() => {
    onGetService()
    console.log("Use effect called");
  }, [trigger])
  return (
    <div className="bg-request-page h-100 min-vh-100" style={{marginTop: "3.5rem"}}>
        <div className="container d-flex flex-column ">
            <div className="col-md-12 text-white ">
                <h3>Request List</h3>
            </div>
            <div className="col-md-12">
                <div className="hr"></div>
                <br/>
            </div>
            {posts ? posts.map((account) => {   
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
                        orderRequest: order.OrderRequest
                    }
                    return <RequestCard data={sentaccount} callback={triggerChange}/>
                })
                return orders
            }) : <h1>Empty request</h1>}        
        </div>
    </div>
    
  )
}

export default RequestListPage;
