import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentyNineButton = () => {
  const navigation = useNavigation();
  return (
    <View>
    <View style={styles.buttonTwentyNine}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignTwentyNine,
              {
                color: '#246BFD',
              },
            ]}>
            Learn More
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenThirty')}
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
              styles.textSignTwentyNine,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Enable
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,

              color: '#667085',
            }}>
            Proceed without faceID
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwentyNine: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentyNine: {
    alignItems: 'center',
    marginTop: 340,
  },
  
  });
export default ScreenTwentyNineButton