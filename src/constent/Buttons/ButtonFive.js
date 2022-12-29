import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ButtonFive = () => {
  const navigation = useNavigation();
  return (

    <View>
      <View style={styles.ButtonFive}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignFive,
                  {
                    color: '#246BFD',
                  },
                ]}>How Your name is used
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('')}
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
                  styles.textSignFive,
                  {
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontFamily: 'Lexend',
                    fontSize:20
                  },
                ]}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 18,

                    color: '#246BFD',
                    marginBottom:20,
                    fontSize:20
                  }
                   
                }>Connect Snapchat
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignFive: {
   
    fontSize:20,
    color: '#FFFFFF',
  },
  ButtonFive: {
    alignItems: 'center',
    marginTop: 50,
  },
  

  });
  
export default ButtonFive