// import React, { useState } from 'react';
// import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

// const logo = require("../../assets/new_logo.png");

// const LoginForm = ({ navigation }) => {
//   const [click, setClick] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     navigation.replace("HomeTab");  
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Image source={logo} style={styles.image} resizeMode='contain' />
//       <Text style={styles.title}>Connexion</Text>
//       <View 
//       style={styles.inputView}
//       >
//         <TextInput
//           style={styles.input}
//           placeholder='Email or Username'
//           placeholderTextColor="white" 
//           value={username}
//           onChangeText={setUsername}

//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Password'
//           placeholderTextColor="white" 
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}

//         />
//       </View>
//       <View 
//       style={styles.rememberView}
//       >
//         <View>
//           <Pressable onPress={() => Alert.alert("Mot de passe oublié !")}>
//             <Text style={styles.forgetText}>Mot de passe oublié ?</Text>
//           </Pressable>
//         </View>
//       </View>
//       <View style={styles.buttonView}>
//         <Pressable
//           style={styles.button}
//           onPress={handleLogin}
//         >
//           <Text style={styles.buttonText}>Se connecter</Text>
//         </Pressable>
//       </View>
//       <Text style={styles.signup}> S'inscrire</Text>
//     </SafeAreaView>
//   );
// };

// export default LoginForm;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     paddingTop: 102,
//     backgroundColor: "#051118",
//     width : "100%",
//     paddingBottom:100,
//   },
//   image: {
//     height: 160,
//     width: 170,
//     margin:20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     // fontFamily: "Nunito",
//     textAlign: "center",
//     margin: 20,
//     color: "white"
//   },

//   // Input Text
//   inputView: {
//     width: "100%",

//   },
//   input: {
//     paddingHorizontal: 20,
//     borderColor: "#00BFC3",
//     color: "white",
//     borderWidth: 2,
//     borderRadius: 20,
//     fontSize: 18,
//     margin: 20,
//     padding: 10,

//   },

//   // Mot de passe
//   rememberView: {
//     width: "100%",
//     paddingHorizontal: 40,
//     marginTop: -8,
//     margin:20,

//   },
//   forgetText: {
//     fontSize: 15,
//     color: "white"
//   },

//   // Bouton
//   button: {
//     backgroundColor: "#FF2273",
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     margin:20,
//     padding:10
//   },

//   buttonText: {
//     color: "white",
//     fontSize: 24,
//     fontWeight: "bold",
//     // fontFamily:"Nunito",
//     },

//   buttonView: {
//     width: "100%",
//   },


//   // S'inscrire
//   signup: {
//     color: "#FF2273",
//     fontSize: 15
//   }
// });

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image, SafeAreaView, Platform } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace("HomeTab");  
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/new_logo.png')} style={styles.logo} resizeMode='contain' />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051118',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 20 : 0, // Adjust padding for Android
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 20,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#FF2273',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;
