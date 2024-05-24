import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, Platform } from 'react-native';

const CommunityScreen = () => {
  const communities = [
    { id: 1, name: 'KYDS❤', members: 1500, date: '12 août 2023', image: require('../../assets/kyds.png') },
    { id: 2, name: 'Mandr@Gora', members: 1200, date: '12 août 2023', image: require('../../assets/mandragora.png') },
    { id: 3, name: 'Petit biscuit fan', members: 1002, date: '12 août 2023', image: require('../../assets/bisuit.jpg') },
    { id: 4, name: 'crew Poacock', members: 1020, date: '12 août 2023', image: require('../../assets/crewpoacock.png') },
    { id: 5, name: 'Fans de Kas:st', members: 1250, date: '13 août 2023', image: require('../../assets/kasst.png') },
    { id: 6, name: 'Teams KUNGS', members: 1020, date: '12 août 2023', image: require('../../assets/kungs.jpg') },
  ];

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Recherche" />
      <ScrollView>
        {communities.map((community) => (
          <View key={community.id} style={styles.communityCard}>
            <Image source={community.image} style={styles.communityImage} />
            <View style={styles.communityInfo}>
              <Text style={styles.communityName}>{community.name}</Text>
              <Text style={styles.communityDetails}>{community.members} membres</Text>
              <Text style={styles.communityDetails}>créée le {community.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 70,
  },
  header: {
    color: '#051118',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 41,
    height: 50,
  },
  communityCard: {
    flexDirection: 'row',
    backgroundColor: '#00BFC3',
    borderRadius: 8,
    marginBottom: 33,
    width: '100%',
    height: 106,
  },
  communityImage: {
    width: 106,
    height: 106,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  communityInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  communityName: {
    fontSize: 32,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Nunito' : 'sans-serif',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  communityDetails: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Nunito' : 'sans-serif',
    color: '#FFFFFF',
    opacity: 0.7,
    fontWeight: '400',
  },
});

export default CommunityScreen;
