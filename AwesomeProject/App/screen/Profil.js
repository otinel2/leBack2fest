import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const Profil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/profil.jpg')} style={styles.avatar} />
        <Text style={styles.profileName}>Jules Cesar</Text>
      </View>
      <View style={styles.tabContainer}>
        <Text style={[styles.tab, styles.activeTab]}>Avantages</Text>
        <Pressable onPress={() => navigation.navigate("Para")}>
        <Text style={styles.tab}>Paramètres</Text>
        </Pressable>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsTitle}>Vos FEST POINTS</Text>
        <Text style={styles.pointsValue}>35 POINTS</Text>
        <Text style={styles.pointsSubtitle}>À utilisé que sur le temps du FESTIVAL</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate("QRprofil")} style={styles.qrButton}>
        <Text style={styles.qrButtonText}>Accéder à votre QR code</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051118',
    alignItems: 'center',
    paddingTop: 70,
    
  },
  profileContainer: {
    alignItems: 'center',
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },

  profileName: {
    color: '#fff',
    fontSize: 24,
    // fontFamily :'Nunito',
  },

  tabContainer: {
    flexDirection: 'row',
    margin: 20,
    padding: 10,
  },
  tab: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 20,
  },
  activeTab: {
    color: '#00BFC3',
    borderBottomWidth: 2,
    borderBottomColor: '#00BFC3',
  },
  pointsContainer: {
    backgroundColor: '#FF2273',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
  },
  pointsTitle: {
    color: '#fff',
    fontSize: 18,
    // fontFamily:'Nunito',
    margin: 10,
  },
  pointsValue: {
    color: '#fff',
    fontSize: 24,
    margin: 10,
  },
  pointsSubtitle: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
    textAlign:'center',
  },
  progressBarContainer: {
    width: '100%',
    backgroundColor: '#fff',
    height: 10,
    borderRadius: 5,
  },
  progressBar: {
    width: '30%',
    height: '100%',
    backgroundColor: '#FFD33B',
    borderRadius: 5,
  },
  qrButton: {
    backgroundColor: '#FF2273',
    borderRadius: 20,
    margin: 20,
    padding: 20,
    width :'80%',

  },
  qrButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center',
  },
});

export default Profil;
