import { Suspense } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Players from "./components/players/Players"
import type { IPlayer } from "./types/playerType";

const playersPromise = async (): Promise<IPlayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Players playersPromise={playersPromise()}  />
        </Suspense>
      </div>
    </>
  )
}

export default App
