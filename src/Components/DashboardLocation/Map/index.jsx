"use client";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useRouter } from "next/navigation";

const Map = ({ dataMap, setOpenModalSheet }) => {
  const router = useRouter();

  const customIcon = new Icon({
    iconUrl: "/images/location.png",
    iconSize: [26, 37]
  })

  function openPopup(e) {
    e.target.openPopup();
  }

  return (
    <div className="relative w-full h-full">
      <MapContainer
        className="w-full h-full"
        center={dataMap?.gotoPlace}
        zoom={13}
        scrollWheelZoom={true}
      >
        {/* <ZoomControl position="bottomleft" /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker
            className="relative"
            eventHandlers={{
              click: () => {
                setOpenModalSheet(true);
              },
              add: openPopup
            }
            }
            position={dataMap?.gotoPlace} icon={customIcon}>
            <Popup className="font-semibold" closeButton={false} autoClose={false} closeOnClick={false}>
              {dataMap?.title}
            </Popup>
          </Marker>
      </MapContainer>


      <div className="z-50 flex justify-center items-center cursor-pointer absolute bottom-[100px] right-4 w-10 h-10 bg-white rounded-full">
        <img src="/images/svg/map/currentLocation.svg" alt="" className="" />
      </div>
    </div>
  );
}

export default Map;