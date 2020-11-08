import './App.css';
import { Maps, Nearby, Search } from './components';
import { CitiesProvider } from './contexts';

function App() {
  return (
    <CitiesProvider>
      <Maps />
      <Nearby />
    </CitiesProvider>
  );
}

export default App;
