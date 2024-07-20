import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, PermissionsAndroid, Platform, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs to access your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        return true;
      } else {
        console.log('Location permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return true;
  }
};

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const mapRef = useRef(null);

  const getLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        setLoading(false);

        if (mapRef.current) {
          mapRef.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }, 1000); // Animate to the current location over 1 second
        }
      },
      error => {
        Alert.alert('Error', error.message);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 50000, maximumAge: 1000 }
    );
  };

  const handlePress = async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      getLocation();
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: currentLocation ? currentLocation.latitude : 28.4595,
          longitude: currentLocation ? currentLocation.longitude : 77.0266,
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

      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Get Current Location</Text>
      </TouchableOpacity>

      {loading && (
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
  button: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:80
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  loadingText: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 18,
  },
});

export default MapScreen;
