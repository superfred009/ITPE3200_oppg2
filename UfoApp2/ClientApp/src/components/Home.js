import React from "react";
import { FetchUfoData } from "./FetchUfoData";

export const Home = () => {
  return (
    <div>
      <h1>UFO observasjoner</h1>
      <FetchUfoData />
    </div>
  );
};
