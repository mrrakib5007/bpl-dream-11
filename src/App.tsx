import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Players from "./components/players/Players"
import type { IPlayer } from "./types/playerType";
import { Slide, ToastContainer } from "react-toastify";
import { toast } from "react-toastify";


const playersPromise: Promise<IPlayer[]> = fetch("/data.json")
  .then((res) => res.json());

function App() {
  const [coin, setCoin] = useState<number>(0);
  const [isBonusClaim, setIsBonusClaim] = useState(false);

  const handleFreeCriditButton = () => {
    if (isBonusClaim) {
       return toast.error('Already Claimed', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
              transition: Slide,
              });
    }
    setCoin(coin + 50000);
    setIsBonusClaim(true);

    
    toast.success('Free credit claim successfull', {
    position: "top-right",
    autoClose: 2500,
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
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
          />
        <Navbar coin={coin} />
        <Banner handleFreeCriditButton={handleFreeCriditButton} isBonusClaim={isBonusClaim} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
        </Suspense>
      </div>
    </>
  )
}

export default App
