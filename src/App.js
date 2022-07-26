import React , { useState, useEffect } from "react"
import Uploader from "./components/Uploader"
import Result from "./components/Result"
import useClassifier from "./hooks/useClassifier"
import Loader from "./components/Loader"
import Supportedspicies from "./components/Supportedspicies"

function App() {
  const [clasificationResult, setClassificationResult] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(0);

  const [result, clasify] = useClassifier(setLoadingStatus);

  const onFileChange = (event) => {
     const file = event.target.files[0];
     clasify(file);
  }
  
  useEffect(() => {
    setClassificationResult(result);
  }, [result]);
  
  return (
    
    <div>
      <div className="header">
        <div className="container">
          <h1>Визначник риби</h1>
          <p>Альфа версія що підтримує наступні види: </p>
          <Supportedspicies />
          <p>Для коректної роботи на зображенні має бути один екземпляр риби, вид збоку.</p>
        </div>
      
      </div>
      <div className="content">
        <div className="container">
        <Uploader onFileSelected={onFileChange} />
        </div>
      </div>
      
      <Loader loadingStatus={loadingStatus} />

      <div className="result">
        <div className="container">
            <Result  clasificationResult={clasificationResult}/>
        </div>
      </div>
          
    </div>

  );
}

export default App;
