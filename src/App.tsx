import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './App.scss';
// import { dataSelector } from './redux/selectors';

function App() {
  const [appState, setAppState] = useState();
  // const selector = useSelector((state: any) => state.receivedData)

  useEffect(() => {
    const apiUrl = 'https://randomuser.me/api/';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

  console.log(appState);
  
  
  // console.log(selector);
  
  
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
    </div>
  );
}

export default App;
