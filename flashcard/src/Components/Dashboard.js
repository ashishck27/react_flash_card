import React, { useState, useEffect } from 'react'; 
import './Style.css';

function Dashboard() {
    const [flashcards, setFlashcards] = useState(() => {
        const savedFlashcards = localStorage.getItem('flashcards');
        return savedFlashcards ? JSON.parse(savedFlashcards) : [];
      });
      const [question, setQuestion] = useState('');
      const [answer, setAnswer] = useState('');
    
      // Save flashcards to local storage whenever they change
      useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
      }, [flashcards]);
    
      const handleAdd = () => {
        const newFlashcards = [...flashcards, { question, answer }];
        setFlashcards(newFlashcards);
        setQuestion('');
        setAnswer('');
      };
    
      const handleDelete = (index) => {
        const newFlashcards = flashcards.filter((_, i) => i !== index);
        setFlashcards(newFlashcards);
      };

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleAdd}>Add Flashcard</button>

      <ul>
        {flashcards.map((fc, index) => (
          <li key={index}>
            {fc.question} - {fc.answer}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;