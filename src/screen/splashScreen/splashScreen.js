import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../constent/Colors';

const splashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ScreenEight'); //welcome
    }, 5000);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.wel}>Welcome</Text>
      <Text style={styles.title}>Real Party Hopper</Text>
    </View>
  );
};

export default splashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0066',
  },
  title: {
    color: Colors.white,
    fontSize: 20,
  },
  wel: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
