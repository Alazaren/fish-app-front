import React from "react";

function Uploader ({onFileSelected}) {

    return (
        <div className="selection">
            <form>
                <label for="file">Виберіть зображення риби:</label> <br />
                <input onChange={onFileSelected} name="file" className="file" id="file" type="file"></input>
            </form>
        </div>
    )
}

export default Uploader;