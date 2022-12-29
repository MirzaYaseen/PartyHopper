import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentyFourButton = () => {
  const navigation = useNavigation();
  return (
    <View>
       <View style={styles.buttonTwentyFour}>
          <TouchableOpacity>
            <Text
              style={[
                styles.textSignTwentyFour,
                {
                  color: '#246BFD',
                },
              ]}>
              Learn More
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ScreenTwentyFive')}
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
                styles.textSignTwentyFour,
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
              Proceed Without Adding
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwentyFour: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentyFour: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  
  });
export default ScreenTwentyFourButton