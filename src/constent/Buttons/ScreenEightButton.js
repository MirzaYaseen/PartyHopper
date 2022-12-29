import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenEightButton = () => {
  const navigation = useNavigation();
  return (

    <View>
      <View style={styles.buttonEight}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#246BFD',
                  },
                ]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ScreenNine')}
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
                  styles.textSignEight,
                  {
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontFamily: 'Lexend',
                  },
                ]}>
                Open
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignEight: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonEight: {
    alignItems: 'center',
    marginTop: 80,
  },
  

  });
  
export default ScreenEightButton