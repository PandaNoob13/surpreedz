import "./PurchaseListPage.css"
import PurchaseCard from "../../shared/components/PurchasedCard/PurchasedCard"

const PurchaseListPage = () => {
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

        <PurchaseCard/>
        <PurchaseCard/>
        <PurchaseCard/>
        
      </div>    
    </div>
  )
}

export default PurchaseListPage
