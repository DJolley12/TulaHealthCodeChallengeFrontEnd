import React, {useState} from 'react';
import FileUpload from "./FileUpload/FileUpload";
import DisplayData from "./DisplayData/DisplayData";
import './App.css';
import NavBar from './NavBar/NavBar';

function App() {
  const [fileUploadSelected, setFileUploadSelected] = useState(false);
  const [viewDataSelected, setViewDataSelected] = useState(true);

  function fileCallback(event) {
    setFileUploadSelected(event);  
  }
  
  function viewDataCallback(event) {
    setViewDataSelected(event);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar 
          fileUploadSelected={fileUploadSelected}
          fileCallback={fileCallback}
          viewDataSelected={viewDataSelected}
          viewDataCallback={viewDataCallback}
        />
        {fileUploadSelected && <FileUpload />}
        {viewDataSelected && <DisplayData />}

      </header>
    </div>
  );
}

export default App;
