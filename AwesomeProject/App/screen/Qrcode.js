import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Qrcode = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
// Alerte qrcode scanner
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
    alert(`QR Code Scanné: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Demande de permission pour accéder à la caméra...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Accès à la caméra refusé</Text>;
  }
// Aprés l'alerte 
  return (
    <View style={styles.container}>
      {!scanned ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <View style={styles.scannedContainer}>
          <Text style={styles.text}>QR Code Scanné :</Text>
          <Text style={styles.dataText}>{data}</Text>
          <Pressable onPress={() => setScanned(false)}>
            <Text  style={styles.bouton}>Scannez de nouveau !</Text>
            </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#051118',
  },
  scannedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: '#ffff',
  },
  dataText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ffff',
  },
  bouton:{
    fontSize: 24,
    // fontFamily:'Nunito',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#FF2273',
    borderRadius: 20,
    margin: 20,
    padding: 10,
  }
});

export default Qrcode;
