import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-screens';
import {Header} from 'react-native/Libraries/NewAppScreen';

const HomeScreenStyle = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    // alignItems: 'center',
  },

  Header: {
    backgroundColor: '#18654a',
    height: 180,
    width: '100%',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'space-between',
  },

  HeaderContent: {
    top: 7,
    margin: 15,
    flexDirection: 'row',
  },

  ProfileImage: {
    height: 50,
    width: 50,
  },

  HelloNameLocation: {
    flex: 1,
    justifyContent: 'center',
  },

  HelloName: {
    margin: 4,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },

  LocationNameAndContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },

  LocationMarkerIcon: {
    height: 20,
    width: 20,
  },

  YourAddress: {
    fontSize: 13,
    fontWeight: 'semibold',
    color: 'white',
  },

  BellIcon: {
    height: 35,
    width: 35,
  },

  SearchBoxandQrIcon: {
    // flexDirection:'row',
  },

  Searchbox: {
    height: '45%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: 'white',
    marginTop: '6%',
    // flexDirection:'row',
  },

  QrIcon: {
    height: 30,
    width: 30,
  },

  // \\\\\\\\\\\\\\\\\\\\\\\ OUR SERVICES \\\\\\\\\\\\\\\\\\\\\\\\
  OurServicesContainer: {
    top: '3%',
    height:110,
    // borderColor:'black',
    // borderWidth:2,

  },

  OurServicesText: {
    paddingLeft: '3%',
    fontSize: 16,
    fontWeight: 'bold',
    
  },

  ServicesBoxes: {
    height: '65%',
    width: '95%',
    alignSelf: 'center',
    top: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor:'black',
    // borderWidth:2,
  },

  ServicesBox: {
    height: '100%',
    width: '18%',
    // borderColor:'black',
    // borderWidth:2,
    backgroundColor: '#18654a',
    borderRadius: 20,
    justifyContent: 'center',
  },

  ServicesBoxIcons: {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
  },

  ServicesBoxText: {
    alignSelf: 'center',
    fontSize: 13,
    color: 'white',
  },

////////////////////// Recycle MATERIAL \\\\\\\\\\\\\\\\\\\\\\\

 RecycleMaterialContainer:{
    top:"6%",
  
 },

 RecycleMaterialText:{
  paddingLeft: '3%',
  fontSize: 16,
  fontWeight: 'bold',
 },

 MateriealContainer:{
    
 },

 MateriealType:{
   height:150,
  //  borderColor:'black',
  //  borderWidth:2,
 },
 
 MateriealTypeContainer:{
 justifyContent:'space-between',
 marginTop:10,
 marginLeft:12,
 marginRight:8,
 },

 MateriealImage:{
    height:'85%',
    width:120,
  //   borderColor:'black',
  //  borderWidth:2,
   borderRadius:20

 },

 MateriealText:{
    
    fontSize: 13,
    color: 'black',
 },

// \\\\\\\\\\\\\\\\\\\\\\\ NEARBY RECYCLE STATION \\\\\\\\\\\\\\\\\\\\\\

    WholeBox:{
      top:50,
      
      
    } ,

    NBRSText:{
        fontSize:16,
      fontWeight:'bold',
      marginLeft:"3%",
    },

  NBRSContainer:{
  
      height:200,
      marginTop:'2%',
      // borderColor:'black',
      // borderWidth:2,
      flexDirection:'row'

  },

  NBRS:{
    flexDirection:'row',
    
  },

   MapContainer:{
    // borderColor:'black',
    // borderWidth:2,
    height:'80%',
    width:'40%',
    margin:'3%',
    borderRadius:30,
    
   },

   NBRSInsideText:{
    // flex:1,
    // borderColor:'black',
    // borderWidth:2,
    top:'7%'
    

   },
   
   DistanceAndTime:{
    
    
    
   },

   NBRSAddress:{
    top:'16%',
    right:'54%',
    fontSize:14
   },
});

export default HomeScreenStyle;
