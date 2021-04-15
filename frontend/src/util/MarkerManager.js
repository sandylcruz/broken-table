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

    restaurants.forEach((restaurant) => {
      const myLatLng = { lat: restaurant.latitude, lng: restaurant.longitude };
      const currentMarker = this.markers[restaurant.id];

      if (!currentMarker) {
        const newMarker = new google.maps.Marker({
          position: myLatLng,
          map: this.map,
          title: restaurant.name,
        });
        this.markers[restaurant.id] = newMarker;
      }
    });
  }
}

export default MarkerManager;
