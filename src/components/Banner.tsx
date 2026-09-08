import BannerLogo from "../assets/banner-main.png";
import BgShadow from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div 
      className="container mx-auto rounded-xl bg-black bg-cover bg-center bg-no-repeat relative overflow-hidden py-16 px-6 md:py-24 md:px-12 text-center min-h-100 md:min-h-120 flex items-center justify-center"
      style={{ backgroundImage: `url(${BgShadow})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 max-w-3xl mx-auto">
        <img src={BannerLogo} alt="BPL Logo" className="w-28 md:w-36 mx-auto" />
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="bg-amber-300 text-gray-900 font-semibold py-2.5 px-4 rounded-md cursor-pointer">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;