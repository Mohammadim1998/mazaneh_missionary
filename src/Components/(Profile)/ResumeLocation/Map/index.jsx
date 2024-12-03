"use client";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useRouter } from "next/navigation";

const Map = ({ markers }) => {
  const router = useRouter();

  const customIcon = new Icon({
    // iconUrl: require("/public/images/mark.jpg"),
    iconUrl: "/images/location.svg",
    iconSize: [38, 38]
  })

  function openPopup(e) {
    e.target.openPopup();
  }

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
        {markers.map((maker, index) => (
          <Marker
            className="relative"
            eventHandlers={{
              click: () => {
                router.push("/mosquePage")
              },
              add: openPopup
            }
            }
            key={index}
            position={maker.gotoPlace} icon={customIcon}>
            <Popup className="font-semibold" closeButton={false} autoClose={false} closeOnClick={false}>
              {maker.popup}
            </Popup>
          </Marker>
        ))}
      </MapContainer >
    </>
  );
}

export default Map;