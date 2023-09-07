import * as React from 'react';
import { View, Button, Text, StyleSheet, Pressable, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // welcome screen code
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo.png')}
        resizeMode='center'
        accessible={true}
        accessibilityLabel= {'Little Lemon Logo'} />
      <Text style={styles.message}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable onPress={() => navigation.navigate('Subscribe')}
        style={
          ({ pressed }) => [{ backgroundColor: pressed ? 'gray' : '#004225', }, styles.btnContainer,]}>

        <Text style={styles.btn}>NewsLetter</Text>
      </Pressable>
    </View>
  );
}



export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingVertical: 80,
  },
  image: {
    width: 200,
    height: 250,
    margin: 50,
  },
  message: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 80
  },
  btnContainer: {
    borderRadius: 8,
  },
  btn: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    textAlign: 'center'
  }
})
