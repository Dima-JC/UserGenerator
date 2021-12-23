import React, { useState } from 'react';
import { IntlProvider } from "react-intl";

import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { PrivateRoute } from './PrivateRoute';
import UserInfo from './components/UserInfo';
import Container from './components/Container';
import { LOCALES } from "./intl/locales";
import { messages } from './intl/messages';
import TitlesData from './components/TitlesData';
import { Language } from './interfaces';

const App: React.FC = () => {
  const defaultLanguage: Language = {
    value: LOCALES.ENGLISH
  }
  
  const [localeLanguage, setLocaleLanguage] = useState<Language>(defaultLanguage);

  return (
    <IntlProvider
      messages={messages[localeLanguage.value]}
      locale={localeLanguage.value}
    >
      <Routes>
        <Route path="/" element={
          <Navigate replace to="/login" />
        } />
        <Route path='/login' element={
          <Login />
        } />
        <Route path='/users' element={
          <PrivateRoute components={
            <Container
              setLocale={setLocaleLanguage}
              component={<TitlesData />}
            />}
          />}
        />
        <Route path='/user_info' element={
          <PrivateRoute components={
            <Container
              setLocale={setLocaleLanguage}
              component={<UserInfo />}
            />}
          />}
        />
      </Routes>
    </IntlProvider>
  );
}

export default App;
