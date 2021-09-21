import preloader from "../../../assets/images/Spinner-0.8s-227px.svg";
import React from "react";

let Preloader: React.FC = () => {
    return <img src={preloader} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt={''}/>
}

export default Preloader;