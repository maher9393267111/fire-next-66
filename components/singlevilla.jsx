import React from 'react';
import { useState,useEffect,useRef } from 'react'

import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
const Singlevilla = ({villa}) => {

    const [markerPos, setMarkerPos] = useState({
        lang: 29.916668,
        Lat: 40.766666 ,
        })
        const [fixedMarkerPos, setFixedMarkerPos] = useState({
        lang: 29.916668,
        Lat: 40.666666 ,
        })



    return (
        <div>
            <div>

            <img src={villa.img} alt={villa.name} />


<div className="villa-info">
    <h2>{villa.name}</h2>

    <h3>{villa.koordinat.lat}</h3>
    <h3>{villa.koordinat.lng}</h3>
    <h3>{villa.price}</h3>
    </div>


<div>
<MapContainer
center={[markerPos.Lat, markerPos.lang]}

zoom={13} scrollWheelZoom={false}>
<TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
<Marker

    draggable={true}
    onDragend={updatePosition}
    ref={markerRef}
    position={[markerPos.Lat, markerPos.lang]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

    <Marker
          position={[fixedMarkerPos.Lat, fixedMarkerPos.lang]}
          ref={fixedMarkerRef}
        />
    </MapContainer>
</div>


            </div>
        </div>
    );
}

export default Singlevilla;
