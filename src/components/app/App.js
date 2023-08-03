import './App.css';
import React from 'react'

import Upload from '../upload/upload'

// import Buttercup360 from '../../videos/buttercup360p.mp4'
import Buttercup720 from '../../videos/buttercup720p.mp4'


function App() {

    let Buttercup = {
        path: Buttercup720,
        type: 'video/mp4'
    }

    return (
        <div className="App">
            <Upload/>

            <header className="App-header">
                <video  controls width="50%">
                    <source src={Buttercup.path}/>

                </video>

            </header>

        </div>
    );
}

export default App;
