import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenButtonTwentyEight = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.buttonTwentyEight}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentyNine')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '98%',
            height: 60,
            marginTop: 10,
            backgroundColor: '#246BFD',
            borderRadius: 10,
          }}>
          <Text
            style={[
              styles.textSignTwentyEight,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Continue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenTen')}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,
              marginBottom: 5,

              color: '#667085',
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwentyEight: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentyEight: {
    alignItems: 'center',
    marginTop: 20,
  },
  
  });
  
export default ScreenButtonTwentyEight