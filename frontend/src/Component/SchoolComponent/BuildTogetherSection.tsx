interface Game {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
}

const games: Game[] = [
  {
    id: 'puzzle',
    title: 'Robot Puzzle',
    description: 'Solve the sliding puzzle',
    icon: '🧩',
    color: 'text-blue-600',
    bgGradient: 'from-blue-100 to-blue-200'
  },
  {
    id: 'memory',
    title: 'Memory Game',
    description: 'Match robot parts',
    icon: '🧠',
    color: 'text-purple-600',
    bgGradient: 'from-purple-100 to-purple-200'
  },
  {
    id: 'builder',
    title: 'Robot Builder',
    description: 'Build your own robot',
    icon: '🔧',
    color: 'text-orange-600',
    bgGradient: 'from-orange-100 to-orange-200'
  },
  {
    id: 'quiz',
    title: 'Robot Quiz',
    description: 'Test your knowledge',
    icon: '❓',
    color: 'text-green-600',
    bgGradient: 'from-green-100 to-green-200'
  }
];

interface BuildTogetherSectionProps {
  onGameSelect?: (gameId: string) => void;
}

export function BuildTogetherSection({ onGameSelect }: BuildTogetherSectionProps) {
  const handleGameClick = (gameId: string) => {
    if (onGameSelect) {
      onGameSelect(gameId);
    }
    // Scroll to assemble robot section
    const assembleSection = document.getElementById('assemble-robot-section');
    if (assembleSection) {
      assembleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#0ACF83]">{"Let's Build"}</span>{" "}
            <span className="text-slate-800 dark:text-slate-100">Together</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Choose a game to play and learn about robots!
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              onClick={() => handleGameClick(game.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function GameCard({ game, onClick }: { game: Game; onClick: () => void }) {
  return (
    <div 
      className="group aspect-[4/3] border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 hover:border-[#0ACF83] dark:hover:border-[#0ACF83] transition-all duration-300 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_4px_rgba(10,207,131,0.3)] cursor-pointer overflow-hidden transform hover:scale-105"
      onClick={onClick}
    >
      <div className={`h-full bg-gradient-to-br ${game.bgGradient} dark:from-gray-800 dark:to-gray-700 p-6 flex flex-col items-center justify-center text-center`}>
        {/* Game Icon */}
        <div className="text-6xl mb-4 group-hover:animate-bounce">
          {game.icon}
        </div>
        
        {/* Game Info */}
        <h3 className={`text-xl font-bold ${game.color} dark:text-white mb-2 group-hover:text-[#0ACF83] transition-colors`}>
          {game.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {game.description}
        </p>
        
        {/* Play Button */}
        <div className="mt-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0ACF83] text-white rounded-full text-sm font-semibold group-hover:bg-[#0ACF83]/90 transition-colors">
            <span>🎮</span>
            <span>Play Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}