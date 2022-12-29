import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwo = () => {
  const navigation = useNavigation();
  return (

    <View>
      <View style={styles.buttonTwo}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignTwo,
                  {
                    color: '#246BFD',
                  },
                ]}>Learn More
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('screenThree')}
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
                  styles.textSignTwo,
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
                   
                }>Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwo: {
   
    fontSize:20,
    color: '#FFFFFF',
  },
  buttonTwo: {
    alignItems: 'center',
    marginTop: 80,
  },
  

  });
  
export default ScreenTwo