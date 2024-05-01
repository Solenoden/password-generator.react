import React from 'react';
import './App.scss';
import PasswordGeneratorPage from './components/password-generator-page/PasswordGeneratorPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordGeneratorPage />
      </header>
    </div>
  );
}

export default App;
