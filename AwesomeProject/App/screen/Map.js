import { View, Text, ScrollView, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';

export default function Map() {
  return (
    <ScrollView contentContainerStyle={styles.scroll} horizontal={true}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../assets/map.png')} style={styles.image} />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 800,
    height: 800,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#051118',
    alignItems: 'center',
    padding: Platform.OS === 'ios' ? 60 : 70,
  },
});
