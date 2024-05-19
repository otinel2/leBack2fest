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
        <Text style={styles.title}> Petit Biscuit</Text>
      </View>
      <View style={styles.fest}>
        <Text style={styles.text}>23 Juin</Text>
        <Text style={styles.text}>15h00</Text>
        <Text style={styles.text}>Scène I</Text>
      </View>
      <View style={styles.desc}>
        <Text  style={styles.text}>
        Petit Biscuit, c’est ce jeune prodige de la musique électronique qui fait voyager avec ses sons envoûtants ! Né Mehdi Benjelloun en 1999, il a commencé à composer de la musique dans sa chambre dès son plus jeune âge. Mais c’est en 2015, avec son morceau "Sunset Lover", qu’il est devenu célèbre. Depuis, il enflamme les festivals et les soirées avec ses beats entraînants et ses mélodies planantes. Petit Biscuit, c’est un peu comme le magicien de la musique, celui qui te transporte dans un autre univers dès que tu écoutes ses morceaux.
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