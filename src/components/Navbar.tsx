
import Logo from "../assets/logo.png";
import CoinIcon from "../assets/coin-icon.png";

const Navbar = () => {
    return (
        <div className="border-b border-gray-300">
            <nav className="container mx-auto flex justify-between py-1">
                <div>
                    <img className="max-w-18" src={Logo} alt="Logo" />
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex items-center gap-12 text-gray-500">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <div className="flex items-center cursor-pointer gap-1 border border-gray-200 py-2 px-3 rounded-md">
                        <span className="font-semibold">0 Coin</span>
                        <img className="max-w-6.5" src={CoinIcon} alt="Coin" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;