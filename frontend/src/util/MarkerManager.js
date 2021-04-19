class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(restaurants) {
    const restaurantsObject = {};

    restaurants.forEach((restaurant) => {
      restaurantsObject[restaurant.id] = restaurant;
    });

    Object.keys(this.markers).forEach((key) => {
      const marker = this.markers[key];
      if (!restaurantsObject[key]) {
        marker.setMap(null);
        delete this.markers[key];
      }
    });

    restaurants.forEach((restaurant) => {
      if (!this.markers[restaurant.id]) {
        const newMarker = this.createMarkerFromRestaurant(restaurant);
        this.markers[restaurant.id] = newMarker;
      }
    });
  }

  createMarkerFromRestaurant(restaurant) {
    const myLatLng = { lat: restaurant.latitude, lng: restaurant.longitude };

    const newMarker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: restaurant.name,
    });

    return newMarker;
  }
}

export default MarkerManager;
