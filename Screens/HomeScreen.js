import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import HomeScreenStyle from '../Styles/HomeScreenStyle';
import MapPreview from './MapPreview';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View style={HomeScreenStyle.Container}>
        <Text style={HomeScreenStyle.HiPeople}> Hi People,</Text>

        <View style={HomeScreenStyle.inline1}>
          <Text style={HomeScreenStyle.Welcome}>Welcome!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../Assets/man.png')}
              style={HomeScreenStyle.ProfileImage}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={HomeScreenStyle.inline2}>
          <Image
            source={require('../Assets/LocationMarker.png')}
            style={HomeScreenStyle.LocationMarkerIcon}></Image>
          <Text style={HomeScreenStyle.Address}>Gurugram, Haryana</Text>
        </TouchableOpacity>

        <View style={HomeScreenStyle.WholeMapBox}>
          <View style={HomeScreenStyle.TopText}>
            <Text style={HomeScreenStyle.NearByBin}> Nearby bin station </Text>
            <TouchableOpacity>
              <Text
                style={HomeScreenStyle.ViewAll}
                title="Go to Map"
                onPress={() => navigation.navigate('MapScreen')}>
                view all
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={HomeScreenStyle.MapBox}
            title="Go to Map"
            onPress={() => navigation.navigate('MapScreen')}>
            <MapPreview></MapPreview>
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  );
};

export default HomeScreen;
