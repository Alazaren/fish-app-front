import React , { useState, useEffect } from "react"

import Uploader from "./components/Uploader"
import Result from "./components/Result"
import useClassifier from "./hooks/useClassifier"
import Supportedspicies from "./components/Supportedspicies"
import RegionSelection from "./components/RegionSelection"

function App() {
  const [clasificationResult, setClassificationResult] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(0);
  const [imageRender, setImageRender] = useState(null);
  const [fileUploadProgress, setFileUploadProgress] = useState(0);

  const [result, clasify] = useClassifier(setLoadingStatus, setFileUploadProgress);

  const onFileChange = (event) => {
     const file = event.target.files[0];
     setImageRender(URL.createObjectURL(event.target.files[0]));
     setLoadingStatus(1)
     setClassificationResult(null)
     clasify(file);
  }
  
  useEffect(() => {
    setClassificationResult(result);
  }, [result]);
  
  return (
    
    <div>
      <div className="header">
        <div className="container">
          <div className="logo"><img src={process.env.PUBLIC_URL+"/img/logo.png"} alt="Logo"></img></div>
          <h1>Fish classifier</h1>
        </div>
      
      </div>
      <div className="content">
          <div className="container">
            <div className="region">
              <RegionSelection />
            </div>
          </div>
      </div>
      <div className="uploader">
          <div className="container">
          <Uploader onFileSelected={onFileChange} imageRender={imageRender} loadingStatus={loadingStatus} fileUploadProgress={fileUploadProgress}/>
          </div>
      </div>
    

      <div className="result">
        <div className="container">
            <Result  clasificationResult={clasificationResult}/>
        </div>
      </div>
          
    </div>

  );
}

export default App;



// <p>Альфа версія що підтримує наступні види: </p>
// <Supportedspicies />
// <p>Для коректної роботи на зображенні має бути один екземпляр риби, вид збоку.</p>
// <div className="container">
// 
// </div>