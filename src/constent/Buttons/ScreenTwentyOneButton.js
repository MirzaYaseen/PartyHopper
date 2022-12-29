import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentyOneButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      
      <View style={styles.buttonTwentyOne}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignTwentyOne,
                  {
                    color: '#246BFD',
                  },
                ]}>
                How your data is used
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ScreenTwentyTwo')}
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
                  styles.textSignTwentyOne,
                  {
                    color: '#FFFFFF',
                    fontWeight: '800',

                    fontFamily: 'Lexend',
                  },
                ]}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 5,

                  color: '#667085',
                }}>
                Use Regular Email
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwentyOne: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentyOne: {
    alignItems: 'center',
    marginTop: 210,
  },
  
  });
export default ScreenTwentyOneButton