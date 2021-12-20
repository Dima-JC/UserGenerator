import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.scss';



function App() {
  const [appState, setAppState] = useState();

  useEffect(() => {
    const apiUrl = 'https://randomuser.me/api/';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

  console.log(appState);
  

  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
    </div>
  );
}

export default App;
