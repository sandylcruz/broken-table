class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromRestaurant = this.createMarkerFromRestaurant.bind(
      this
    );
  }

  // updateMarkers() {}

  // createMarkerFromRestaurant() {}
}

export default MarkerManager;
