import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenNineteenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
       <View style={styles.buttonNineteen}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignNineteen,
                  {
                    color: '#246BFD',
                  },
                ]}>
                Learn More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ScreenTwenty')}
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
                  styles.textSignNineteen,
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
                Skip and auto generate Username
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignNineteen: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonNineteen: {
    alignItems: 'center',
    marginTop: 170,
  },
  
  });
export default ScreenNineteenButton