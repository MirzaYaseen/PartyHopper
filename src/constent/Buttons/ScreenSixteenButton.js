import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenSixteenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
     <View style={styles.buttonSixteen}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignSixteen,
              {
                color: '#246BFD',
              },
            ]}>
            How your phone number is used
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenSeventeen')}
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
              styles.textSignSixteen,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Verify
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,

              color: '#667085',
            }}>
            Why can't I Skip?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignSixteen: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonSixteen: {
    alignItems: 'center',
    marginTop: 100,
  },
  
  });
export default ScreenSixteenButton