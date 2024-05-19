import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRprofil = ({navigation}) => {
  return (
    <View style={styles.container}>
        {/* <Pressable onPress={() => navigation.navigate("Billetterie")}>
          <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable> */}
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/profil.jpg')} style={styles.avatar} />
        <Text style={styles.profileName}>Jules Cesar</Text>
      </View>
      <View style={styles.tabContainer}>
        <Pressable onPress={() => navigation.navigate("Profil")}>
        <Text style={[styles.tab, styles.activeTab]}>Avantages</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Para")}>
        <Text style={styles.tab}>Paramètres</Text>
        </Pressable>
      </View>
      <QRCode
        // value="https://example.com" // Remplacez par la valeur du QR code souhaitée
        size={200}
        backgroundColor="white"
      />
    </View>
  );
};



const styles = StyleSheet.create({

  // fleche :{
  //   alignSelf: "flex-start",
  //   marginTop: 70,
  //   margin: 20,
  //   padding: 10,
  //   width: 30,
  //   height: 30,
  // },

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
});

export default QRprofil;
