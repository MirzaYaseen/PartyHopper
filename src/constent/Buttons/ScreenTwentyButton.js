import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentyButton = () => {
  const navigation = useNavigation();
  return (
    <View>
     <View style={styles.buttonTwenty}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignTwenty,
              {
                color: '#246BFD',
              },
            ]}>
            Learn More
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentyOne')}
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
              styles.textSignTwenty,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,

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
  textSignTwenty: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwenty: {
    alignItems: 'center',
    marginTop: 380,
  },
  
  });
export default ScreenTwentyButton