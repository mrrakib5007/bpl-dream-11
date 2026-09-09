import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType"
import PlayerCard from "./PlayerCard"

interface AvailablePlayersProps {
  playersData: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({ playersData, coin, setCoin }: AvailablePlayersProps) => {  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        playersData?.map((player) => (
          <PlayerCard key={player.playerId} player={player} coin={coin} setCoin={setCoin} />  ))
      }
    </div>
  )
}

export default AvailablePlayers