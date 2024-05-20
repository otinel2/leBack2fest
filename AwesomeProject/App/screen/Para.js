import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Para = ({navigation}) => {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
    return (
    <View style={styles.container}>
        {/* <Pressable onPress={() => navigation.navigate("Profil")}>
          <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable> */}
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/profil.jpg')} style={styles.avatar} />
        <Text style={styles.profileName}>Jules Cesar</Text>
      </View>
      <View style={styles.tabContainer}>
        <Pressable onPress={() => navigation.navigate("Profil")}>
        <Text style={styles.tab}>Avantages</Text>
        </Pressable>
        <Text style={[styles.tab, styles.activeTab]}>Paramètres</Text>
      </View>

      <View style={styles.settingsContainer}>
        <Pressable onPress={() => navigation.navigate("Politique")} style={styles.settingItem}>
          <Icon name="lock-closed-outline" size={24} color="#00BFC3" />
          <Text style={styles.settingText}>Politique de confidentialité</Text>
        </Pressable>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="document-outline" size={24} color="#00BFC3" />
          <Text style={styles.settingText}>Mes données</Text>
        </TouchableOpacity>
        <View style={styles.settingItem}>
          <Icon name="notifications-outline" size={24} color="#00BFC3" />
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={(value) => setNotificationsEnabled(value)}
          />
        </View>
      </View>
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
  settingsContainer: {
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 10,
  },

  settingText: {
    color: '#FFFFFF',
    fontSize: 18,
    padding: 20,
  },
});

export default Para;
