import React, { useState } from 'react';
import { IntlProvider } from "react-intl";

import { Route, Routes } from 'react-router-dom';
import RoutLogin from './components/routLogin';
import { PrivateRoute } from './PrivateRoute';
import UserInfo from './components/UserInfo';
import Container from './components/container';
import { LOCALES } from "./intl/locales";
import { messages } from './intl/messages';
import TitlesData from './components/TitlesData';

import './App.scss';

const App: React.FC = () => {
  const defaultLanguage: Record<string, string> = {
    value: LOCALES.ENGLISH
  }

  const [localeLanguage, setLocaleLanguage] = useState<any>(defaultLanguage);

  return (
    <IntlProvider
      messages={messages[localeLanguage.value]}
      locale={localeLanguage.value}
    >
      <Routes>
        <Route path='/login' element={
          <RoutLogin />
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
