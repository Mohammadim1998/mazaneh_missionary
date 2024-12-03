"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";


const Map = ({ markers }) => {


  const customIcon = new Icon({
    iconUrl: "/images/location.png",
    iconSize: [38, 38]
  })

  return (
    <>
      <MapContainer
        className="w-full h-full"
        center={[35.72021225108499, 51.42222691580869]}
        zoom={14}
        scrollWheelZoom={true}

      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.gotoPlace} icon={customIcon} >
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default Map;