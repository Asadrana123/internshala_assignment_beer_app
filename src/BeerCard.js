import React from 'react';

const BeerCard = ({ beer }) => (
  <div className="beer-card">
    <img src={beer.image_url} alt={beer.name} />
    <h2>{beer.name}</h2>
    <p>{beer.tagline}</p>
    <p>ABV: {beer.abv}%</p>
    <p>IBU: {beer.ibu}</p>
    <p>First Brewed: {beer.first_brewed}</p>
    <p>Description: {beer.description}</p>
    <p>EBC: {beer.ebc}</p>
    <p>SRM: {beer.srm}</p>
    <p>pH: {beer.ph}</p>
    <p>Attenuation Level: {beer.attenuation_level}%</p>
    <p>Volume: {beer.volume.value} {beer.volume.unit}</p>
    <p>Boil Volume: {beer.boil_volume.value} {beer.boil_volume.unit}</p>
    <h3>Ingredients:</h3>
    <p>Malt:</p>
    <ul>
      {beer.ingredients.malt.map((malt) => (
        <li key={malt.name}>
          {malt.name}: {malt.amount.value} {malt.amount.unit}
        </li>
      ))}
    </ul>
    <p>Hops:</p>
    <ul>
      {beer.ingredients.hops.map((hop) => (
        <li key={hop.name}>
          {hop.name}: {hop.amount.value} {hop.amount.unit} ({hop.add}, {hop.attribute})
        </li>
      ))}
    </ul>
    <p>Yeast: {beer.ingredients.yeast}</p>
  </div>
);

export default BeerCard;
