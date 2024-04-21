import { useState } from "react";

const videos = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoNames = Object.keys(videos);
const Vedio = ({ele}) => {
return(
    <video style ={{width: 200, height:200}}loop controls autostart="true" autoPlay muted src={ele} />
)
}
const Menu = ({ name, onSelectVedio }) => {
    return (
        <>
        <form onClick={(e)=> onSelectVedio(e.target.value) }>
        {/* < > */}
            {name.map((ele ,i)=><div><input type="radio" name="abc" key ={i} value={ele} /> {ele}</div>)}
        </form>
        </>
    )
}
const VedioPlayer = () => {
    const [vediosrc, setvediosrc] = useState(videos.spider);
    const onSelectVedio = (vedio) => {
        setvediosrc(videos[vedio]);
    }
    return (
        <div>
            <Menu name={videoNames} onSelectVedio={onSelectVedio} />
            <Vedio ele={vediosrc} />
        </div>
    )
}

export default VedioPlayer;