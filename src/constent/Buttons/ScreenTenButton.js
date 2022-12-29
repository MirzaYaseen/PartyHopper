import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
       <View style={styles.buttonTen}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSignTen,
                  {
                    color: '#246BFD',
                  },
                ]}>
                Learn More
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
                  styles.textSignTen,
                  {
                    color: '#FFFFFF',
                    fontWeight: '800',

                    fontFamily: 'Lexend',
                  },
                ]}>
                Add
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 5,

                  color: '#667085',
                }}>
                Proceed without Adding
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTen: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTen: {
    alignItems: 'center',
    marginTop: 100,
  },
  
  });
export default ScreenTenButton