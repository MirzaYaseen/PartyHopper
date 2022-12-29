import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwo = () => {
  const navigation = useNavigation();
  return (

    <View>
      <View style={styles.buttonThree}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignThree,
                  {
                    color: '#246BFD',
                  },
                ]}>Terms Of Use
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('screenFour')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '98%',
                height: 60,
                marginTop: 10,
                backgroundColor: '#246BFD',
                borderRadius: 10,
                marginBottom:10
              }}>
              <Text
                style={[
                  styles.textSignThree,
                  {
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontFamily: 'Lexend',
                    fontSize:20
                  },
                ]}>
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 18,

                    color: '#246BFD',
                    marginBottom:20,
                    fontSize:20
                  }
                   
                }>Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignThree: {
   
    fontSize:20,
    color: '#FFFFFF',
  },
  buttonThree: {
    alignItems: 'center',
    marginTop: 210,
  },
  

  });
  
export default ScreenTwo