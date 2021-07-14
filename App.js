//firstpage

// import React from 'react';
// import {View,Text,StyleSheet,Image} from 'react-native';
// import {LoadingButton} from '@phomea/react-native-buttons';


// const Firstpage=() =>{
//   return(

//     <View style={styles.container}>
//       <Image source={require('../firstapp/android/images/myapp.png')} style={styles.image}/>
//       <View style={styles.loginview}>
//       <LoadingButton title="Log In" color="red" textStyle={styles.login} buttonStyle={styles.login1} ></LoadingButton>
//       </View>
//       <View style={styles.signupview}>
//       <LoadingButton title="Sign Up" color="red" textStyle={styles.signup} ></LoadingButton>
//       </View>


//     </View>

//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center',
//     backgroundColor:'white'
//   },
//   image:{
//     bottom:150
//   },
//   loginview:{
//     bottom:250
//   },
//   login:{
//     fontFamily:'sans-serif',
//     fontWeight:'bold',
//     fontSize:20,
//   },
//   signupview:{
//     bottom:220
//   },
//   signup:{
//     fontFamily:'sans-serif',
//     fontWeight:'bold',
//     fontSize:20
//   }
// })

// export default Firstpage;










// import React from 'react';
// import {View,Text,StyleSheet,FontVariant} from 'react-native';
// import {TextInput,Button, configureFonts} from 'react-native-paper';

// const Login=() =>{
//     return(

//         <View style={styles.cotainer}>

//             <Text style={styles.myapp}> MyApp </Text>
//             <TextInput label="Username" mode='outlined' style={styles.textinput1}></TextInput>
//             <TextInput label="Password" mode='outlined' style={styles.textinput2}></TextInput>
//             <Button color='black' mode='text' style={styles.button1}> Forgot Password? </Button>
//             <Button mode='contained' style={styles.button2}> Login </Button>
//             <Text style={styles.or}> OR </Text>
//             <Button mode='contained' style={styles.button3}> register </Button>

//         </View>
//     )
// }

// const styles=StyleSheet.create({
//     cotainer:{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center',
//         backgroundColor:'#8cf2ff'
//     },

//     textinput1:{
//       width:350,
//       height:50
//     },

//     textinput2:{
//       width:350,
//       height:50
//     },

//     button1:{
//         left:100
      
//     },

//     button2:{
//         top:15,
//         width:350
//     },

//     or:{
//       top:30,
//       bottom:30,
//       fontWeight:"bold"
//     },

//     button3:{
//         top:45,
//         width:350
//     },

//     myapp:{
//       bottom:30,
//       fontSize:40,
//       fontStyle:"normal",
//       fontWeight:"bold"
//     }
// }

// )

// export default Login;

















Register

import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import { TextInput,Button } from 'react-native-paper';

const Register=() =>{

  return(

    <View style={styles.container}>

      <Text style={styles.myapp}>MyApp</Text>
      <Text style={styles.name}>Name</Text>
      <TextInput mode='outlined' style={styles.namein}></TextInput>
      <Text style={styles.dob}>DOB</Text>
      <TextInput mode='outlined' style={styles.dobin}></TextInput>
      <Text style={styles.gender}>Gender</Text>
      <Text style={styles.email}>E-mail</Text>
      <TextInput mode='outlined' style={styles.emailin}></TextInput>
      <Text style={styles.phone}>Phone</Text>
      <TextInput mode='outlined' style={styles.phonein}></TextInput>
      <Button mode='contained' color='#ff7878' dark='false' style={styles.button} >Register</Button>
      
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#8cf2ff'
  },
  myapp:{
    fontSize:40,
    fontStyle:"normal",
    fontWeight:"bold",
    bottom:100
  },
  name:{
    right:150,
    bottom:10,
    fontSize:23
  },
  namein:{
    width:280,
    height:45,
    bottom:50,
    left:40

    
  },
  dob:{
    fontSize:22,
    right:157
  },
  dobin:{
    bottom:40,
    width:280,
    height:45,
    
    left:40
  },
  gender:{
    top:10,
    fontSize:23,
    right:147
  },
  email:{
    top:70,
    fontSize:23,
    right:150
  },
  emailin:{
    width:280,
    height:45,
    top:30,
    left:40
  },
  phone:{
    top:80,
    fontSize:23,
    right:150
  },
  phonein:{
    width:280,
    height:45,
    top:40,
    left:40
  },
  button:{
    width:250,
    top:100
  },

})

export default Register;