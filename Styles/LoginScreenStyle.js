import { Link } from "@react-navigation/native";
import { StyleSheet, Touchable } from "react-native";

const LoginScreenStyle = StyleSheet.create({

    Container: {
        // backgroundColor: 'green',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        paddingLeft:20,
        paddingRight:10,
        
    
      },

      all:{
        height:'70%',
        width:'100%',
        // backgroundColor:'red',
        
      },
      
      LoginText:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        // backgroundColor:'yellow'
      },

      EmailContainer:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:20
      },

      EmailImage:{
        height:20,
        width:20,
        marginRight:"3%"
      },

      PasswordImage:{
        height:20,
        width:20,
        marginRight:"3%",
      },

      ImageContainer: {
        // backgroundColor: 'pink',
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    
      Container1: {
        // backgroundColor: 'blue',
        height:'100%',

      },
    
      Image: {
        height: '100%',
        width: '100%',
      },
    
      input: {
        height: 40,
        width:"90%",
        borderBottomColor:'gray',
        borderBottomWidth:2,
        marginBottom:10,
        color:'black'
        
      },

      
      LoginButton:{
          height:50,
          borderRadius:50,
          backgroundColor:'green',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:30
        
        },
        LoginButtonText:{
            fontSize:18,
            color:'white',
            fontWeight:'bold'
        },

        ORText:{
            color:'gray',
            alignSelf:'center',
            marginBottom:'8%',
            fontSize:15
        },

        TouchableLink:{
            alignItems:'center'
        },

        Link: {
            color:'black',
            
        },
    });

    export default LoginScreenStyle;