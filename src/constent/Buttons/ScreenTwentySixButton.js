import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentySixButton = () => {
  const navigation = useNavigation();
  return (
    <View>
     <View style={styles.buttonTwentySix}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignTwentySix,
              {
                color: '#246BFD',
              },
            ]}>
            How your gender is used
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentySeven')}
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
              styles.textSignTwentySix,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Continue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,

              color: '#667085',
            }}>
            Why Can't I skip?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwentySix: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentySix: {
    alignItems: 'center',
    marginTop: 190,
  },
  
  });
export default ScreenTwentySixButton