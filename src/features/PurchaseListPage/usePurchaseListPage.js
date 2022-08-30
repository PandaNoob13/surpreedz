import { post } from "jquery";
import { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";
import { triggerBase64Download } from 'react-base64-downloader';

function usePurchaseListPage() {
    const {purchaseListService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([]);
    const [video, setVideo] = useState('');
    useEffect(() => { 
        if (posts.length !== 0 ){
            console.log("Done set posts : ", posts);
        }
    }, [posts])
    useEffect(() => {
        if (video !== '') {
            const blob = b64toBlob(video.data_url, 'video/mp4');
            const blobUrl = URL.createObjectURL(blob);
            var tempLink = document.createElement('a');
            tempLink.href = blobUrl;
            tempLink.setAttribute('download', `${video.video_link}`);
            tempLink.click();
        }
    }, [video])

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
      
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
      
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
      
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    const onGetOrder = async () => {
        setLoading(true);
        console.log("On Get Order Service Called");
        try {
            const response = await purchaseListService.getService()
            console.log('Response: ', response);
            setPosts(response.data)
            setIsError(false)
        } catch (error) {
            setPosts(error)
            console.log(error);
        }finally{
            setLoading(false)
        }
    }
    const onGetVideoResult = async (orderId) => {
        console.log("On get video result called");
        try {
            const response = await purchaseListService.getVideoResult(orderId)
            console.log('Response: ', response);
            const data = response.data
            setVideo(data)
            setIsError(false)
        } catch (error) {
            setPosts(error)
            console.log(error);
        } finally {}
    }

    return {
        posts, onGetOrder, onGetVideoResult,isLoading
    }
}

export default usePurchaseListPage