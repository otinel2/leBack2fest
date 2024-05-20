// Version Scroll

import { View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import React from 'react'

export default function Map() {
  return (
    <ScrollView contentContainerStyle={styles.scroll} horizontal={true}>
      <ScrollView>
      <View style={styles.container}>
        <Image source={require('../../assets/map.png')} style={styles.avatar} />

      </View>
      </ScrollView>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#051118',
    alignItems: 'center',
    padding: 70,
    
  },
})


// Version Zoom & Dézoome


// import React from 'react';
// import { View, StyleSheet, Image, ScrollView } from 'react-native';
// import { GestureHandlerRootView, PinchGestureHandler } from 'react-native-gesture-handler';

// export default function Map() {
//   const [scale, setScale] = React.useState(1);

//   const onPinchEvent = event => {
//     setScale(event.nativeEvent.scale);
//   };

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <ScrollView
//         maximumZoomScale={5}
//         minimumZoomScale={1}
//         contentContainerStyle={styles.scrollViewContainer}
//       >
//         <PinchGestureHandler onGestureEvent={onPinchEvent}>
//           <View style={styles.imageContainer}>
//             <Image
//               source={require('../../assets/map.png')}
//               style={[styles.image, { transform: [{ scale }] }]}
//               resizeMode="contain"
//             />
//           </View>
//         </PinchGestureHandler>
//       </ScrollView>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollViewContainer: {
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//   },
// });
