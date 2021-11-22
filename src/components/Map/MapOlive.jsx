import { Map, GoogleApiWrapper } from 'google-maps-react';

import React from 'react'

const MapOlive = () => {
    return (
        <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      />
    )
}

export default MapOlive;
