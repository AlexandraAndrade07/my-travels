import React from "react";
import Travel from "./Travel";

const travels = [
{   
	destination:"Allemagne", 
	country:"Berlin", 
	photo:"https://cdn.civitatis.com/alemania/berlin/berlin.jpg", 
	distance:345
},
{
	destination:"Autriche", 
	country:"Vienne", 
	photo:"https://www.marseille.aeroport.fr/var/mpaeroport/storage/images/media/images/destinations/europe/allemagne/vienne-autriche/71587-1-fre-FR/vienne-autriche_full_destination.jpg", 
	distance:345
},
{
	destination:"Bruxelles", 
	country:"Belgique", 
	photo:"https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/500px_99226269_0_0.jpg?itok=OvQh_XGQ", 
	distance:345
},
{
	destination:"Croatie", 
	country:"Dubrovonik", 
	photo:"https://www.dubrovnik-walking-tours.com/documents/ture/68/dubrovnik-Kings-Landing-scheduled-tour.jpg", 
	distance:345
},
{
	destination:"Espagne", 
	country:"Alicante", 
	photo:"https://cdn.tuifly.be/img/static/im1000/00600/00604/00604E.JPG", 
	distance:345
}
]

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel country={travel.country} destination={travel.destination} photo={travel.photo} distance={travel.distance} />
    ))}
  </div>
);

export default Travels;
