import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
// import Video from 'react-native-video';
import Icon from "react-native-vector-icons/Ionicons";

// export default function Lauwend() {

const Lauwend = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable>
      <View style={styles.header}>
        <Image source={require('../../assets/lauwend.jpg')} style={styles.image} />
        <Text style={styles.title}>Lauwend</Text>
      </View>
      <View style={styles.festival}>
        <View style={styles.fest}>
          <Text style={styles.text}>21 Juin</Text>
          <Text style={styles.text}>22h00</Text>
          <Text style={styles.text}>Scène I</Text>
        </View>
        <View style={styles.fest}>
          <Text style={styles.text}>22 Juin</Text>
          <Text style={styles.text}>19h00</Text>
          <Text style={styles.text}>Scène I</Text>
        </View>
        <View style={styles.fest}>
          <Text style={styles.text}>23 Juin</Text>
          <Text style={styles.text}>20h30</Text>
          <Text style={styles.text}>Scène II</Text>
        </View>
      </View>
      <View style={styles.desc}>
        <Text  style={styles.text}>
        Lauv, c’est ce chanteur trop cool avec des chansons qui touchent le cœur ! Né Ari Staprans Leff en 1994, il a grandi en aimant la musique et en écrivant des chansons. Mais c’est en 2015 qu’il a commencé à se faire connaître avec son premier single "The Other". Depuis, il a conquis le monde avec ses tubes et ses paroles super touchantes. Avec sa voix douce et ses mélodies entraînantes, Lauv arrive à exprimer des émotions que tout le monde peut ressentir. C’est un peu comme le meilleur ami qui te comprend toujours, même quand tu ne sais pas comment te sentir.
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

  festival: {
    margin: 20,
    padding: 10,
  },

  fest: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap : 'wrap',
    marginTop : 20,
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

export default Lauwend;