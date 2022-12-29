import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenFifteenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
    <View style={styles.buttonFifteen}>
          <TouchableOpacity>
            <Text
              style={[
                styles.textSignFifteen,
                {
                  color: '#246BFD',
                },
              ]}>
              See all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ScreenSixteen')}
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
                styles.textSignFifteen,
                {
                  color: '#FFFFFF',
                  fontWeight: '800',

                  fontFamily: 'Lexend',
                },
              ]}>
              Follow All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,

                color: '#667085',
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignFifteen: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonFifteen: {
    alignItems: 'center',
    marginTop: 12,
  },
  
  });
export default ScreenFifteenButton