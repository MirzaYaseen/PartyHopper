import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentySevenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
       <View style={styles.buttonTwentySeven}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignTwentySeven,
              {
                color: '#246BFD',
              },
            ]}>
            Learn More
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentyEight')}
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
              styles.textSignTwentySeven,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Continue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,

              color: '#667085',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwentySeven: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentySeven: {
    alignItems: 'center',
    marginTop: 270,
  },
  
  });
export default ScreenTwentySevenButton