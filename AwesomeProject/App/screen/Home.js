import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Pressable, Platform } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const App = ({navigation}) => {

//   const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
//   const dates = [
//   [null, null, null, null, null, 1, 2], 
//   [3, 4, 5, 6, 7, 8, 9],
//   [10, 11, 12, 13, 14, 15, 16],
//   [17, 18, 19, 20, 21, 22, 23],
//   [24, 25, 26, 27, 28, 29, 30]
// ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Image source={require('../../assets/new_logo.png')} style={styles.radioImage} resizeMode='contain' />
      </View>
    
      <View style={styles.programmeContainer}>
        <Text style={styles.programmeTitle}>Programme</Text>
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker}>
            <Picker.Item style={styles.titleItem} label="Ven.21" value="ven. 21" />
            <Picker.Item style={styles.item} label="17h00       -       Myd  -  scène I " value="ven. 21" />
            <Picker.Item style={styles.item} label="17h30       -       Paul Lock  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="18h00       -       Kungs  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="18h30       -       Tom Santa  -  scène II " value="ven. 21" />
            <Picker.Item style={styles.item} label="19h00       -       Ivan Giovanni  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="19h30       -       Kas:st  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="20h00       -       Dr Peacock  -  scène I " value="ven. 21" />
            <Picker.Item style={styles.item} label="20h30       -       Nico Moreno  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="21h00       -       Byorn  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="21h30       -       Trinix  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="22h00       -       Lauwend  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="22h30       -       Vladimir Cauchemar  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="23h00       -       Mandragora  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="23h30       -       D-Frek  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="00h00       -       Vaent  -  scène I" value="ven. 21" />
          </Picker>
          <Picker style={styles.picker}>
            <Picker.Item style={styles.titleItem} label="Sam.22" value="Sam.22" />
            <Picker.Item style={styles.item} label="17h00       -       Myd  -  scène I " value="ven. 21" />
            <Picker.Item style={styles.item} label="17h30       -       Paul Lock  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="18h00       -       Kungs  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="18h30       -       Tom Santa  -  scène II " value="ven. 21" />
            <Picker.Item style={styles.item} label="19h00       -       Ivan Giovanni  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="19h30       -       Kas:st  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="20h00       -       Dr Peacock  -  scène I " value="ven. 21" />
            <Picker.Item style={styles.item} label="20h30       -       Nico Moreno  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="21h00       -       Byorn  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="21h30       -       Trinix  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="22h00       -       Lauwend  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="22h30       -       Vladimir Cauchemar  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="23h00       -       Mandragora  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="23h30       -       D-Frek  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="00h00       -       Vaent  -  scène I" value="ven. 21" />
          </Picker>
          <Picker style={styles.picker}>
            <Picker.Item style={styles.titleItem} label="Dim.23" value="Dim.23" />
            <Picker.Item style={styles.item} label="17h00       -       Myd  -  scène I " value="ven. 21" />
            <Picker.Item style={styles.item} label="17h30       -       Paul Lock  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="18h00       -       Kungs  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="18h30       -       Tom Santa  -  scène II " value="ven. 21" />
            <Picker.Item style={styles.item} label="19h00       -       Ivan Giovanni  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="19h30       -       Kas:st  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="20h00       -       Dr Peacock  -  scène I " value="ven. 21" />
            <Picker.Item style={styles.item} label="20h30       -       Nico Moreno  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="21h00       -       Byorn  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="21h30       -       Trinix  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="22h00       -       Lauwend  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="22h30       -       Vladimir Cauchemar  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="23h00       -       Mandragora  -  scène I" value="ven. 21" />
            <Picker.Item style={styles.item} label="23h30       -       D-Frek  -  scène II" value="ven. 21" />
            <Picker.Item style={styles.item} label="00h00       -       Vaent  -  scène I" value="ven. 21" />
          </Picker>
        </View>

        {/* <View style={styles.calendar}>
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
        </View> */}

      </View>

      <View style={styles.billetterieContainer}>
        <Pressable onPress={() => navigation.navigate("Billetterie")}>  
          <Text style={styles.billetterieTitle}>Billetterie</Text>
          <Text style={styles.billetterieText}>
            Ici vous pourrez avoir toutes les informations sur vos billets, les prix, ce qu'il comprend...
            Nous proposons de large service tel que les places de camping ou des activités. Prenez dès
            maintenant vos billets sur l'application.
          </Text>
          <Image source={require('../../assets/fleche-rose.png')} style={styles.fleche} />
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
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioImage: {
    width: 250,
    height: 100,
    margin: 20,
  },
  programmeContainer: {
    backgroundColor: '#00BFC3',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  programmeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#000',
  },
  titleItem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
  },
  billetterieContainer: {
    backgroundColor: '#FF2273',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  billetterieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  billetterieText: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  fleche: {
    alignSelf: 'center',
    margin: 20,
    width: 30,
    height: 30,
  },
  artistsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 20,
  },
  artist: {
    alignItems: 'center',
    marginVertical: 10,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  artistText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default App;
