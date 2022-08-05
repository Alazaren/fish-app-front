import React from "react";
import Loader from "./Loader"

function Uploader ({onFileSelected, imageRender, loadingStatus, fileUploadProgress, showImageRender}) {

    return (
       
        <div className="uploader">
            <form>
                <label className="file-label" for="file">
                <i class="cloud upload icon"></i> Фото одної риби
                </label> <br />
                <input onChange={onFileSelected} name="file" className="file" id="file" type="file"></input>
            </form>
            <div>
                <Loader loadingStatus={loadingStatus} fileUploadProgress={fileUploadProgress} />
            </div>
           {imageRender && showImageRender &&
                <div className="image-preview">
                    <img id="image-result" src={imageRender} alt="preview"  />
                </div>
            }
        </div>
    )
}

export default Uploader;