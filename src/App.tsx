import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from "react-intl";

import Container from './components/Container';
import { messages } from './intl/messages';
import { languageSelector } from './redux/selectors';

const App: React.FC = () => {
  const localeLanguage = useSelector(languageSelector)

  return (
    <IntlProvider
      messages={messages[localeLanguage]}
      locale={localeLanguage}
    >
      <Container />
    </IntlProvider>
  );
}

export default App;
