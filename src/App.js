import './App.css';
import { useAuth } from './hooks/useAuth';
import { PrivateApp } from './private-app';
import { PublicApp } from './public-app';

function App() {
  const [token] = useAuth(true);

  if (token) {
    return <PrivateApp />
  }

  return <PublicApp />
}

export default App;
