import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenOne = () => {
  const navigation = useNavigation();
  return (

    <View>
      <View style={styles.buttonOne}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignOne,
                  {
                    color: '#246BFD',
                  },
                ]}>
                VIP Pass
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('screenTwo')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '98%',
                height: 60,
                marginTop: 10,
                backgroundColor: '#246BFD',
                borderRadius: 10,
                marginBottom:20
              }}>
              <Text
                style={[
                  styles.textSignOne,
                  {
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontFamily: 'Lexend',
                  },
                ]}>
                Join
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignOne: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonOne: {
    alignItems: 'center',
    marginTop: 80,
  },
  

  });
  
export default ScreenOne