import { useState} from "react";
import axios from "axios";

const useVideos = (setLoadingStatus) => {

    const [result, setResult] = useState(null);


    const classify = async (file) => {
        var data = new FormData();
        data.append("image", file);
        setLoadingStatus(1);
        const response = await axios({
            method: "post",
            url:"https://fishclassifier-h3t0.onrender.com/predict",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        });
        setResult(response.data);
        setLoadingStatus(0);
    };

    return [result, classify];
}

export default useVideos;