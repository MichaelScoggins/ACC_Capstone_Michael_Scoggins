import React from "react";

export default function DisplayListingsCard(props) {
  let display;
  display = props.listings.map((x) => {
    console.log("this works", x);
    console.log("but this doesnt??", x.id);
    return (
      <li>
        <h2>{x.name}</h2>
        Type: <span id="species">{x.race}</span>
        <br></br>
        description: <span id="description">{x.desc}</span>
        <br></br>
        <br></br>
        <hr></hr>
      </li>
    );
  });

  return <div>{display}</div>;
}
