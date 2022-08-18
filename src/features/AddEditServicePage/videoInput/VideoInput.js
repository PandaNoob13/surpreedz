import { useRef, useState } from "react";

const VideoInput = (props) => {
    const { width, height } = props;

    const inputRef = useRef();
  
    const [source, setSource] = useState();
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setSource(url);
    };
  
    const handleChoose = (event) => {
      inputRef.current.click();
    };
  
    return (
      <div className="card">
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {!source && <button className="btn btn-light" onClick={handleChoose}>Upload Video (.mov or.mp4) </button>}
        {source && (
          <video
            className="VideoInput_video"
            width="100%"
            height={height}
            controls
            src={source}
          />
        )}
        <div className="VideoInput_footer">{source}</div>

      </div>
    );
  }

export default VideoInput
