"use client"

import { useState } from "react";

import Island from "./Island";

function IslandList({ islands }) {
  const [query, setQuery] = useState("");

  let islandsArray = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => <Island key={island.id} island={island} />);

  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}

export default IslandList
