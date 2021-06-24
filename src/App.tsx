import { Routes } from './routes';
import { AuthContextProvider } from './contexts/AuthContext';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Routes />

      <GlobalStyle />
    </AuthContextProvider>
  );
};

export default App;
