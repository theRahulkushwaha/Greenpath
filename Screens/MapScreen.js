import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get the current location
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation ? currentLocation.latitude : 28.4595,
          longitude: currentLocation ? currentLocation.longitude :77.0266,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title={"My Location"}
            description={"This is my current location"}
          />
        )}
      </MapView>
      {!currentLocation && (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingText: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default MapScreen;
