import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const Politique = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Billetterie")}>
          <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable>
    </View>
  );
};



const styles = StyleSheet.create({

  fleche :{
    alignSelf: "flex-start",
    marginTop: 70,
    margin: 20,
    padding: 10,
    width: 30,
    height: 30,
  },

});

export default Politique;
