"use client";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import L from 'leaflet';

const Map = ({ dataMap, setDataMap, setOpenModalSheet, setLenghtOfCapacity }) => {
  const datasMap = [
    {
      id: 3,
      gotoPlace: [35.793685522439645, 51.44145317157504],
      title: "مسجد کربلا",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-3.jpg",
      images: [
        { img: "/images/slider/slide-10.jpg" },
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-14.jpg" },
        { img: "/images/slider/slide-13.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-5.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-9.jpg" },
      ],
      score: 5,
      meets: 15,
      accupy: "خانوادگی",
      step: "قانون کار",
    },
    {
      id: 4,
      gotoPlace: [35.78238878440862, 51.454560182899556],
      title: "مسجد هدایت",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-4.jpg",
      images: [
        { img: "/images/slider/slide-11.jpg" },
        { img: "/images/slider/slide-12.jpg" },
        { img: "/images/slider/slide-13.jpg" },
        { img: "/images/slider/slide-14.jpg" },
        { img: "/images/slider/slide-5.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-8.jpg" },
        { img: "/images/slider/slide-9.jpg" },
        { img: "/images/slider/slide-1.jpg" },
      ],
      score: 4.4,
      meets: 23,
      accupy: "گروهی",
      step: "توافقی",
    },
    {
      id: 5,
      gotoPlace: [35.774413649690054, 51.48323177017192],
      title: "مسجد مبارک آباد",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-5.jpg",
      images: [
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-12.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-9.jpg" },
        { img: "/images/slider/slide-8.jpg" },
        { img: "/images/slider/slide-7.jpg" },
        { img: "/images/slider/slide-5.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-10.jpg" },
      ],
      score: 3.6,
      meets: 8,
      accupy: "مجردی",
      step: "توافقی",
    },
    {
      id: 6,
      gotoPlace: [35.76370405024132, 51.43731199109132],
      title: "مسجد الغدیر",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-6.jpg",
      images: [
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-5.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-7.jpg" },
        { img: "/images/slider/slide-8.jpg" },
        { img: "/images/slider/slide-9.jpg" },
      ],
      score: 2.9,
      meets: 36,
      accupy: "خانوادگی",
      step: "توافقی",
    },
    {
      id: 8,
      gotoPlace: [35.74109269944609, 51.43183485633422],
      title: "مسجد الرضا",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-7.jpg",
      images: [
        { img: "/images/slider/slide-14.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-7.jpg" },
        { img: "/images/slider/slide-9.jpg" },
        { img: "/images/slider/slide-8.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-1.jpg" },
      ],
      score: 5,
      meets: 14,
      accupy: "خانوادگی",
      step: "توافقی",
    },
    {
      id: 9,
      gotoPlace: [35.72272833015019, 51.4711273448091],
      title: "مسجد الفاطمیه",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-8.jpg",
      images: [
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-14.jpg" },
        { img: "/images/slider/slide-8.jpg" },
        { img: "/images/slider/slide-7.jpg" },
        { img: "/images/slider/slide-5.jpg" },
        { img: "/images/slider/slide-12.jpg" },
        { img: "/images/slider/slide-11.jpg" },
      ],
      score: 4.6,
      meets: 18,
      accupy: "گروهی",
      step: "توافقی",
    },
    {
      id: 10,
      gotoPlace: [35.70919398019333, 51.453743395362636],
      title: "مسجد امام کاظم",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-9.jpg",
      images: [
        { img: "/images/slider/slide-12.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-8.jpg" },
        { img: "/images/slider/slide-7.jpg" },
        { img: "/images/slider/slide-8.jpg" },
        { img: "/images/slider/slide-5.jpg" },
        { img: "/images/slider/slide-1.jpg" },
      ],
      score: 4,
      meets: 27,
      accupy: "خانوادگی",
      step: "توافقی",
    },
    {
      id: 11,
      gotoPlace: [35.721374998597256, 51.4156415883567],
      title: "مسجد نور",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-1.jpg",
      images: [
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-1.jpg" },
      ],
      score: 4.8,
      meets: 5,
      accupy: "مجردی",
      step: "توافقی",
    },
    {
      id: 12,
      gotoPlace: [35.70977407090814, 51.47065107222152],
      title: "مسجد صفا",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-2.jpg",
      images: [
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-1.jpg" },
      ],
      score: 3.8,
      meets: 65,
      accupy: "خانوادگی",
      step: "توافقی",
    },
    {
      id: 13,
      gotoPlace: [35.69372333720725, 51.46993666334016],
      title: "مسجد حضرت محمد",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-3.jpg",
      images: [
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-1.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-1.jpg" },
      ],
      score: 4.1,
      meets: 3,
      accupy: "گروهی",
      step: "توافقی",
    },
    {
      id: 14,
      gotoPlace: [35.676508719827616, 51.439455217735414],
      title: "مسجد جامع تهران",
      address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
      img: "/images/slider/slide-5.jpg",
      images: [
        { img: "/images/slider/slide-10.jpg" },
        { img: "/images/slider/slide-2.jpg" },
        { img: "/images/slider/slide-3.jpg" },
        { img: "/images/slider/slide-11.jpg" },
        { img: "/images/slider/slide-12.jpg" },
        { img: "/images/slider/slide-6.jpg" },
        { img: "/images/slider/slide-13.jpg" },
        { img: "/images/slider/slide-4.jpg" },
        { img: "/images/slider/slide-1.jpg" },
      ],
      score: 3.6,
      meets: 48,
      accupy: "خانوادگی",
      step: "توافقی",
    },
  ];

  useEffect(() => {
    setLenghtOfCapacity(datasMap.length)
  }, [datasMap])

  const router = useRouter();

  const customIcon = new Icon({
    iconUrl: "/images/locationLetter.svg",
    iconSize: [60, 60]
  })
  
  const iconPerson = new Icon({
    
    iconUrl: "/images/locationLetterActive.svg",
    iconSize: [60, 60]
  });

  const [acticeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  console.log(acticeIndex);
  return (
    <>
      <MapContainer
        className="w-full h-full"
        center={dataMap?.gotoPlace}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {datasMap.map((dataMap, index) => (
          <Marker
            key={index}
            className={`${index === acticeIndex ? "z-50" : "z-40"} relative`}
            eventHandlers={{
              click: () => {
                setOpenModalSheet(true);
                setDataMap(dataMap);
                handleClick(index)
              }
            }}
            position={dataMap?.gotoPlace} icon={index === acticeIndex ? iconPerson : customIcon}
          >
          </Marker>
        ))}
        {/*
*/}

      </MapContainer >
    </>
  );
}

export default Map;