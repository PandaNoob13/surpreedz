import loadingAnimation from "./loadingAnimation.json"
import "./loading.css"
import Lottie from "lottie-react"

const Loading = () => {
    console.log('loading called');
  return <div className="backdrop-container">
            <div className="backdrop-content">
                <Lottie animationData={loadingAnimation} loop={true} style={{width:'100px',height:'100px'}}></Lottie>
            </div>
         </div>
}

export default Loading
