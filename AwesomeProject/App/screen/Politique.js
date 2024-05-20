import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';

const Politique = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView>
        <Pressable onPress={() => navigation.navigate("Para")}>
          <Image source={require('../../assets/fleche.png')} style={styles.fleche} />
        </Pressable>
        <Text style={styles.text} >
        En utilisant notre application, vous consentez à la collecte et à l'utilisation de vos informations conformément à cette politique.
Collecte d'Informations
Lorsque vous utilisez notre application, nous pouvons collecter certaines informations personnelles vous concernant, notamment:
Informations d'Identification Personnelles: Cela peut inclure votre nom, votre adresse e-mail, votre numéro de téléphone, et d'autres informations similaires que vous nous fournissez volontairement lors du processus de création de compte ou de connexion.
Informations de Connexion: Nous pouvons collecter des informations sur votre appareil, telles que votre adresse IP, le type de navigateur que vous utilisez, votre fournisseur de services Internet, les pages que vous avez visitées sur notre application et d'autres données de diagnostic.
Utilisation des Informations
Les informations que nous collectons sont utilisées dans le but de:
Fournir et Améliorer nos Services: Nous utilisons vos informations pour vous fournir un accès sécurisé à notre application et pour améliorer continuellement votre expérience utilisateur.
Communication: Nous pouvons utiliser vos informations pour vous envoyer des notifications importantes concernant les changements apportés à notre application, nos conditions d'utilisation et notre politique de confidentialité.
Analyse et Recherche: Nous pouvons utiliser vos informations pour analyser les tendances d'utilisation, diagnostiquer les problèmes techniques et effectuer des recherches afin d'améliorer nos services.
Partage d'Informations
Nous ne partagerons vos informations personnelles avec des tiers que dans les circonstances suivantes:
Partenaires de Service: Nous pouvons partager vos informations avec des tiers qui fournissent des services en notre nom, tels que le traitement des paiements, l'analyse des données et d'autres services techniques.
Conformité Juridique: Nous pouvons divulguer vos informations si nous croyons de bonne foi que cela est nécessaire pour (a) nous conformer à une obligation légale, (b) protéger et défendre nos droits ou notre propriété, (c) prévenir ou enquêter sur toute fraude ou activité illégale.
Sécurité des Données
Nous nous engageons à protéger la sécurité de vos informations personnelles. Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation, toute altération ou toute destruction.
Vos Choix et Contrôles
Vous avez le droit de choisir comment vos informations sont collectées, utilisées et partagées. Vous pouvez accéder et mettre à jour vos informations personnelles à tout moment en accédant à votre compte dans notre application.
Modifications de la Politique de Confidentialité
Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute modification sera effective dès la publication de la Politique de Confidentialité mise à jour dans notre application. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance de toute modification.
        </Text>
        </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: '#051118',
    paddingTop: 70,
  },
  text: {
    color:'#ffff',  
    margin: 20,
    padding: 10,
  },

});

export default Politique;
