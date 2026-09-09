import type { IPlayer } from "../../types/playerType"
import PlayerCard from "./PlayerCard"

interface AvailablePlayersProps {
  playersData: IPlayer[]
}

const AvailablePlayers = ({ playersData }: AvailablePlayersProps) => {  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        playersData?.map((player) => (
          <PlayerCard key={player.playerId} player={player} /> ))
      }
    </div>
  )
}

export default AvailablePlayers