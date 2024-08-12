import React, { useState, useEffect } from 'react';

function FlashcardView() {
  const [flashcards, setFlashcards] = useState(() => {
    const savedFlashcards = localStorage.getItem('flashcards');
    return savedFlashcards ? JSON.parse(savedFlashcards) : [];
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (flashcards.length === 0) return <div>No flashcards available.</div>;

  const flashcard = flashcards[currentIndex];

  return (
    <div>
      <div
        onClick={handleFlip}
        style={{
          cursor: 'pointer',
          padding: '20px',
          border: '1px solid black',
          width: '300px',
          margin: '20px auto',
        }}
      >
        {isFlipped ? flashcard.answer : flashcard.question}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default FlashcardView;