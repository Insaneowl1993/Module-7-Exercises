import { useState } from 'react'
import './App.css'
import { MoodProvider } from './components/MoodContext';
import MoodChanger from './components/MoodChanger';
import SpeechComponent from './components/SpeechComponent'
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import BitcoinRates from './components/BitcoinRates'; // If needed
import Profile from './components/Profile'; // If needed


const App = () => {
  const user = {
    name: 'Dale',
    bio: 'Software Dev, selling my position',
  };

  return (
    <ThemeProvider> {/* Provide theme context */}
      <MoodProvider> {/* Provide mood context */}
        <div>
        <Profile user={user} />
          <h1>Welcome to the Bitcoin Mood Tracker!</h1>
          <ThemeSwitcher /> {/* Theme toggler */}
          <MoodChanger /> {/* Component to change the mood */}
          <BitcoinRates /> {/* Display Bitcoin rates and current mood */}
          <SpeechComponent /> {/* Additional component, possibly utilizing the mood */}
        </div>
      </MoodProvider>
    </ThemeProvider>
  );
};


export default App;