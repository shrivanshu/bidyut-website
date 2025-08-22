import { useState, useEffect } from 'react';

interface PuzzlePiece {
  id: number;
  currentPosition: number;
  correctPosition: number;
  isEmpty: boolean;
}

interface MemoryCard {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const GRID_SIZE = 3; // 3x3 puzzle
const TOTAL_PIECES = GRID_SIZE * GRID_SIZE;

interface AssembleRobotProps {
  selectedGame?: string;
}

export default function AssembleRobot({ selectedGame = 'puzzle' }: AssembleRobotProps) {
  const renderGame = () => {
    switch (selectedGame) {
      case 'puzzle':
        return <PuzzleGame />;
      case 'memory':
        return <MemoryGame />;
      case 'builder':
        return <RobotBuilderGame />;
      case 'quiz':
        return <QuizGame />;
      default:
        return <PuzzleGame />;
    }
  };

  const getGameTitle = () => {
    switch (selectedGame) {
      case 'puzzle':
        return 'Robot Puzzle Game';
      case 'memory':
        return 'Memory Match Game';
      case 'builder':
        return 'Robot Builder Game';
      case 'quiz':
        return 'Robot Knowledge Quiz';
      default:
        return 'Robot Game';
    }
  };

  return (
    <div id="assemble-robot-section" className="w-full mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-black">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-[#000000] dark:text-white">Play & Learn: </span>
          <span className="text-[#0ACF83]">{getGameTitle()}</span>
        </h1>
      </div>

      {/* Game Area */}
<div className="w-full min-h-[500px] xl:min-h-[600px] rounded-3xl shadow-lg p-6 
    bg-blue-700/25 dark:bg-blue-900/20 backdrop-blur-xl border border-white/20">
        {renderGame()}
      </div>
    </div>
  )
}

// Puzzle Game Component
function PuzzleGame() {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    initializePuzzle();
  }, []);

  const initializePuzzle = () => {
    const initialPieces: PuzzlePiece[] = [];
    
    for (let i = 0; i < TOTAL_PIECES; i++) {
      initialPieces.push({
        id: i,
        currentPosition: i,
        correctPosition: i,
        isEmpty: i === TOTAL_PIECES - 1
      });
    }

    const shuffled = shufflePuzzle(initialPieces);
    setPieces(shuffled);
    setIsCompleted(false);
    setMoves(0);
  };

  const shufflePuzzle = (pieces: PuzzlePiece[]) => {
    const shuffled = [...pieces];
    
    for (let i = 0; i < 100; i++) {
      const emptyIndex = shuffled.findIndex(piece => piece.isEmpty);
      const validMoves = getValidMoves(emptyIndex);
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      
      [shuffled[emptyIndex], shuffled[randomMove]] = [shuffled[randomMove], shuffled[emptyIndex]];
      
      shuffled[emptyIndex].currentPosition = emptyIndex;
      shuffled[randomMove].currentPosition = randomMove;
    }
    
    return shuffled;
  };

  const getValidMoves = (emptyIndex: number) => {
    const validMoves = [];
    const row = Math.floor(emptyIndex / GRID_SIZE);
    const col = emptyIndex % GRID_SIZE;

    if (row > 0) validMoves.push(emptyIndex - GRID_SIZE);
    if (row < GRID_SIZE - 1) validMoves.push(emptyIndex + GRID_SIZE);
    if (col > 0) validMoves.push(emptyIndex - 1);
    if (col < GRID_SIZE - 1) validMoves.push(emptyIndex + 1);

    return validMoves;
  };

  const handlePieceClick = (clickedIndex: number) => {
    if (isCompleted) return;

    const emptyIndex = pieces.findIndex(piece => piece.isEmpty);
    const validMoves = getValidMoves(emptyIndex);

    if (validMoves.includes(clickedIndex)) {
      const newPieces = [...pieces];
      
      [newPieces[emptyIndex], newPieces[clickedIndex]] = [newPieces[clickedIndex], newPieces[emptyIndex]];
      
      newPieces[emptyIndex].currentPosition = emptyIndex;
      newPieces[clickedIndex].currentPosition = clickedIndex;
      
      setPieces(newPieces);
      setMoves(prev => prev + 1);

      const completed = newPieces.every(piece => 
        piece.isEmpty || piece.currentPosition === piece.correctPosition
      );
      setIsCompleted(completed);
    }
  };

