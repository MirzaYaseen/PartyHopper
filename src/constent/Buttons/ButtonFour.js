import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenFour = () => {
  const navigation = useNavigation();
  return (

    <View>
      <View style={styles.buttonFour}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignFour,
                  {
                    color: '#246BFD',
                  },
                ]}>How Your Data is Used
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('screenFive')}
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
                  styles.textSignFour,
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
                   
                }>Don’t Connect
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignFour: {
   
    fontSize:20,
    color: '#FFFFFF',
  },
  buttonFour: {
    alignItems: 'center',
    marginTop: 340,
  },
  

  });
  
export default ScreenFour