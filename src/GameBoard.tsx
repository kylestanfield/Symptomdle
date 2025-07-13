import React from 'react';

interface GameBoardProps {
  solution: string;
  guesses: string[];
  currentGuess: string;
  isHardMode: boolean;
}

const getGuessStatuses = (guess: string, solution: string): string[] => {
  const solutionChars = solution.split('');
  const guessChars = guess.split('');
  const statuses = Array(solution.length).fill('absent');

  // 1st pass: Find correct letters (green)
  guessChars.forEach((letter, i) => {
    if (solutionChars[i] === letter) {
      statuses[i] = 'correct';
      solutionChars[i] = ''; // Mark as used
    }
  });

  // 2nd pass: Find present letters (yellow)
  guessChars.forEach((letter, i) => {
    if (statuses[i] === 'correct') return;

    const indexOfPresentChar = solutionChars.indexOf(letter);
    if (indexOfPresentChar > -1) {
      statuses[i] = 'present';
      solutionChars[indexOfPresentChar] = ''; // Mark as used
    }
  });

  return statuses;
};

const GameBoard: React.FC<GameBoardProps> = ({ solution, guesses, currentGuess, isHardMode }) => {
  const totalRows = 6;
  const totalCols = solution.length;

  return (
    <div className="board" style={{ '--word-length': totalCols } as React.CSSProperties}>
      {Array.from({ length: totalRows * totalCols }).map((_, i) => {
        const rowIndex = Math.floor(i / totalCols);
        const colIndex = i % totalCols;

        let char = '';
        let tileClass = '';

        // Submitted guesses
        if (rowIndex < guesses.length) {
          const guess = guesses[rowIndex];
          char = guess[colIndex];
          if (isHardMode) {
            if (guess === solution) {
              tileClass = 'correct';
            }
          } else {
            const statuses = getGuessStatuses(guess, solution);
            tileClass = statuses[colIndex];
          }
        }
        // Current guess
        else if (rowIndex === guesses.length) {
          char = currentGuess[colIndex] || '';
        }

        return (
          <div key={i} className={`board-tile d-flex justify-content-center align-items-center ${tileClass}`}>
            <span>{char}</span>
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
