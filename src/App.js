import './App.css';
import React, {useState} from 'react'

import Buttercup360 from './videos/buttercup360p.mp4'
import Buttercup720 from './videos/buttercup720p.mp4'


function App() {
  const [src, setSrc] = useState(Buttercup360)

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsFilePicked(true)
  }

  const handleSubmission = () => {
	};

  let Buttercup = {
    path: src,
    type: 'video/mp4'
  }

  return (
    <div className="App">
      <div>
        <input type="file" name="file" onChange={changeHandler}/>
        <button onClick={handleSubmission}>Submit</button>
        {isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
      </div>

      <header className="App-header">
        <video  controls width="50%">
          <source src={Buttercup.path} type={Buttercup.type} />
        </video>
      </header>
    </div>
  );
}

export default App;
