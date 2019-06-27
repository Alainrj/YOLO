import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import googleInfo from '../../utils/google'
// import './App.css';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const LocationPin = ({ text }) => <div><img style={{width:'70px', height:'80px'}} srcSet="././img/locationPin.png"></img></div>;

function Map(props) {

console.log('props',props)


  const myPlace = {
    lat: props.lat,
    lng: props.lng,
    name: props.name,
    zoom: props.zoom,
  }

  // New York location by default
  const defaultCenter ={
    lat: 40.7127753,
    lng: -74.0059728,
    zoom: 12,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleInfo.key }}
        defaultCenter={defaultCenter}
        center={[myPlace.lat, myPlace.lng]}
        zoom={myPlace.zoom}
        defaultZoom={defaultCenter.zoom}
      >
        <LocationPin
          lat={myPlace.lat}
          lng={myPlace.lng}
          text={myPlace.name}
        />
      </GoogleMapReact>
    </div>
  );
}


export default Map;