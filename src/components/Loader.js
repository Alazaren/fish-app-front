import React from "react";


function Loader ({loadingStatus}) {
    const status = (loadingStatus === 1) ? 'Визначаємо...' : ''
    
    

    return (
        
       <div className="loader">
            <div className="container">{status}</div>
            <div className="container">Визначення може зайняти до 30 секунд.</div>
        </div>
    )
    
}

export default Loader;