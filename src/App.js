import { useState } from 'react';
import './App.css';
import Home from './components/Home';  // add to connect
import IntroductoryScreen from './components/IntroductoryScreen'; //add to connect

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      {search ? (
        <Home name={search} />
      ) : (
        <IntroductoryScreen name={search} setSearch={setSearch} />
      )}
    </div>
  );
}

export default App;
