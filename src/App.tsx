import React from 'react';

import Container from './components/container';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import RoutLogin from './components/routLogin';

const App: React.FC = () => {

  return (
      <Routes>
        <Route path='/login' element={<RoutLogin/>}/>
        <Route path='/users' element={<Container/>}/>
      </Routes>
  );
}

export default App;