  const getPieceStyle = (piece: PuzzlePiece) => {
    if (piece.isEmpty) return {};

    const row = Math.floor(piece.id / GRID_SIZE);
    const col = piece.id % GRID_SIZE;
    
    return {
      backgroundImage: `url('/media/Robot_hero.svg')`,
      backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
      backgroundPosition: `-${col * 100}% -${row * 100}%`,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="flex justify-center items-center space-x-6 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold">{moves}</div>
          <div className="text-sm">Moves</div>
        </div>
        <button
          onClick={() => setShowOriginal(!showOriginal)}
          className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
        >
          {showOriginal ? 'Hide' : 'Show'} Original
        </button>
        <button
          onClick={initializePuzzle}
          className="px-4 py-2 bg-white text-[#0ACF83] rounded-lg hover:bg-gray-100 transition-colors"
        >
          New Game
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {showOriginal && (
          <div className="flex-shrink-0">
            <h3 className="text-lg font-semibold text-center mb-4">Original Image</h3>
            <div className="w-48 h-48 border-4 border-white/30 rounded-lg overflow-hidden">
              <img src="/media/Robot_hero.svg" alt="Original Robot" className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        <div className="flex-shrink-0">
          <div className="grid grid-cols-3 gap-1 p-4 bg-white/10 rounded-2xl" style={{ width: '280px', height: '280px' }}>
            {pieces.map((piece, index) => (
              <div
                key={`${piece.id}-${index}`}
                className={`relative w-20 h-20 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  piece.isEmpty 
                    ? 'bg-transparent border-dashed border-white/30' 
                    : 'bg-white border-gray-300 hover:border-white hover:scale-105'
                }`}
                style={getPieceStyle(piece)}
                onClick={() => handlePieceClick(index)}
              >
                {piece.isEmpty && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/50 text-xs text-center">Empty</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isCompleted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-md mx-4">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-[#0ACF83] mb-4">Puzzle Completed!</h2>
            <p className="text-gray-600 mb-2">Great job! You solved it in {moves} moves!</p>
            <div className="flex space-x-4 justify-center mt-6">
              <button
                onClick={() => setIsCompleted(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={initializePuzzle}
                className="px-6 py-3 bg-[#0ACF83] text-white rounded-lg hover:bg-[#0ACF83]/90 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Memory Game Component
function MemoryGame() {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const robotImages = [
    '/media/robot03.svg',
    '/media/Cobot.svg',
    '/media/Robot_Details.svg',
    '/media/Robot_Fighting.svg',
    '/media/Robot_hero.svg',
    '/media/Cobot_true.svg'
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const gameCards: MemoryCard[] = [];
    const selectedImages = robotImages.slice(0, 6);
    
    selectedImages.forEach((image, index) => {
      gameCards.push(
        { id: index * 2, image, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, image, isFlipped: false, isMatched: false }
      );
    });

    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setIsCompleted(false);
  };

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (cards[cardId].isMatched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newFlippedCards;
      
      if (cards[first].image === cards[second].image) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ));
          setMatchedPairs(prev => prev + 1);
          setFlippedCards([]);
          
          if (matchedPairs + 1 === 6) {
            setIsCompleted(true);
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="flex justify-center items-center space-x-6 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold">{moves}</div>
          <div className="text-sm">Moves</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{matchedPairs}/6</div>
          <div className="text-sm">Pairs</div>
        </div>
        <button
          onClick={initializeGame}
          className="px-4 py-2 bg-white text-[#0ACF83] rounded-lg hover:bg-gray-100 transition-colors"
        >
          New Game
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-2xl">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-20 h-20 rounded-lg cursor-pointer transition-all duration-300 ${
              flippedCards.includes(index) || card.isMatched
                ? 'bg-white'
                : 'bg-white/20 hover:bg-white/30'
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="w-full h-full p-2 flex items-center justify-center">
              {flippedCards.includes(index) || card.isMatched ? (
                <img src={card.image} alt="Robot part" className="w-full h-full object-contain" />
              ) : (
                <div className="text-2xl">❓</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isCompleted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-md mx-4">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-3xl font-bold text-[#0ACF83] mb-4">Memory Master!</h2>
            <p className="text-gray-600 mb-2">Amazing! You matched all pairs in {moves} moves!</p>
            <div className="flex space-x-4 justify-center mt-6">
              <button
                onClick={() => setIsCompleted(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={initializeGame}
                className="px-6 py-3 bg-[#0ACF83] text-white rounded-lg hover:bg-[#0ACF83]/90 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Robot Builder Game Component
function RobotBuilderGame() {
  const [selectedParts, setSelectedParts] = useState<{[key: string]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const robotParts = {
    head: ['/media/robot03.svg', '/media/Cobot.svg'],
    body: ['/media/Robot_Details.svg', '/media/Cobot_true.svg'],
    arms: ['/media/Robot_Fighting.svg', '/media/Robot_hero.svg']
  };

  const handlePartSelect = (partType: string, partImage: string) => {
    setSelectedParts(prev => ({
      ...prev,
      [partType]: partImage
    }));

    if (Object.keys({...selectedParts, [partType]: partImage}).length === 3) {
      setIsCompleted(true);
    }
  };

  const resetBuilder = () => {
    setSelectedParts({});
    setIsCompleted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="flex justify-center items-center space-x-6 mb-6">
        <h3 className="text-xl font-bold">Build Your Robot!</h3>
        <button
          onClick={resetBuilder}
          className="px-4 py-2 bg-white text-[#0ACF83] rounded-lg hover:bg-gray-100 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Robot Display */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg mb-4">Your Robot</h4>
          <div className="w-48 h-64 bg-white/10 rounded-2xl p-4 flex flex-col items-center justify-center space-y-2">
            {selectedParts.head ? (
              <img src={selectedParts.head} alt="Head" className="w-16 h-16 object-contain" />
            ) : (
              <div className="w-16 h-16 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center text-xs">Head</div>
            )}
            {selectedParts.body ? (
              <img src={selectedParts.body} alt="Body" className="w-20 h-20 object-contain" />
            ) : (
              <div className="w-20 h-20 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center text-xs">Body</div>
            )}
            {selectedParts.arms ? (
              <img src={selectedParts.arms} alt="Arms" className="w-24 h-16 object-contain" />
            ) : (
              <div className="w-24 h-16 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center text-xs">Arms</div>
            )}
          </div>
        </div>

        {/* Part Selection */}
        <div className="flex flex-col space-y-4">
          {Object.entries(robotParts).map(([partType, parts]) => (
            <div key={partType} className="flex flex-col items-center">
              <h5 className="text-sm font-semibold mb-2 capitalize">{partType}</h5>
              <div className="flex space-x-2">
                {parts.map((part, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 p-2 rounded-lg cursor-pointer transition-all ${
                      selectedParts[partType] === part
                        ? 'bg-white border-2 border-yellow-400'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    onClick={() => handlePartSelect(partType, part)}
                  >
                    <img src={part} alt={`${partType} option`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isCompleted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-md mx-4">
            <div className="text-6xl mb-4">🔧</div>
            <h2 className="text-3xl font-bold text-[#0ACF83] mb-4">Robot Built!</h2>
            <p className="text-gray-600 mb-2">Awesome! You've built your own robot!</p>
            <div className="flex space-x-4 justify-center mt-6">
              <button
                onClick={() => setIsCompleted(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={resetBuilder}
                className="px-6 py-3 bg-[#0ACF83] text-white rounded-lg hover:bg-[#0ACF83]/90 transition-colors"
              >
                Build Another
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Quiz Game Component
function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the main part that controls a robot?",
      options: ["Battery", "Brain/CPU", "Wheels", "Camera"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What do robots use to move around?",
      options: ["Wings", "Fins", "Wheels or Legs", "Propellers"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What helps robots see their environment?",
      options: ["Speakers", "Cameras/Sensors", "Batteries", "Motors"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What gives robots the power to work?",
      options: ["Food", "Water", "Battery/Electricity", "Air"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "What can robots help humans with?",
      options: ["Dangerous tasks", "Repetitive work", "Exploration", "All of the above"],
      correctAnswer: 3
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setIsCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCompleted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="flex justify-center items-center space-x-6 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold">{currentQuestion + 1}/{questions.length}</div>
          <div className="text-sm">Question</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{score}</div>
          <div className="text-sm">Score</div>
        </div>
        <button
          onClick={resetQuiz}
          className="px-4 py-2 bg-white text-[#0ACF83] rounded-lg hover:bg-gray-100 transition-colors"
        >
          Restart
        </button>
      </div>

      <div className="max-w-2xl w-full bg-white/10 rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-6 text-center">
          {questions[currentQuestion].question}
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg text-left transition-all ${
                showResult
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-500 text-white'
                    : index === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-white/20'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              onClick={() => !showResult && handleAnswerSelect(index)}
              disabled={showResult}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-6 text-center">
            <p className="text-lg">
              {selectedAnswer === questions[currentQuestion].correctAnswer
                ? "🎉 Correct! Well done!"
                : "❌ Oops! Try again next time."}
            </p>
          </div>
        )}
      </div>

      {isCompleted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-md mx-4">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold text-[#0ACF83] mb-4">Quiz Complete!</h2>
            <p className="text-gray-600 mb-2">You scored {score} out of {questions.length}!</p>
            <p className="text-lg font-semibold text-[#0ACF83] mb-6">
              {score >= 4 ? "Excellent!" : score >= 3 ? "Good job!" : "Keep learning!"}
            </p>
            <div className="flex space-x-4 justify-center">
              <button
                onClick={() => setIsCompleted(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-[#0ACF83] text-white rounded-lg hover:bg-[#0ACF83]/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}