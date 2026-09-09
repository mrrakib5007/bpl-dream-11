import type { IPlayer } from "../../types/playerType";

interface PlayerProps {
    player: IPlayer
}

const PlayerCard = ({ player }: PlayerProps) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;

  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-xs flex flex-col justify-between">
      <div>
        <div className="w-full h-52 rounded-xl overflow-hidden mb-4">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>

        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-xl">👤</span>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        </div>

        <div className="flex justify-between items-center pb-3 border-b border-gray-100 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <span>🏳️</span>
            <span>{country}</span>
          </div>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium py-1.5 px-3 rounded-md">
            {role}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-900 mb-2 text-sm">Rating</h3>
        
        <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
          <span className="font-medium">{battingType}</span>
          <span className="text-gray-500">{battingType}</span>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
          <span className="font-medium">Bowling Style</span>
          <span className="text-gray-500 text-right">{bowlingType}</span>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Bidding Price: <br />
            <span className="text-indigo-500 font-bold text-xl"> ${biddingPrice}</span>
          </p>
          <button 
            
            className="border border-gray-300 hover:bg-amber-300 hover:border-amber-300 text-gray-800 text-xs font-semibold py-2 px-3.5 rounded-lg cursor-pointer transition-all"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;