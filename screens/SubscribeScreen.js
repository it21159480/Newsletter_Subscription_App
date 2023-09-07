import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {

  const [email, onChangeEmail] = useState('');
  const isEmailValid = validateEmail(email);

  const Button = ({ onPress, children, disabled }) => {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.buttonContainer, disabled && styles.disabled]}
        disabled={disabled}
      >
        <Text style={styles.btn}>{children}</Text>
      </Pressable>
    );
  };

  // Add subscribe screen code here
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode='center'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'} />
      <Text style={styles.message}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Type your email'}
        keyboardType={'email-address'}
      />
      <Button
        onPress={() => {
          alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!isEmailValid}
      >
        Subscribe
      </Button>
    </View>
  );
};

export default SubscribeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  image: {
    width: 150,
    height: 200,
    alignSelf: 'center'
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20
  },
  inputBox: {
    height: 40,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    borderColor: '#436100',
    backgroundColor: '#EDEFEE',
    marginBottom: 30
  },
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  btn: {
    fontSize: 16,
    color: 'white',
  }
})