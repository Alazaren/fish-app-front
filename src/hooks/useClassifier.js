import { useState} from "react";
import axios from "axios";

const useVideos = (setLoadingStatus, setFileUploadProgress) => {

    const [result, setResult] = useState(null);


    const onUploadProgress = function(progressEvent) {
        let progress = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
        console.log(progress)
        setFileUploadProgress(progress);
    }
    //   
    const classify = async (file) => {
        var data = new FormData();
        data.append("image", file);
        const response = await axios({
            method: "post",
            url:"https://fish-classifier-jncz.onrender.com/predict",
            data: data,
            onUploadProgress: onUploadProgress,
            headers: { "Content-Type": "multipart/form-data" },
        });
        setResult(response.data);
        setLoadingStatus(0);
    };

    return [result, classify];
}

export default useVideos;