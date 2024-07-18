import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import HomeScreenStyle from '../Styles/HomeScreenStyle';
import MapPreview from './MapPreview';

const HomeScreen = ({navigation}) => {
  return (
    // \\\\\\\\\\\\\\\\\\\\\\\\\\HomeScreen\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    <View style={HomeScreenStyle.Container}>
      {/* \\\\\\\\\\\\\\\\\\\\\\ HEADER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  */}
      <View style={HomeScreenStyle.Header}>
        <View style={HomeScreenStyle.HeaderContent}>
          {/* PROFILE IMAGE */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../Assets/man.png')}
              style={HomeScreenStyle.ProfileImage}></Image>
          </TouchableOpacity>

          {/* HELLO NAME AND LOCATION  */}
          <View style={HomeScreenStyle.HelloNameLocation}>
            <Text style={HomeScreenStyle.HelloName}>Hello, Rahul</Text>

            <View style={HomeScreenStyle.LocationNameAndContainer}>
              <Image
                source={require('../Assets/LocationMarker.png')}
                style={HomeScreenStyle.LocationMarkerIcon}></Image>

              <Text style={HomeScreenStyle.YourAddress}>Your Location</Text>
            </View>
          </View>

          {/* NOTIFIACTION BELL ICON  */}
          <TouchableOpacity>
            <Image
              source={require('../Assets/NotificationBellIcon.png')}
              style={HomeScreenStyle.BellIcon}></Image>
          </TouchableOpacity>
        </View>

        {/* SEARCH BOX AND SCANNER */}
        <View style={HomeScreenStyle.SearchBoxAndQrIcon}>
          <TouchableOpacity style={HomeScreenStyle.Searchbox}>
            <TextInput placeholder="  Search"></TextInput>
          </TouchableOpacity>

          {/* <Image source={require('../Assets/QrIcon.png')}
              style={HomeScreenStyle.QrIcon}></Image> */}
        </View>
      </View>

      {/* \\\\\\\\\\\\\\\\\\\ OUR SERVICES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <View>
        <View style={HomeScreenStyle.OurServicesContainer}>
          <Text style={HomeScreenStyle.OurServicesText}>Our Services</Text>

          <View style={HomeScreenStyle.ServicesBoxes}>
            <TouchableOpacity style={HomeScreenStyle.ServicesBox}>
              <Image
                source={require('../Assets/pickup.png')}
                style={HomeScreenStyle.ServicesBoxIcons}></Image>
              <Text style={HomeScreenStyle.ServicesBoxText}>Pick up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={HomeScreenStyle.ServicesBox}>
              <Image
                source={require('../Assets/recycle-bin.png')}
                style={HomeScreenStyle.ServicesBoxIcons}></Image>
              <Text style={HomeScreenStyle.ServicesBoxText}>Smart bin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={HomeScreenStyle.ServicesBox}>
              <Image
                source={require('../Assets/gift.png')}
                style={HomeScreenStyle.ServicesBoxIcons}></Image>
              <Text style={HomeScreenStyle.ServicesBoxText}>Reward</Text>
            </TouchableOpacity>

            <TouchableOpacity style={HomeScreenStyle.ServicesBox}>
              <Image
                source={require('../Assets/recycle.png')}
                style={HomeScreenStyle.ServicesBoxIcons}></Image>
              <Text style={HomeScreenStyle.ServicesBoxText}>Recycle</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* \\\\\\\\\\\\\\\\\\\\\ Recycle MATERIAL \\\\\\\\\\\\\\\\\\\\\\ */}
        <View style={HomeScreenStyle.RecycleMaterialContainer}>
          <Text style={HomeScreenStyle.RecycleMaterialText}>
            Recycle Material
          </Text>

          <View style={HomeScreenStyle.MateriealContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={HomeScreenStyle.MateriealType}>
              <TouchableOpacity style={HomeScreenStyle.MateriealTypeContainer}>
                <Image
                  source={require('../Assets/plastic.jpeg')}
                  style={HomeScreenStyle.MateriealImage}></Image>
                <Text style={HomeScreenStyle.MateriealText}>Plastic</Text>
              </TouchableOpacity>

              <TouchableOpacity style={HomeScreenStyle.MateriealTypeContainer}>
                <Image
                  source={require('../Assets/metal.jpg')}
                  style={HomeScreenStyle.MateriealImage}></Image>
                <Text style={HomeScreenStyle.MateriealText}>Metal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={HomeScreenStyle.MateriealTypeContainer}>
                <Image
                  source={require('../Assets/glass.jpg')}
                  style={HomeScreenStyle.MateriealImage}></Image>
                <Text style={HomeScreenStyle.MateriealText}>Glass</Text>
              </TouchableOpacity>

              <TouchableOpacity style={HomeScreenStyle.MateriealTypeContainer}>
                <Image
                  source={require('../Assets/newspaper.png')}
                  style={HomeScreenStyle.MateriealImage}></Image>
                <Text style={HomeScreenStyle.MateriealText}>Newspaper</Text>
              </TouchableOpacity>

              <TouchableOpacity style={HomeScreenStyle.MateriealTypeContainer}>
                <Image
                  source={require('../Assets/battery.jpg')}
                  style={HomeScreenStyle.MateriealImage}></Image>
                <Text style={HomeScreenStyle.MateriealText}>Battery</Text>
              </TouchableOpacity>

              <TouchableOpacity style={HomeScreenStyle.MateriealTypeContainer}>
                <Image
                  source={require('../Assets/cardboard.jpg')}
                  style={HomeScreenStyle.MateriealImage}></Image>
                <Text style={HomeScreenStyle.MateriealText}>Cardboard</Text>
              </TouchableOpacity>

              <TouchableOpacity style={HomeScreenStyle.MateriealTypeContainer}>
                <Image
                  source={require('../Assets/ewaste.jpg')}
                  style={HomeScreenStyle.MateriealImage}></Image>
                <Text style={HomeScreenStyle.MateriealText}>E-Waste</Text>
              </TouchableOpacity>

            </ScrollView>
          </View>
        </View>

        {/* \\\\\\\\\\\\\\\\\\\\\\\\\ NEARBY STATION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <View style={HomeScreenStyle.WholeBox}>

              <Text style={HomeScreenStyle.NBRSText}>Nearby Recycle Station</Text>
              <View style={HomeScreenStyle.NBRSContainer}>
                <View style={HomeScreenStyle.NBRS} >

                  <TouchableOpacity style={HomeScreenStyle.MapContainer}
                   title="Go to Map"
                   onPress={() => navigation.navigate('MapScreen')} >
                    
                    <MapPreview></MapPreview>

                  </TouchableOpacity>
                  <Text style={HomeScreenStyle.NBRSInsideText} >
                  <Text style={HomeScreenStyle.DistanceAndTime}> Distance | Time </Text>

                  </Text>
                  <Text style={HomeScreenStyle.NBRSAddress}>Address of Nearby station</Text>
                </View>
              </View>
        </View>
      </View>
            
    </View>

   
  );
};

export default HomeScreen;
