import React from 'react';
import { Button } from 'react-bootstrap';

interface KeyboardProps {
  onChar: (char: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  isGameOver: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({ onChar, onDelete, onEnter, isGameOver }) => {
  const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  ];

  return (
    <div className="keyboard">
      <div>
        {keys.slice(0, 10).map((key) => (
          <Button key={key} variant="outline-dark" className="m-1" onClick={() => onChar(key)} disabled={isGameOver}>{key}</Button>
        ))}
      </div>
      <div>
        {keys.slice(10, 19).map((key) => (
          <Button key={key} variant="outline-dark" className="m-1" onClick={() => onChar(key)} disabled={isGameOver}>{key}</Button>
        ))}
      </div>
      <div>
        <Button variant="outline-dark" className="m-1" onClick={onEnter} disabled={isGameOver}>Enter</Button>
        {keys.slice(19).map((key) => (
          <Button key={key} variant="outline-dark" className="m-1" onClick={() => onChar(key)} disabled={isGameOver}>{key}</Button>
        ))}
        <Button variant="outline-dark" className="m-1" onClick={onDelete} disabled={isGameOver}>Delete</Button>
      </div>
    </div>
  );
};

export default Keyboard;
