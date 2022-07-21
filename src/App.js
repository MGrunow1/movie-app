import { useState } from 'react';
import './App.css';
import { ThemeProvider } from "./contexts/ThemeContext"; // add context
import Home from './components/Home';  // add to connect
import IntroductoryScreen from './components/IntroductoryScreen'; //add to connect
import LightDarkToggle from './components/LightDarkToggle';

function App() {
  const [searchWord, setSearchWord] = useState("");
  return (
    <ThemeProvider>
      <div className="App">
        <LightDarkToggle />
        {// display the Home screen only once a search term is defined
        searchWord ? (
          <Home name={searchWord} />
        ) : (
          <IntroductoryScreen name={searchWord} setSearch={setSearchWord} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
