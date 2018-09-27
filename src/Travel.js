import React from "react";

const Quote = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo}/>
    <figcaption>
      <blockquote>{destination} - {distance}</blockquote>
      <cite>{country}</cite>
    </figcaption>
  </figure>
);

export default Quote;
