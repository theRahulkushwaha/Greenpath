import { Button, StyleSheet } from "react-native";

const SignupScreenStyle = StyleSheet.create({

    Container:{
            height:"100%",
            width:"100%",
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            
    },

    all:{
        height:"95%",
        width:"95%",
        // borderColor:'black',
        // borderWidth:2,
        resizeMode:'contain',
    },

    Imagecontainer:{
        height:'30%',
        width:'100%',
        backgroundColor:'white',
        resizeMode:"contain"
    },

    Image:{
            height:'100%',
            width:'100%',
    },

    EnterDataContainer:{
        height:"43%",
        width:"100%",
        // backgroundColor:"blue",
        // borderColor:'black',
        // borderWidth:2,
        paddingTop:'10%'
    },

    
    SignUpText:{
        fontSize:23,
        color:'black',
        fontWeight:'bold',
        paddingBottom:'5%',
        paddingLeft:'3%'
    },
    
    Placeholder:{
        color:'black',
        borderColor:'gray',
        borderWidth:2,
        margin:10,
        borderRadius:10,
        paddingLeft:15
    },

    Button:{
        height:'27%',
        width:'100%',
        // borderColor:'black',
        // borderWidth:2,
    },
    
    SignupButtonContainer:{
            height:'30%',
            width:'95%',
            backgroundColor:'green',
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:40,
    },

    ButtonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'  
    },

    ORandAlready:{
        height:"5%",
        width:'100%',
        borderColor:'black',
        borderWidth:2
    },

    ORText:{
        alignSelf:'center',
        padding:'5%',
        fontSize:15
    },

    AlreadyTextContainer:{},

    AlreadyText:{
        alignSelf:'center',
        fontSize:15
    },
});

export default SignupScreenStyle;