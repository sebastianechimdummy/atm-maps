import "./style.css";

let map: google.maps.Map;

export function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: {lat: 44.447264, lng: 26.078004}, // FIA coordinates
    zoom: 15,
    disableDefaultUI: true,
  });
}