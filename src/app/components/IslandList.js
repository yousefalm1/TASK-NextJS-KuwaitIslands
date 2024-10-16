"use client";

import Island from "./Island";

function IslandList({ islands, handleClick, visitorsCount }) {
  const islandCards = islands.map((island) => (
    <Island
      key={island.id}
      island={island}
      handleClick={handleClick}
      visitorCount={visitorsCount}
    />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
