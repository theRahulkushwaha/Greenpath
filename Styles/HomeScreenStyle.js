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
    tintColor:'white'
  },

  YourAddress: {
    fontSize: 13,
    fontWeight: 'semibold',
    color: 'white',
  },

  BellIcon: {
    height: 35,
    width: 35,
    tintColor:'white'
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
    paddingLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
    
  },

  ServicesBoxes: {
    height: '65%',
    width: '95%',
    alignSelf: 'center',
    top: '2%',
    flexDirection: 'row',
    justifyContent:'space-around',
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
    height: '40%',
    width: '40%',
    alignSelf: 'center',
    tintColor:'white',
    
  },

  ServicesBoxText: {
    alignSelf: 'center',
    fontSize: 13,
    color: 'white',
    top:3

  },

////////////////////// Recycle MATERIAL \\\\\\\\\\\\\\\\\\\\\\\

 RecycleMaterialContainer:{
    top:"6%",
  
 },

 RecycleMaterialText:{
  paddingLeft: '5%',
  fontSize: 18,
  fontWeight: 'bold',
  color:'black'
 },

 MateriealContainer:{
    
 },

 MateriealType:{
   height:150,
  //  borderColor:'black',
  //  borderWidth:2,
 },
 
 MateriealTypeContainer:{
 justifyContent:'space-around',
 marginTop:10,
 marginLeft:16,
 marginRight:2,
 },

 MateriealImage:{
    height:'90%',
    width:130,
  //   borderColor:'black',
  //  borderWidth:2,
   borderRadius:20

 },

 MateriealText:{
  top:'2%',
    left:'6%',
    fontSize: 13,
    color: 'black',
    fontWeight:'bold',
 },

// \\\\\\\\\\\\\\\\\\\\\\\ NEARBY RECYCLE STATION \\\\\\\\\\\\\\\\\\\\\\

    WholeBox:{
      top:60,
      
      
    } ,

    NBRSText:{
        fontSize:18,
      fontWeight:'bold',
      marginLeft:"5%",
      color:'black',

    },

  NBRSContainer:{
  
      height:190,
      marginTop:'2%',
      borderColor:'#D8E5E1',
      borderWidth:2,
      flexDirection:'row',
      backgroundColor:'#f1fffa',
      width:'95%',
      alignItems:'center',
      alignSelf:'center',
      borderRadius:30
    
      

  },

  NBRS:{
    flexDirection:'row',
    
  },

   MapContainer:{
    borderColor:'#f1fffa',
    borderWidth:2,
    height:'90%',
    width:'40%',
    margin:'3%',
    borderRadius:30,
    
   },

   NBRSInsideText:{
    // flex:1,
    // borderColor:'black',
    // borderWidth:2,
    top:'7%',
    color:'black',
    fontWeight:'bold'
  
   },
   
   DistanceAndTime:{
    
    
    
   },

   NBRSAddress:{
    top:'16%',
    right:'54%',
    fontSize:14,
    color:'#18654a',
    fontWeight:'bold'
   },
});

export default HomeScreenStyle;
