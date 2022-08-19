import { useRef, useState } from "react";
import {plus} from './plus-square.svg'


const VideoInput = (props) => {
    const { width, height,num } = props;

    const inputRef = useRef();

    // console.log('useRef => ', useRef());
  
    const [source, setSource] = useState();
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setSource(url);
      console.log("source hbs change =",source);
    };
  
    const handleChoose = (event) => {
      inputRef.current.click();
      console.log("source hbs choose=",source);
    };

    // const handleCancel = () => {
    //   console.log("source sblm cancel=",source);
    //   setSource();
    //   console.log("source hbs cancel =",source);
    // }
  
    return (
      <div className="card d-flex flex-column justify-content-center" style={{minHeight:'300px'}}>
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {!source && <button className="btn" style={{fontFamily:'SF Pro Display', fontWeight:'bold'}} onClick={handleChoose}><img src="plus" alt="" /><br/>Video {num}
        </button>}
        {source && (
          <div>
          <video
            className="VideoInput_video"
            width="100%"
            height={height}
            controls
            src={source}
          />
          </div>
        )}

      </div>
    );
  }

export default VideoInput
