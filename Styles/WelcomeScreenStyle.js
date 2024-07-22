import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const WelcomeScreenStyle = StyleSheet.create({

    container:{
        height:'100%',
        backgroundColor:'green',
    },

    ImageContainer:{
            margin:'15%',
            height:300,
            width:300 ,
            alignSelf:'center',
            // backgroundColor:'red'
    },

    Image:{
        height:'100%',
        width:'100%'
    },

    Text:{
        marginLeft:20
    },

    WelcomeText:{
        fontSize:50,
        color:'pink'
    },

    TOGreenPathText:{
          fontSize:30,
          color:'white',  
    },

    ReadyText:{
        fontSize:20,
        color:'white',
        marginBottom:'40%'
    },

    GetStartedButton:{
        height:60,
        width:'80%',
        backgroundColor:'blue',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20

    },

    GetStartedButtonText:{
        alignSelf:'center',
        fontSize:20
    },

});

export default WelcomeScreenStyle;