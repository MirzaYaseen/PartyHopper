import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenTwentyFiveButton = () => {
  const navigation = useNavigation();
  return (
    <View>
        <View style={styles.buttonTwentyFive}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentySix')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '98%',
            height: 60,
            marginTop: 10,
            backgroundColor: '#98A2B3',
            borderRadius: 10,
          }}>
          <Text
            style={[
              styles.textSignTwentyFive,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Choose 4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,
              marginBottom: 5,
              color: '#667085',
            }}>
            why can't I skip?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignTwentyFive: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonTwentyFive: {
    alignItems: 'center',
    marginTop: 10,
  },
  
  });
export default ScreenTwentyFiveButton