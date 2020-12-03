import React, { useState } from 'react';
import axios from "axios";
import "./file-upload.css";

function FileUpload() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [uploadSuccessfull, setUploadSuccessfull] = useState(false);

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);
        try {
            const res = await axios.post("http://localhost:5000/api/file", formData);
            console.log("response");
            console.log(res.status);
            if (res.status === 201) {
                setUploadSuccessfull(true);
            }
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <input id="choose-file" type="file" onChange={saveFile} />
            </div>
            <div className="row">
                <input id="upload-button" type="button" value="Upload" onClick={uploadFile} />
            </div>
            {uploadSuccessfull && 
            <div className="row">Upload Successful</div>}
        </div>
    );
}

export default FileUpload;