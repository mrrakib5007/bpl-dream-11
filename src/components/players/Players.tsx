import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
    playersPromise: Promise<IPlayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

type SwtichTab = "available" | "selected";

const Players = ({ playersPromise, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayersProps) => {
    const playersData = use(playersPromise);
    const [activeTab, setActiveTab] = useState<SwtichTab>("available");


    return (
        <div className="container mx-auto my-16">
           <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">
                    {
                        activeTab === "available" ?  "Available Players" : `Selected Players (${selectedPlayers.length}/6)`
                    }
                </h1>
                <div>
                    <button onClick={() => setActiveTab("available")} className={`btn btn-active rounded-r-none border-r-0 shadow-none ${activeTab === "available" ? "bg-[#E7FE29] border-[#E7FE29] text-black" : "bg-transparent border-gray-300 text-gray-500"}`}>Available</button>
                    
                    <button onClick={() => setActiveTab("selected")} className={`btn btn-active rounded-l-none border-l-0 shadow-none ${activeTab === "available" ? "bg-transparent border-gray-300 text-gray-500" : "bg-[#E7FE29] border-[#E7FE29] text-black"}`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            <div>
                {
                    activeTab === "available" ? 
                    <AvailablePlayers 
                        playersData={playersData} 
                        coin={coin} 
                        setCoin={setCoin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                          /> 
                    : 
                    <SelectedPlayers 
                        coin={coin} 
                        setCoin={setCoin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                         />
                }
            </div>
        </div>
    );
};

export default Players;