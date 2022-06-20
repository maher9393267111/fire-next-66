import React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const markericon =
  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const Singlevilla = ({ villa }) => {
  const pinMB = L.icon({
    iconUrl: markericon,
    iconSize: [24, 41],
    iconAnchor: [0, 44],
    popupAnchor: [12, -40],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  });

  const [markerPos, setMarkerPos] = useState({
    lang: 29.916668,
    Lat: 40.766666,
  });
  const [fixedMarkerPos, setFixedMarkerPos] = useState({
    lang: 29.916668,
    Lat: 40.666666,
  });

  const markerRef = useRef();

  return (
    <div>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
            integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
            crossorigin=""
          />

          <script
            src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
            integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
            crossorigin=""
          ></script>
        </Head>
      </div>

      <div>
        <div>
          <img src={villa.image} alt={villa.name} />

          <div className="villa-info">
            <h2>{villa.name}</h2>

            <h3>{villa.koordinat.lat}</h3>
            <h3>{villa.koordinat.lng}</h3>
            <h3>{villa.price}</h3>
          </div>

          <div>
            <MapContainer
              center={[villa.koordinat.lat, villa.koordinat.lng]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                icon={pinMB}
                // draggable={true}
                // onDragend={updatePosition}
                ref={markerRef}
                position={[villa.koordinat.lat, villa.koordinat.lng]}
              >
                <Popup>
                  <p className="popup">villa image</p>
                  <img
                    className="popup-img   w-[77px]  h-[77px]"
                    src={villa.image}
                    alt="Sacré-Coeur"
                  />
                </Popup>
              </Marker>

              {/* <Marker
          position={[fixedMarkerPos.Lat, fixedMarkerPos.lang]}
          ref={fixedMarkerRef}
        /> */}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlevilla;
