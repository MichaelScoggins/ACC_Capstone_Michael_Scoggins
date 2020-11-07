import React from "react";
import DisplayListingsCard from "./DisplayListingsCard";

export default function ListStrains(props) {
  return (
    <ul>
      {props.listings.map((x) => {
        return (
          <DisplayListingsCard
            id={x.id}
            name={x.name}
            species={x.race}
            description={x.desc}
          />
        );
      })}
    </ul>
  );
}
