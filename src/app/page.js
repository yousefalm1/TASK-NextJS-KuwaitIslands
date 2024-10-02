import Header from "./components/Header";
import IslandForm from "./components/IslandForm";
import IslandList from "./components/IslandList";
import islands from "./data/islands";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homePage">
        <IslandList islands={islands} />
        <IslandForm island={islands[0]} />
      </div>
    </>
  );
}
