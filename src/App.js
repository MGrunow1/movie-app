import { useState } from 'react';
import './App.css';
import Home from './components/Home';  // add to connect
import IntroductoryScreen from './components/IntroductoryScreen'; //add to connect

function App() {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div className="App">
      {// display the Home screen only once a search term is defined
      searchWord ? (
        <Home name={searchWord} />
      ) : (
        <IntroductoryScreen name={searchWord} setSearch={setSearchWord} />
      )}
    </div>
  );
}

export default App;
