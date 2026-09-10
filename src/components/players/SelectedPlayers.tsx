import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import SelectedPlayerCard from "./SelectedPlayerCard";
import { FaUserPlus } from "react-icons/fa";


interface SelectedPlayersProps {
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const SelectedPlayers = ({ coin, setCoin, selectedPlayers, setSelectedPlayers }: SelectedPlayersProps) => {
  return (
    <div className="">
        <div className="grid grid-cols-1 gap-5">
        {
            selectedPlayers.length > 0 ? 
            (
                selectedPlayers.map(player => <SelectedPlayerCard 
                key={player.playerId}
                player={player}
                coin={coin} 
                setCoin={setCoin}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers} />)
            )
            : 
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center border border-dashed border-gray-300 rounded-2xl bg-gray-50">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-amber-100 text-amber-500">
                    <FaUserPlus className="text-2xl" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    No Player Selected
                </h3>

                <p className="text-sm text-gray-500 max-w-sm">
                    You haven't selected any players yet. Choose players from the available
                    players list to build your team.
                </p>
            </div>
        }
        </div>
    </div>
  )
}

export default SelectedPlayers