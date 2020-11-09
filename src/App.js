import './App.css';
import { Maps, Nearby } from './components';
import { MyLocation } from './components';
import { CitiesProvider } from './contexts';

function App() {
  return (
    <CitiesProvider>
      <Maps />
      <MyLocation />
      <Nearby />
    </CitiesProvider>
  );
}

export default App;
