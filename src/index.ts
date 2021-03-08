import "./style.css";

let map: google.maps.Map;

export function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: {lat: 59.318419, lng: 18.086045}, // The Swedish Museum of Photography coordinates
    zoom: 15,
    disableDefaultUI: true,
  });
}