import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} className="photo"/>
    <figcaption>
      <blockquote className="PropiertiesTravels">{destination} - {distance}</blockquote>
      <cite>{country}</cite>
    </figcaption>
  </figure>
);

export default Travel;
