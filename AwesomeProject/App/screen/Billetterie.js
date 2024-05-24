import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';

const Billetterie = ({navigation}) => {
  const tickets = [
    { type: 'Journalier', description: 'Entrée pour une journée au festival\nSans hébergement', price: '55€' },
    { type: 'Pass 2 jours', description: 'Entrée pour 2 jours au festival\nSans hébergement', price: '130€' },
    { type: 'Pass Weekend', description: 'Entrée pour le weekend au festival\nSans hébergement', price: '180€' },
    { type: 'Pass Camping 2', description: 'Entrée pour 2 jours au festival\nAvec accès camping', price: '140€' },
    { type: 'Pass Camping 3', description: 'Entrée pour le weekend au festival\nAvec accès camping', price: '190€' },
    { type: 'Pass VIP', description: 'Entrée du festival pour le weekend avec accès au camping, plus entrée dans les loges des artistes', price: '240€' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable onPress={() => navigation.navigate("Home")}>
            <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Infos")}>
            <Text style={styles.header}>Infos Billetterie</Text>
        </Pressable>
        {tickets.map((ticket, index) => (
          <View key={index} style={styles.ticket}>
            <Text style={styles.ticketType}>{ticket.type}</Text>
            <Text style={styles.ticketDescription}>{ticket.description}</Text>
            <Text style={styles.ticketPrice}>{ticket.price}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fleche: {
    alignSelf: "flex-start",
    marginTop: Platform.OS === 'android' ? 70 : 40, // Adjust margin top for Android and iOS
    margin: 20,
    padding: 10,
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#051118',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#FF2273',
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },
  ticket: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF2273',
    margin: 20,
    padding: 10,
  },
  ticketType: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
  },
  ticketDescription: {
    fontSize: 16,
    color: '#fff',
    margin: 10,
  },
  ticketPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
  },
});

export default Billetterie;
