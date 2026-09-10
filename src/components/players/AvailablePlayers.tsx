import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType"
import PlayerCard from "./PlayerCard"

interface AvailablePlayersProps {
  playersData: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const AvailablePlayers = ({ playersData, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) => {  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        playersData?.map((player) => (
          <PlayerCard 
            key={player.playerId} 
            player={player} 
            coin={coin} 
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
             />  ))
      }
    </div>
  )
}

export default AvailablePlayers