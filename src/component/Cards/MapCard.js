import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker fix for missing marker icon issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapCard = () => {
  // Coordinates for 900 S. Stonebridge, McKinney, Texas
  const position = [33.1959, -96.6989];

  // Inline styles for the MapContainer
  const mapContainerStyle = {
    height: "50vh",
    width: "100%",
    position: "relative", // Adjust as needed
    zIndex: 1, // Ensure this is lower than the navbar z-index
  };

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={mapContainerStyle}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          900 S. Stonebridge, Suite number 102, McKinney Texas, 75070
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapCard;
