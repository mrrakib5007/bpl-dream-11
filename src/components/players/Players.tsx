import { use, useState } from "react";
import type { IPlayer } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
    playersPromise: Promise<IPlayer[]>;
}

type SwtichTab = "available" | "selected";

const Players = ({ playersPromise }: PlayersProps) => {
    const playersData = use(playersPromise);
    const [activeTab, setActiveTab] = useState<SwtichTab>("available");


    return (
        <div className="container mx-auto my-16">
           <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">
                    {
                        activeTab === "available" ?  "Available Players" : "Selected Players"
                    }
                </h1>
                <div>
                    <button onClick={() => setActiveTab("available")} className={`btn btn-active rounded-r-none border-r-0 shadow-none ${activeTab === "available" ? "bg-[#E7FE29] border-[#E7FE29] text-black" : "bg-transparent border-gray-300 text-gray-500"}`}>Available</button>
                    
                    <button onClick={() => setActiveTab("selected")} className={`btn btn-active rounded-l-none border-l-0 shadow-none ${activeTab === "available" ? "bg-transparent border-gray-300 text-gray-500" : "bg-[#E7FE29] border-[#E7FE29] text-black"}`}>Selected (0)</button>
                </div>
            </div>
            <div>
                {
                    activeTab === "available" ? 
                    <AvailablePlayers playersData={playersData} /> 
                    : 
                    <div>Selected Tab</div>
                }
            </div>
        </div>
    );
};

export default Players;