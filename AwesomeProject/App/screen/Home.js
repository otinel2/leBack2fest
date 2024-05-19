import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';




const App = ({navigation}) => {

  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const dates = [
  [null, null, null, null, null, 1, 2], 
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30]
];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/new_logo.png')} style={styles.radioImage} />
      </View>
      
      <View style={styles.programmeContainer}>
        <Text style={styles.programmeTitle}>Programme</Text>
        <View style={styles.calendar}>
          <View style={styles.week}>
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.dayOfWeek}>{day}</Text>
            ))}
          </View>
          {dates.map((week, index) => (
            <View key={index} style={styles.week}>
              {week.map((date, idx) => (
                <Text key={idx} style={[
                  styles.date,
                  date === 21 || date === 22 || date === 23 ? styles.selectedDate : null,
                  date === null ? styles.emptyDate : null
                ]}>
                  {date || ''}
                </Text>
              ))}
            </View>
          ))}
        </View>

      </View>
      
      <View style={styles.billetterieContainer}>
        <Pressable onPress={() => navigation.navigate("Billetterie")}>  
          <Text style={styles.billetterieTitle}>Billetterie</Text>
          <Text style={styles.billetterieText}>
            Ici vous pourrez avoir toutes les informations sur vos billets, les prix, ce qu'il comprend...
            Nous proposons de large service tel que les places de camping ou des activités. Prenez dès
            maintenant vos billets sur l'application.
          </Text>
          <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable>
      </View>

      <View style={styles.artistsContainer}>
        <View style={styles.artist}>
        <Pressable onPress={() => navigation.navigate("Kungs")}>
          <Image source={require('../../assets/kungs.jpg')} style={styles.artistImage} />
        </Pressable>
        <Text style={styles.artistText}>Kungs</Text>
        </View>
        <View style={styles.artist}>
          <Pressable onPress={() => navigation.navigate("Lauwend")}>
            <Image source={require('../../assets/lauwend.jpg')} style={styles.artistImage} />
          </Pressable>
          <Text style={styles.artistText}>Lauwend</Text>
        </View>
        <View style={styles.artist}>
          <Pressable onPress={() => navigation.navigate("Biscuit")}>
            <Image source={require('../../assets/bisuit.jpg')} style={styles.artistImage} />
          </Pressable>
          <Text style={styles.artistText}>Petit biscuit</Text>
        </View>
        <View style={styles.artist}>
          <Pressable onPress={() => navigation.navigate("Myd")}>
            <Image source={require('../../assets/Myd.jpg')} style={styles.artistImage} />
          </Pressable>
          <Text style={styles.artistText}>Myd</Text>
        </View>
        <View style={styles.artist}>
          <Pressable onPress={() => navigation.navigate("Vaent")}>
            <Image source={require('../../assets/vaent.png')} style={styles.artistImage} />
          </Pressable>
          <Text style={styles.artistText}>Vaent</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051118',
  },

  // Logo
  header: {
    alignItems: 'center',

  },
  radioImage: {
    width: "70%",
    height: 160,
    marginTop: 70,
    margin: 20,
  },

  // Programme
  programmeContainer: {
    paddingHorizontal: 20,
    borderColor: "#00BFC3",
    borderWidth: 2,
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },
  programmeTitle: {
    color: '#00BFC3',
    fontSize: 24,
    // fontFamily: 'Nunito',
    textAlign: 'center',
    margin:10,
  },
  calendar: {
    margin: 10,
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   // fontFamily: 'Nunito',
  },
  dayOfWeek: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 40,
    // fontFamily: 'Nunito',
  },
  date: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    width: 40,
    padding: 10,
    // fontFamily: 'Nunito',
  },
  selectedDate: {
    backgroundColor: '#00BFC3',
    borderRadius: 20,
  },
  emptyDate: {
    color: 'transparent',
  },



  // Billetterie
  billetterieContainer: {
    paddingHorizontal: 20,
    borderColor: "#FF2273",
    borderWidth: 2,
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },
  billetterieTitle: {
    color: '#FF2273',
    fontSize: 24,
    // fontFamily: 'Nunito',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    marginBottom:10,
  },
  billetterieText: {
    color: '#fff',
    fontSize: 16,
  },

  fleche :{
    alignSelf: "flex-end",
    margin: 20,
    padding: 10,
    width: 30,
    height: 30,
    transform: [{rotate: '180deg'}],
  },

  // Artistes
  artistsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap : 'wrap',
    margin: 20,
    padding: 10,

  },
  artist: {
    alignItems: 'center',
  },
  artistImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 5,
    borderColor: '#FFD33B',
    borderWidth:2,
  },
  artistText: {
    color: '#FFD33B',
    fontSize: 16,
    marginBottom:20,
    // fontFamily : 'Nunito',
  }
});

export default App;
