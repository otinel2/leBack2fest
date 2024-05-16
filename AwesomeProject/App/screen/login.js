import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

const logo = require("../../assets/new_logo.png");

const LoginForm = ({ navigation }) => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.replace("HomeTab");  
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>Connexion</Text>
      <View 
      style={styles.inputView}
      >
        <TextInput
          style={styles.input}
          placeholder='Email or Username'
          placeholderTextColor="white" 
          value={username}
          onChangeText={setUsername}

        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor="white" 
          secureTextEntry
          value={password}
          onChangeText={setPassword}

        />
      </View>
      <View 
      style={styles.rememberView}
      >
        <View>
          <Pressable onPress={() => Alert.alert("Mot de passe oublié !")}>
            <Text style={styles.forgetText}>Mot de passe oublié ?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </Pressable>
      </View>
      <Text style={styles.signup}> S'inscrire</Text>
    </SafeAreaView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 102,
    backgroundColor: "#051118",
    width : "100%",
    paddingBottom:100,
  },
  image: {
    height: 160,
    width: 170,
    margin:20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // fontFamily: "Nunito",
    textAlign: "center",
    margin: 20,
    color: "white"
  },

  // Input Text
  inputView: {
    width: "100%",

  },
  input: {
    paddingHorizontal: 20,
    borderColor: "#00BFC3",
    color: "white",
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 18,
    margin: 20,
    padding: 10,

  },

  // Mot de passe
  rememberView: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop: -8,
    margin:20,

  },
  forgetText: {
    fontSize: 15,
    color: "white"
  },

  // Bouton
  button: {
    backgroundColor: "#FF2273",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin:20,
    padding:10
  },

  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    // fontFamily:"Nunito",
    },

  buttonView: {
    width: "100%",
  },


  // S'inscrire
  signup: {
    color: "#FF2273",
    fontSize: 15
  }
});