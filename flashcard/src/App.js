import React from 'react';
import './App.css';
import FlashcardView from './Components/FlashcardView';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <FlashcardView />
      <Dashboard />
    </div>
  );
}

export default App;