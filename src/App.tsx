import React, { useState, useEffect, useCallback } from 'react';
import { GearFill, BarChartFill } from 'react-bootstrap-icons';
import './App.css';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';
import Toast from './Toast';
import SettingsModal from './SettingsModal';
import StatsModal from './StatsModal';
import { DISEASES, Disease } from './gamedata';

interface Stats {
  gamesPlayed: number;
  wins: number;
  currentStreak: number;
  maxStreak: number;
}

interface GameState {
  solution: Disease;
  guesses: string[];
  revealedSymptoms: string[];
  isGameOver: boolean;
}

const App: React.FC = () => {
  const [solution, setSolution] = useState<Disease>({ name: '', symptoms: [] });
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [revealedSymptoms, setRevealedSymptoms] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isHardMode, setIsHardMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [stats, setStats] = useState<Stats>(() => {
    const savedStats = localStorage.getItem('symptomdle-stats');
    return savedStats ? JSON.parse(savedStats) : { gamesPlayed: 0, wins: 0, currentStreak: 0, maxStreak: 0 };
  });

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const newSolution = DISEASES[dayOfYear % DISEASES.length];

    const savedGame = localStorage.getItem('symptomdle-game');
    if (savedGame) {
      const { solution: savedSolution, guesses: savedGuesses, revealedSymptoms: savedRevealed, isGameOver: savedIsGameOver } = JSON.parse(savedGame);
      if (savedSolution.name === newSolution.name) {
        setSolution(savedSolution);
        setGuesses(savedGuesses);
        setRevealedSymptoms(savedRevealed);
        setIsGameOver(savedIsGameOver);
        return;
      }
    }

    setSolution(newSolution);
    setRevealedSymptoms([newSolution.symptoms[0]]);
    setGuesses([]);
    setIsGameOver(false);
  }, []);

  useEffect(() => {
    if (solution.name) {
      const gameState: GameState = {
        solution,
        guesses,
        revealedSymptoms,
        isGameOver,
      };
      localStorage.setItem('symptomdle-game', JSON.stringify(gameState));
    }
  }, [solution, guesses, revealedSymptoms, isGameOver]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const updateStats = useCallback((didWin: boolean) => {
    setStats(prevStats => {
      const newStats = {
        gamesPlayed: prevStats.gamesPlayed + 1,
        wins: didWin ? prevStats.wins + 1 : prevStats.wins,
        currentStreak: didWin ? prevStats.currentStreak + 1 : 0,
        maxStreak: didWin ? Math.max(prevStats.maxStreak, prevStats.currentStreak + 1) : prevStats.maxStreak,
      };
      localStorage.setItem('symptomdle-stats', JSON.stringify(newStats));
      return newStats;
    });
  }, []);

  const handleChar = useCallback((char: string) => {
    if (isGameOver || currentGuess.length >= solution.name.length) return;
    setCurrentGuess(prev => prev + char);
  }, [currentGuess, solution.name.length, isGameOver]);

  const handleDelete = useCallback(() => {
    if (isGameOver) return;
    setCurrentGuess(prev => prev.slice(0, -1));
  }, [isGameOver]);

  const handleEnter = useCallback(() => {
    if (isGameOver || currentGuess.length !== solution.name.length || guesses.length >= 6) {
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);

    if (currentGuess === solution.name) {
      showToast('You win!');
      updateStats(true);
      setIsGameOver(true);
      setShowStats(true);
    } else {
      if (newGuesses.length < 6) {
        setRevealedSymptoms(prev => [...prev, solution.symptoms[prev.length]]);
      } else {
        showToast(`You lost! The disease was ${solution.name}`);
        updateStats(false);
        setIsGameOver(true);
      }
    }
    setCurrentGuess('');
  }, [currentGuess, guesses, solution, updateStats, isGameOver]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleEnter();
      } else if (event.key === 'Backspace') {
        handleDelete();
      } else if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        handleChar(event.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleChar, handleDelete, handleEnter]);

  return (
    <div className="App">
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
      <SettingsModal show={showSettings} onHide={() => setShowSettings(false)} isHardMode={isHardMode} setIsHardMode={setIsHardMode} />
      <StatsModal show={showStats} onHide={() => setShowStats(false)} stats={stats} />
      
      <header className="App-header">
        <h1 className="title">Symptomdle</h1>
        <div className="header-buttons">
          <button className="header-btn" onClick={() => setShowStats(true)}>
            <BarChartFill size={24} />
          </button>
          <button className="header-btn" onClick={() => setShowSettings(true)}>
            <GearFill size={24} />
          </button>
        </div>
      </header>

      <div className="main-content">
        <div className="game-container">
          {solution.name && <GameBoard solution={solution.name} guesses={guesses} currentGuess={currentGuess} isHardMode={isHardMode} />}
          <Keyboard onChar={handleChar} onDelete={handleDelete} onEnter={handleEnter} isGameOver={isGameOver} />
        </div>
        <div className="symptoms-container">
          <h2>Symptoms</h2>
          <ul className="symptoms-list">
            {revealedSymptoms.map((symptom, i) => (
              <li key={i}>{symptom}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;