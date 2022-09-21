import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '67%',
};

export class MapContainer extends Component {

  state = {
    activeMarker: {}
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        className="relative max-w-3xl left-1/2 transform -translate-x-1/2"
        initialCenter={
          {
            lat: 59.130012743586797,
            lng: 10.224604359447545
          }
        }
      >
        <Marker 
          name={'Apollon & Afrodite'}
        />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4yZ0F2SwTevIquT4KPc0tMSFoYDdqweo'
})(MapContainer);