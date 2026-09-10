import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import { ImBin } from "react-icons/im";
import { Slide, toast } from "react-toastify";

interface ISelectedPlayerProps {
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
    player: IPlayer; 
}

const SelectedPlayerCard = ({ coin, setCoin, selectedPlayers, setSelectedPlayers, player }: ISelectedPlayerProps) => {
    const { name, image, battingType } = player;
    const handleDeleteSelectedPlayer = () => {
        const reminingPlayers = selectedPlayers.filter(singlePlayer => singlePlayer.playerId !== player.playerId);
        setSelectedPlayers(reminingPlayers);
        setCoin( coin + player.biddingPrice);

            toast.success(`${player.name} delete successful! ${player.biddingPrice} credit restored in your account.`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
    }
  return (
    <div className="border border-gray-200 rounded-2xl flex items-center gap-5 justify-between p-5">
        <div className="flex items-center gap-5">
            <div className="max-w-30 rounded-2xl bg-[#D9D9D9]">
                <img className="h-29 w-29 rounded-2xl object-cover object-center" src={image} alt="Player Image" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">{name}</h2>
                <p>{battingType}</p>
            </div>
        </div>
        <div>
            <ImBin onClick={handleDeleteSelectedPlayer} className="text-red-500 font-bold text-xl cursor-pointer" />
        </div>
    </div>
  )
}

export default SelectedPlayerCard