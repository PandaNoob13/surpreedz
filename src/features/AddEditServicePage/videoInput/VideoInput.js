import { useState } from "react";
import plus from './plus-square.svg'


const VideoInput = (props) => {
    const { width, height,num,videoNum} = props;
    const [videoFile, setVideoFile] = useState()
  
    const [source, setSource] = useState();
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setVideoFile(file)
      console.log('file => ', file);
      const url = URL.createObjectURL(file);
      setSource(url);
      console.log("source hbs change =",source);
    };

    // const handleUpload = () => {
    //   localStorage.setItem(`${videoNum}`,source);
    //   console.log(`${videoNum}`,source);
    // }

    const handleSubmitVideo = () => {
      props.onSubmitVideo(videoFile)
    }
  
    return (
      <div className="card d-flex flex-column justify-content-center" style={{minHeight:'300px'}}>
        <input
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
          name={videoNum}
          id={videoNum}
        />
        {source !== undefined ? 
         <label className="label-video-input" htmlFor={videoNum}><button className="btn btn-light">Change Video {num}</button></label> :
         <label className="label-video-input" htmlFor={videoNum}><img style={{width:'40px', height:'20px'}} src={plus} alt="plus" /><div>Video {num}</div></label>
         
         }

        {source && (
          <div>
          <br/>
          <video
            className="VideoInput_video"
            width="100%"
            height={height}
            controls
            src={source}
            onDurationChange={handleSubmitVideo}
          />
          </div>
        )}

      </div>
    );
  }

export default VideoInput
