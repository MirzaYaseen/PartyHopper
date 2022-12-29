import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentyTwoButton = () => {
  const navigation = useNavigation();
  return (
    <View>
         <View style={styles.buttonTwentyTwo}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignTwentyTwo,
              {
                color: '#246BFD',
              },
            ]}>
            How your diplay picture is used
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentyThree')}
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
              styles.textSignTwentyTwo,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Add Photo
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
  textSignTwentyTwo: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentyTwo: {
    alignItems: 'center',
    marginTop: 420,
  },
  
  });
export default ScreenTwentyTwoButton