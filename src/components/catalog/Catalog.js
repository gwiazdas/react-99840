import React from "react";
import "./Catalog.css";
import CompsCard from "../compCard/CompCard";
import { comps, getComps } from "../../data";

const Catalog = (props) => {
  const moviesToDisplay = props.term ? getComps(props.term) : comps;

  return (
    <div className="catalog">
      {moviesToDisplay.map((comp) => (
        <CompsCard
          key={comp.id}
          title={comp.title}
          description={comp.description}
          link={comp.link}
        />
      ))}
    </div>
  );
};

export default Catalog;
