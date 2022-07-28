import React from "react";


function Loader ({loadingStatus, fileUploadProgress}) {

    return (
        
       <div className="loader">
            {fileUploadProgress !== 0 && fileUploadProgress !== 100 &&
                <div>Завантажуємо файл {fileUploadProgress}%</div>
            }
            {loadingStatus === 1 &&
                <div className="container">Визначаємо <i class="spinner loading icon"></i></div>
            }     
            
        </div>
    )
    
}

export default Loader;