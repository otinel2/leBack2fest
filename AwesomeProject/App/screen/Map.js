import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default function Map() {
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker style={styles.picker}>
          <Picker.Item style={styles.item} label="Ven.21" value="ven. 21" />
          <Picker.Item style={styles.item} label="Myd" value="ven. 21" />
          <Picker.Item style={styles.item} label="14h00" value="ven. 21" />
          <Picker.Item style={styles.item} label="C++" value="ven. 21" />
          <Picker.Item style={styles.item} label="Python" value="ven. 21" />
          <Picker.Item style={styles.item} label="Java" value="ven. 21" />
        </Picker>
        <Picker style={styles.picker}>
          <Picker.Item label="Ven.21" value="ven. 21" />
          <Picker.Item label="Myd" value="ven. 21" />
          <Picker.Item label="14h00" value="ven. 21" />
          <Picker.Item label="C++" value="ven. 21" />
          <Picker.Item label="Python" value="ven. 21" />
          <Picker.Item label="Java" value="ven. 21" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picker: {
    margin: 20,
    padding: 10,
    height: 50,
    width: 150,
  },

  item :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width : '33%',
  }
});
