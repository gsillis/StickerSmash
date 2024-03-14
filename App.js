import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ImageViewer  from './components/ImageViewer';
import Button from './components/Buttons';

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label= "Choose a photo" />
        <Button label= "Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1/ 3,
    alignItems: 'center'
  },
});
