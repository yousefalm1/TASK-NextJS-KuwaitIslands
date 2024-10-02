import Header from "./components/Header";
import IslandList from "./components/IslandList";
import islands from "./data/islands";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-row justify-between">
        <IslandList islands={islands} />
      </div>
    </>
  );
}
