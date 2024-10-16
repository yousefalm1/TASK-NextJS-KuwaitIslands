"use client";

import { useState } from "react";

import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islands[0]);

  const [visitorsCount, setVisitorsCount] = useState(0);

  const handleCountIncrease = () => {
    setVisitorsCount(visitorsCount + 1);
  };

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const handleClick = (island) => {
    console.log(island);
    setCurrentIsland(island);
  };

  const filteredIslands = islands.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList
          islands={filteredIslands}
          handleClick={handleClick}
          visitorsCount={visitorsCount}
        />
      </div>
      <IslandForm
        island={currentIsland}
        handleCountIncrease={handleCountIncrease}
      />
    </div>
  );
}

export default IslandsContainer;
