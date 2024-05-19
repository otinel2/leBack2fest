import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
// import Video from 'react-native-video';
import Icon from "react-native-vector-icons/Ionicons";

// export default function Biscuit() {

const Biscuit = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable>
      <View style={styles.header}>
        <Image source={require('../../assets/bisuit.jpg')} style={styles.image} />
        <Text style={styles.title}>Biscuit</Text>
      </View>
      <View style={styles.fest}>
        <Text style={styles.text}>21 Juin</Text>
        <Text style={styles.text}>18h00</Text>
        <Text style={styles.text}>Scène II</Text>
      </View>
      <View style={styles.desc}>
        <Text  style={styles.text}>
        Biscuit, c’est ce DJ cool qui fait danser tout le monde avec ses sons géniaux ! Né Valentin Brunel en 1996, ce gars a commencé à jouer du piano quand il était tout petit. Mais c’est en 2016 qu’il est devenu super célèbre avec son remix de "This Girl". Depuis, il enchaîne les tubes et les soirées de folie. Avec ses mixes de house et de funk, il met l’ambiance partout où il passe. Biscuit, c’est un peu comme le héros de la fête, celui qui te donne envie de danser jusqu’au bout de la nuit !
        </Text>
      </View>
      {/* <Video source={{uri: 'https://www.youtube.com/watch?v=QH2a6V-W87U'}}/> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  fleche :{
    alignSelf: "flex-start",
    marginTop: 70,
    margin: 20,
    padding: 10,
    width: 30,
    height: 30,
  },

  container : {
    backgroundColor: '#051118',

  },

  header: {
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 200,
    margin: 20,
    padding: 10,
    borderColor: '#FFD33B',
    borderWidth:2,
  },

  fest: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap : 'wrap',
    margin: 20,
    padding: 10,
  },
  title:{
    color:'white',
    fontSize : 24,
    // fontFamily : 'Nunito',
  },

  text:{
    color:'white',
    fontSize : 18,
    // fontFamily : 'Nunito',
  },

  desc :{
    margin: 20,
    padding: 10,
  },
})

export default Biscuit;