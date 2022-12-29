import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenSeventeenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
       <View style={styles.buttonSeventeen}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignSeventeen,
              {
                color: '#246BFD',
              },
            ]}>
            How your phone number is used
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenEighteen')}
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
              styles.textSignSeventeen,
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
  textSignSeventeen: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonSeventeen: {
    alignItems: 'center',
    marginTop: 130,
  },
  
  });
export default ScreenSeventeenButton