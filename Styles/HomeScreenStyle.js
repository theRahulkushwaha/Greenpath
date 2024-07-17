import {StyleSheet} from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  //--------------------------Header-------------------------------------------------------------
  Container: {
    height: '100%',
    backgroundColor: '#d7e0de',
  },
  HiPeople: {
    top: '2%',
    marginLeft: '3.5%',
  },
  Welcome: {
    fontSize: 18,
    paddingTop: 10,
    fontWeight: 'bold',
  },

  inline2: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  LocationMarkerIcon: {
    height: 25,
    width: 25,
    marginLeft: 15,
  },

  Address: {
    fontWeight: 'bold',
  },

  inline1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '4%',
  },

  ProfileImage: {
    height: 50,
    width: 50,
    right: 15,
  },

  // -----------------------------------------Map box-------------------------------------------------------
  WholeMapBox: {
    height: '32%',
    width: '90%',
    alignSelf: 'center',
    top: '5%',
  },

  MapBox: {
    height: '83%',
    width: '100%',
    backgroundColor: 'green',
    alignSelf: 'center',
    top: '5%',
    borderRadius: 45,
  },

  TopText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  NearByBin: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  ViewAll: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  // ---------------------------------------
});

export default HomeScreenStyle;
