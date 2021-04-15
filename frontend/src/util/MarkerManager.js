class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
  }

  // updateMarkers(restaurants) {
  //   const restaurantsObject = {};

  //   restaurants.forEach((restaurant) => {
  //     restaurantsObject[restaurant.id] = restaurant;
  //   });

  //   this.markers;
  //   // restaurantsObject.keys((restaurant) => {});
  // }

  createMarkerFromRestaurant(restaurant) {
    const myLatLng = { lat: restaurant.latitude, lng: restaurant.longitude };

    const newMarker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: restaurant.name,
    });
    this.markers[restaurant.id] = newMarker;
  }

  // removeMarkers(marker) {}
}

export default MarkerManager;
