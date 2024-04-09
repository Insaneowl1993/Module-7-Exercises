import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { tealTheme } from './themes/Theme';
import BasicUsage from './components/BasicUsage';

function App() {
  return (
    <ThemeProvider theme={tealTheme}>
      {/* Your app components go here */}
    </ThemeProvider>
  );
}

function BasicUsage() {
  return (
    <div>
      {/* other components */}
      <BasicUsage />
      {/* other components */}
    </div>
  );
}

export default App;