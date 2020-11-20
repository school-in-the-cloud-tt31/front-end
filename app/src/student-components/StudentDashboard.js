import React from "react";

import Header from "./Header";
import SearchBox from "./SearchBox";
import Card from "./Card";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <SearchBox />
      <Card />
    </div>
  );
}
