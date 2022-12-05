import './App.css';
import Header from './components/Header.js';
import Followers from './components/Followers.js';
import Overview from './components/Overview.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import { useState } from "react";

export let theme;
export let setTheme;

function App() {

  [theme, setTheme] = useState("light");
  
  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <Header 
          title="Social Media Dashboard"
          subtitle="Total Followers: 23,004"
          />
          <Followers />
          <Overview />
        </div>
      </ThemeProvider>

  );
}

export default App;
