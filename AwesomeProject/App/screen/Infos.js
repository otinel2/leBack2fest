import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, SafeAreaView } from 'react-native';

const Infos = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollcontainer}>
            <Pressable onPress={() => navigation.navigate("Billetterie")}>
                <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
            </Pressable>
            <Text style={styles.header}>Infos billetterie</Text>
            <View style={styles.all}>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>🎟️ Billets Disponibles:</Text>
                    <Text style={styles.text}>• Pass Journée: Accès à toutes les activités du jour.</Text>
                    <Text style={styles.text}>• Pass Week-end: Profitez de l'ensemble du festival pendant tout le week-end.</Text>
                    <Text style={styles.text}>• Pass VIP: Rencontrez vos artistes préférés et profitez de privilèges exclusifs.</Text>
                </View>
                <View style={styles.content}>        
                    <Text style={styles.sectionTitle}>🏠 Logement:</Text>
                    <Text style={styles.text}>Des options d'hébergement sont disponibles pour rendre votre expérience encore plus confortable.</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>🌟 Pass VIP:</Text>
                    <Text style={styles.text}>Obtenez des accès spéciaux et des rencontres exclusives avec les artistes !</Text>
                    <Text style={styles.footerText}>Réservez vos billets dès maintenant et préparez-vous à vivre une expérience inoubliable au Festival ColorFest !</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#051118',
  },

  scrollcontainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  fleche :{
    alignSelf: "flex-start",
    marginTop: 70,
    margin: 20,
    padding: 10,
    width: 30,
    height: 30,
  },

  header: {
    color: '#fff',
    fontSize: 24,
     // fontFamily:'Nunito',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    padding: 10,
    // marginTop : -20,
  },

  content: {
    borderColor: '#FF2273',
    borderWidth: 2,
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    // fontFamily:'Nunito',
  },

  text: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
    // fontFamily:'Nunito',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
    // fontFamily:'Nunito',
  },

  all :{
    marginBottom : 30,
  },
});

export default Infos;
